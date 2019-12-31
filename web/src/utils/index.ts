export const MonthArray: string[] = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

export const YearArray: number[] = ((startYear: number, endYear: number): number[] => {
    let years: number[] = [];

    for (let year: number = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());    

export interface ColumnedArrayItem<T> {
    item: T,
    key: number
};

export enum OrderDirection {
    Vertical,
    Horizontal
}

export const ColumnizeArray = <T>(colSize: number, arr: T[], direction: OrderDirection = OrderDirection.Horizontal): ColumnedArrayItem<T>[][] => {
    let arrSize = 0;

    if (arr && (arrSize = arr.length) > 0)
    {
        let counter: number = 0;
        let colItems: ColumnedArrayItem<T>[][] = [];
        let noItemsPerCol: number = Math.floor(arrSize / colSize);

        arr.forEach((item: T, index: number) => {
            if (direction === OrderDirection.Horizontal)
            {
                if (index < colSize)
                {
                    colItems.push([]);
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
                colItems.push([]);
                if (index >= colSize) counter++;
            }

            colItems[counter].push({ key: index, item: item });
        });

        return colItems;
    }

    return [];
};