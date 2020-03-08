import { OrderDirection } from '../modules/enums';

export const YearArray: number[] = ((startYear: number, endYear: number): number[] => {
    let years: number[] = [];

    for (let year: number = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());

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