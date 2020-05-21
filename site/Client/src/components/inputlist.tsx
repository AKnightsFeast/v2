import React, { useState, useCallback, FormEvent } from "react";

import { KeyTypes } from '../modules/records';

export enum InputTypeEnum {
    Checkbox,
    RadioButton,
}

type InputListItem = {
    label: string,
    value: string
}

type InputListProp = {
    name: string,
    values: string[],
    type: InputTypeEnum,
    items: InputListItem[] | Record<KeyTypes, string>,
    onChange: (values: string[]) => void,
}

type InputOptions = {
    label: string,
    value: string,
}

const isRadioButtonItemArr = (v: any): v is InputListItem[] => (v as InputListItem[]).length !== undefined;

export const InputList: React.FC<InputListProp> = ({ name, values, items, type, onChange }) => {
    const [ selectedValues, setValues ] = useState(values);

    const inputOptions: InputOptions[] = [];
    const inputType = (type === InputTypeEnum.RadioButton) ? "radio" : "checkbox"
    const muiIconName = (type === InputTypeEnum.RadioButton) ? "check_circle" : "add_box";
    const rbClassName = `pretty p-icon p-smooth p-plain p-bigger${type === InputTypeEnum.RadioButton ? " p-round" : ""}`;

    const onItemClick = useCallback((e: FormEvent<HTMLInputElement>) => {
        let newValues: string[] = [];
        const clickedValue = e.currentTarget.value;

        if (type === InputTypeEnum.RadioButton) {
            newValues.push(clickedValue);
        } else {
            newValues = [...selectedValues];
            const valueIndex = selectedValues.indexOf(clickedValue);

            if (valueIndex > -1) {
                newValues.splice(valueIndex, 1);
            } else {
                newValues.push(clickedValue);
            }
        }

        setValues(newValues);

        onChange && onChange(newValues);
    }, [selectedValues]);

    if (isRadioButtonItemArr(items)) {
        (items as InputListItem[]).map(rb => { inputOptions.push(
            {
                label: rb.label,
                value: rb.value,
            });
        });
    } else {
        Object.entries(items as Record<KeyTypes, string>).filter(entry => !Number(entry[0])).map(entry => { inputOptions.push(
            {
                label: entry[1] as string,
                value: entry[0],
            });
        });
    }

    return (
        <div className="flex justify-start items-center text-truncate">
        {
            inputOptions.map(io => (
                <div key={`${name}_${io.value}`} className="rounded-lg bg-white shadow-sm mr-4 pl-4 pr-6 py-3">
                    <div className={`${rbClassName} `}>
                        <input type={inputType} name={name} value={io.value} checked={io.value ? selectedValues.indexOf(io.value) > -1 : undefined} onChange={onItemClick} />
                        <div className="state p-primary-o">
                            <i className="icon material-icons">{muiIconName}</i>
                            <label>{io.label}</label>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
}