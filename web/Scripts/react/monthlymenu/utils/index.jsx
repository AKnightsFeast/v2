import React from 'react';

export const BindClosures = (closuresMap) => {
    return (Component) => {
        const componentName = Component.displayName || Component.name || 'Component';
        const closureNames = Object.keys(closuresMap);

        const spec = closureNames.reduce((memo, closureName) => {
            const injectedClosure = closuresMap[closureName];

            memo[closureName] = function boundClosure(...args) {
                return injectedClosure(this.props, ...args);
            };

            return memo;
        }, {});

        spec.componentWillMount = function componentWillMount() {
            this.__closures = closureNames.reduce((memo, closureName) => {
                memo[closureName] = this[closureName];
                return memo;
            }, {});
        };

        spec.render = function render() {
            const newProps = {
                ...this.props,
                ...this.__closures
            };

            return Component(newProps);
        };

        const Wrapper = React.createClass(spec);
        Wrapper.displayName = 'ClosureWrapper(' + componentName + ')';

        return Wrapper;
    };
};

export const LeftPad = (number, padLength) => {
    let output = number + '';

    while (output.length < padLength) {
        output = '0' + output;
    }

    return output;
}

export const GetFormattedDate = (date, format) => {
    format = format || { month: 'short', day: '2-digit' };

    return date.toLocaleDateString("en-US", format) + " " + date.getFullYear();
}

let tuesdayCache = {};

export const GetTuesdays = (month, year) => {
    const today = new Date();
    const dateKey = year + LeftPad(month, 2);

    let tuesdays = tuesdayCache[dateKey];

    if (!tuesdays) {
        var d = new Date(year, month);

        tuesdays = [];

        // Get the first Tuesday in the month
        d.setDate(d.getDate() + (9 - d.getDay()) % 7);

        // Get all the other Tuesdays in the month
        while (d.getMonth() === month) {
            tuesdays.push({
                attr: {},
                date: new Date(d),
                label: GetFormattedDate(d)
            });

            d.setDate(d.getDate() + 7); // Get the next Tuesday
        }

        tuesdayCache[dateKey] = tuesdays;
    }

    tuesdays.forEach((tues) => {
        let day = tues.date;

    /*
        let dayDate = day.getDate();
        let dayMonth = day.getMonth();
        let dayYear = day.getFullYear();
        let sunDate = new Date(dayYear, dayMonth, dayDate - 2);
        let satDate = new Date(dayYear, dayMonth, dayDate + 4);
        
        tues.attr.checked = (day === today) || (sunDate <= today && satDate >= today);
    */
        tues.attr.disabled = day > today;
    });

    return tuesdays;
};

export const YearArray = ((startYear, endYear) => {
    let years = [];

    for (let year = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());

export const MonthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Returns reducer based on key-type "action.type"
 */
export const CreateReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        const handler = handlers[action.type];

        return handler ? handler(state, action.payload) : state;
    };
}