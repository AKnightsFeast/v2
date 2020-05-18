import { useState, useCallback, useEffect, useLayoutEffect, FormEvent } from 'react';

import { Month } from '../modules/types';
import { TweenFunctionEnum, OrderDirection } from '../modules/enums';

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

type easingType = {[key in keyof typeof TweenFunctionEnum]: (t: number, b: number, _c: number, d: number, s?: number) => number};

// https://github.com/chenglou/tween-functions/blob/master/index.js
// t: current time, b: beginning value, _c: final value, d: total duration
export const TweenFunctions: easingType = {
    linear: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * t / d + b;
    },
    easeInQuad: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        } else {
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    },
    easeInCubic: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        } else {
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    },
    easeInQuart: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        } else {
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    },
    easeInQuint: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        } else {
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    easeInSine: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if (t === 0) {
            return b;
        }
        if (t === d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        } else {
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    easeInCirc: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        } else {
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    easeInElastic: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        let a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
            return b;
        } else if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        let a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
            return b;
        } else if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        let a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
            return b;
        } else if ((t /= d / 2) === 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        } else {
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        }
    },
    easeInBack: function (t: number, b: number, _c: number, d: number, s: number | undefined) {
        let c = _c - b;
        if (s === void 0) {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t: number, b: number, _c: number, d: number, s: number | undefined) {
        let c = _c - b;
        if (s === void 0) {
            s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t: number, b: number, _c: number, d: number, s: number | undefined) {
        let c = _c - b;
        if (s === void 0) {
            s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        } else {
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
    },
    easeInBounce: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        let v;
        v = TweenFunctions.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
    },
    easeOutBounce: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
    },
    easeInOutBounce: function (t: number, b: number, _c: number, d: number) {
        let c = _c - b;
        let v;
        if (t < d / 2) {
            v = TweenFunctions.easeInBounce(t * 2, 0, c, d);
            return v * 0.5 + b;
        } else {
            v = TweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
            return v * 0.5 + c * 0.5 + b;
        }
    }
};

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
})(new Date().getFullYear(), 2012);

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

export const isUsingBrowser = typeof window != 'undefined';

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
export const useInput = (initialValue: string, onChange: () => void) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => { onChange(); }, [value]);

    return {
        value,
        //reset: () => setValue(""),
        bind: {
            value,
            onChange: (e: FormEvent<HTMLInputElement>) => { setValue(e.currentTarget.value); }
        }
    };
};