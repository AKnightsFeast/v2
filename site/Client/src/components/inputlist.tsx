import React, { PropsWithChildren } from "react";

export enum InputTypeEnum {
    Checkbox,
    RadioButton,
}

type InputListItem = {
    label: string,
    value: string
}

type InputListProp<T> = {
    name: string,
    type: InputTypeEnum,
    items: InputListItem[] | T
}

const isRadioButtonItemArr = (v: any): v is InputListItem[] => (v as InputListItem[]).length !== undefined;

export const InputList = <T,>({ children, name, items, type }: PropsWithChildren<InputListProp<T>>) => {
    const inputType = (type === InputTypeEnum.RadioButton) ? "radio" : "checkbox"
    const rbClassName = `pretty p-icon p-smooth p-plain p-bigger${type === InputTypeEnum.RadioButton ? " p-round" : ""}`;
    const rbDivClassName = "state p-primary-o";
    const muiIconName = (type === InputTypeEnum.RadioButton) ? "check_circle" : "add_box";

    return (
        <>
            {
                (isRadioButtonItemArr(items)) ?
                    (items as InputListItem[]).map(rb => (
                        <div className={rbClassName}>
                            <input type={inputType} name={name} value={rb.value} />
                            <div className={rbDivClassName}>
                                <i className="icon material-icons">{muiIconName}</i>
                                <label>{rb.label}</label>
                            </div>
                        </div>
                    )) :
                    Object.entries(items).filter(entry => !Number(entry[0])).map(entry => (
                        <div className={rbClassName}>
                            <input type={inputType} name={name} value={entry[0]} />
                            <div className={rbDivClassName}>
                                <i className="icon material-icons">{muiIconName}</i>
                                <label>{entry[1]}</label>
                            </div>
                        </div>
                    ))
            }
        </>
    );
}