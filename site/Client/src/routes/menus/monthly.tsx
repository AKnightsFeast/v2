import React, { useRef, useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import Viewer, { Worker, ToolbarSlot, Slot, RenderToolbar, defaultLayout } from '@phuocng/react-pdf-viewer';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import { Months } from '../../modules/data';
import { YearArray, getMonthByNumber } from '../../utils';
import { ApplicationState, Month } from '../../modules/types';
import { setMenuYear, setMenuMonth, LoadMenuDatesAsync } from '../../store/menus/monthly/actions';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

export const Monthly: React.FC = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector((state: ApplicationState) => state.MonthlyMenu.IsLoading);
    const menuDates = useSelector((state: ApplicationState) => state.MonthlyMenu.MenuDates);
    const menuYear = useSelector((state: ApplicationState) => state.MonthlyMenu.SelectedYear);
    const menuMonth = useSelector((state: ApplicationState) => state.MonthlyMenu.SelectedMonth);

    const menuYearRef = useRef(menuYear);
    const [, refreshMenuYear] = useState<any>();

    const pdfName = useRef('');

    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
  
    function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
      setNumPages(numPages);
    }
  
    const setSelectedMonth = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const year = menuYearRef.current;
        const month = getMonthByNumber(+e.currentTarget.value);
        
        dispatch(setMenuYear(year));
        dispatch(setMenuMonth(month));

        if (month !== undefined && month !== null) setPdfUrl(year, month.Number);
    }, [menuMonth]);

    const getMonthsForYear = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        menuYearRef.current = +e.currentTarget.value;

        dispatch(LoadMenuDatesAsync.request(menuYearRef.current));

        refreshMenuYear({});
    }, [menuYearRef.current]);

    const setPdfUrl = (year: number, moNumber: number): void => {
        pdfName.current = `../../../assets/menus/${year + moNumber.toLocaleString(navigator.language, { minimumIntegerDigits: 2, useGrouping: false })}.pdf`;
    };

    return (
        <section className="menu-monthly">
            <div className="content">
                <div className="selectors">
                    <div className="years">
                        <select value={ `${menuYearRef.current}` } onChange={ getMonthsForYear }>
                        {
                            YearArray?.map((year: number, index: number) => (
                                <option key={ index } value={ year }>{ year }</option>
                            ))
                        }
                        </select>
                    </div>
                    <div className="months">
                    {
                        Array.from(Months.entries())?.map((entry: [number, Month]) => {
                            let key = entry[0];
                            let month = entry[1];

                            if (!isLoading && menuDates && menuDates.size > 0) {
                                let activeMonths = menuDates.get(menuYearRef.current);

                                if (activeMonths && activeMonths.includes(key))
                                    if (menuMonth?.Number === key)
                                        return (<div key={ key } className="month-selected">{ month.Abbr }</div>);
                                    else
                                        return (<button key={ key } value={ key } onClick={ setSelectedMonth } className="month-active">{ month.Abbr }</button>);
                            }

                            return (<div key={ key } className="month-inactive">{ month.Abbr }</div>);
                        })
                    }
                    </div>
                </div>
                <div className="menu">
                {
                    (menuMonth === undefined || menuMonth === null) ?
                        <div className="menu-title">Select a year and month to see a menu...</div> :
                        <>
                            <div className="menu-title">Menu for {menuMonth.Name} {menuYear}</div>
                            <div className="menu-viewer">
                                <Document file={pdfName.current} onLoadSuccess={onDocumentLoadSuccess}>
                                {
                                    Array.from(new Array(numPages), (el, index) => (
                                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                                        )
                                    )
                                }
                                </Document>
                            </div>
                        </>
                }
                </div>
            </div>
        </section>
    );
};