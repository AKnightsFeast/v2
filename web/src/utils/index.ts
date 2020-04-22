import { Month } from '../modules/types';
import { OrderDirection } from '../modules/enums';

export const Months: Map<number, Month> = new Map([
    [1, { Abbr: "Jan", Name: "January" }],
    [2, { Abbr: "Feb", Name: "February" }],
    [3, { Abbr: "Mar", Name: "March" }],
    [4, { Abbr: "Apr", Name: "April" }],
    [5, { Abbr: "May", Name: "May" }],
    [6, { Abbr: "Jun", Name: "June" }],
    [7, { Abbr: "Jul", Name: "July" }],
    [8, { Abbr: "Aug", Name: "August" }],
    [9, { Abbr: "Sep", Name: "September" }],
    [10, { Abbr: "Oct", Name: "October" }],
    [11, { Abbr: "Nov", Name: "November" }],
    [12, { Abbr: "Dec", Name: "December" }]
]);

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

/**
 * Returns reducer based on key-type "action.type"
 */
//export const CreateReducer = (initialState: object, handlers: any) => (state = initialState, action: any) => {
//    const handler = handlers[action.type];
//
//    return handler ? handler(state, action.payload) : state;
//};

// export const ChangeState = <T extends number>(key: any) => {
//     return (state: object, action: IReducerAction<T>) => {
//         return {
//             ...state,
//             [key]: action.payload
//         }
//     }
// }