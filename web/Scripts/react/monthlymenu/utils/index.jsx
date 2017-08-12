let tuesdayCache = {};

export const LeftPad = (number, padLength) => {
    let output = number + '';

    while (output.length < padLength) {
        output = '0' + output;
    }

    return output;
}

export const GetTuesdays = (month, year) => {
    const dateKey = new String(year) + LeftPad(new Number(month), 2);
    let tuesdays = tuesdayCache[dateKey];

    if (!tuesdays) {
        var d = new Date(year, month);

        tuesdays = [];

        // Get the first Tuesday in the month
        d.setDate(d.getDate() + (9 - d.getDay()) % 7);

        // Get all the other Tuesdays in the month
        while (d.getMonth() === month) {
            tuesdays.push(new Date(d));
            d.setDate(d.getDate() + 7); // Get the next Tuesday
        }

        tuesdayCache[dateKey] = tuesdays;
    }

    return tuesdays;
};

export const GetDateKey = (month, year) => {
    return year.toString() + LeftPad(month, 2);
}

export const GetMonthArray = () => (
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
);

/**
 * Returns reducer based on key-type "action.type"
 */
export function CreateReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const handler = handlers[action.type];

        return handler ? handler(state, action.payload) : state;
    };
}