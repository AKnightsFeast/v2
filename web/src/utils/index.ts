import { Month } from '../modules/types';
import { OrderDirection } from '../modules/enums';

export const Months: Map<number, Month> = new Map([
    [1, { Abbr: "Jan", Name: "January", Number: 1 }],
    [2, { Abbr: "Feb", Name: "February", Number: 2 }],
    [3, { Abbr: "Mar", Name: "March", Number: 3 }],
    [4, { Abbr: "Apr", Name: "April", Number: 4 }],
    [5, { Abbr: "May", Name: "May", Number: 5 }],
    [6, { Abbr: "Jun", Name: "June", Number: 6 }],
    [7, { Abbr: "Jul", Name: "July", Number: 7 }],
    [8, { Abbr: "Aug", Name: "August", Number: 8 }],
    [9, { Abbr: "Sep", Name: "September", Number: 9 }],
    [10, { Abbr: "Oct", Name: "October", Number: 10 }],
    [11, { Abbr: "Nov", Name: "November", Number: 11 }],
    [12, { Abbr: "Dec", Name: "December", Number: 12 }]
]);

export const getMonthByNumber = (number: number): Month | null | undefined => ((number < 0 || number > 12) ? null : Months.get(number));

export const YearArray: number[] = ((startYear: number, endYear: number): number[] => {
    let years: number[] = [];
    let year = startYear;

    if (startYear < endYear) {
        for (; year <= endYear; year++) { years.push(year); }
    } else if (startYear > endYear) {
        for (; year >= endYear; year--) { years.push(year); }
    } else {
        years.push(year);
    }

    return years;
})(new Date().getFullYear(), 2013);

export const ColumnizeArray = <T>(colSize: number, arr: T[], direction: OrderDirection = OrderDirection.Horizontal): Map<number, T>[] => {
    let arrSize = 0;

    if (arr && (arrSize = arr.length) > 0)
    {
        let counter: number = 0;
        let colItems: Map<number, T>[] = [];
        let noItemsPerCol: number = Math.floor(arrSize / colSize);

        arr.forEach((item: T, index: number) => {
            if (direction === OrderDirection.Horizontal)
            {
                if (index < colSize)
                {
                    colItems.push(new Map<number, T>());
                    counter = index;
                }
                else if (counter + 1 < colSize)
                {
                    counter++;
                }
                else
                {
                    counter = 0;
                }
            }
            else if (index % noItemsPerCol === 0)
            {
                colItems.push(new Map<number, T>());
                if (index >= colSize) counter++;
            }

            colItems[counter].set(index, item);
        });

        return colItems;
    }

    return [];
};