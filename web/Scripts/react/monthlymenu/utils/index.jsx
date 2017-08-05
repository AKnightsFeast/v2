let tuesdayCache = {};

export const LeftPad = (number, padLength) => {
    let output = number + '';

    while (output.length < padLength) {
        output = '0' + output;
    }

    return output;
}

export const GetTuesdays = (month, year) => {
    const tuesdayCacheKey = new String(year) + LeftPad(new Number(month), 2);
    let tuesdays = tuesdayCache[tuesdayCacheKey];

    if (!tuesdays) {
        var d = new Date(year, month);//,
            //month = d.getMonth(),

        tuesdays = [];

        //d.setDate(1);

        // // Get the first Monday in the month
        // while (d.getDay() !== 2) {
        //     d.setDate(d.getDate() + 1);
        // }

        d.setDate(d.getDate() + (9 - d.getDay()) % 7);

        // Get all the other Tuesdays in the month
        while (d.getMonth() === month) {
            tuesdays.push(LeftPad(new Date(d.getTime()).getDate(), 2));
            d.setDate(d.getDate() + 7);
        }

        tuesdayCache[tuesdayCacheKey] = tuesdays;
    }

    return tuesdays;
};

export const GetDateKey = (month, year) => {
    return year.toString() + LeftPad(month, 2);
}

/**
 * Returns reducer based on key-type "action.type"
 */
export function CreateReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const handler = handlers[action.type];

        return handler ? handler(state, action.payload) : state;
    };
}