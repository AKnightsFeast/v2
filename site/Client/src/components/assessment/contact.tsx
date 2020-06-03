import React, { useState, FormEvent } from 'react';

import { useInput, InputBinding } from '../../utils';
import { Person, IIndexedControlProp } from '../../modules/types';

interface IContactProp extends IIndexedControlProp {
    person: Person,
    onContactUpdate?: (person: Person) => void,
}

export const Contact: React.FC<IContactProp> = ({ index, person, onContactUpdate }) => {
    const namePrefix = (index !== undefined ? `people[${index}]` : "contact") + ".";
    const [contact, updateContact] = useState<Person>(person);

    const updateAssessment = () => {
        const newPerson = { id: person.id, fname: fname, mi: mi, lname: lname, dob: new Date(dob), email: email, phone: phone };
        updateContact(newPerson);
        onContactUpdate && onContactUpdate(newPerson);
    };

    const { value:dob, bind:bindDOB } = useInput(contact.dob ? contact.dob.toString() : "", () => { updateAssessment(); });
    const { value:mi, bind:bindMI } = useInput(contact.mi ?? "", () => { updateAssessment(); });
    const { value:lname, bind:bindLName } = useInput(contact.lname ?? "", () => { updateAssessment(); });
    const { value:email, bind:bindEmail } = useInput(contact.email ?? "", () => { updateAssessment(); });
    const { value:phone, bind:bindPhone } = useInput(contact.phone ?? "", () => { updateAssessment(); });
    const { value:fname, bind:bindFName, /*reset:resetFName*/ } = useInput(contact.fname ?? "", () => { updateAssessment(); });

    const formatDOB = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        if (value.match(/^\d{2}$/) !== null) {
            e.currentTarget.value = value + "/";
        } else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
            e.currentTarget.value = value + "/";
        }
    };

    return (
        <>
            <div className="field row">
                <label>
                    <span>First Name</span>
                    <input type="text" name={`${namePrefix}fname`} placeholder="First Name" {...bindFName} />
                </label>
                <label title="Middle Initial">
                    <span>MI</span>
                    <input type="text" name={`${namePrefix}mi`} placeholder="MI" maxLength={1} {...bindMI} />
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text" name={`${namePrefix}lname`} placeholder="Last Name" {...bindLName} />
                </label>
            </div>
            <div className="field">
                <label title="Date of Birth">
                    <span>DOB</span>
                    <input type="text" name={`${namePrefix}dob`} placeholder="MM/DD/YYYY" {...bindDOB} onKeyUp={formatDOB} maxLength={10} />
                </label>
            </div>
            <div className="field col">
                <label>
                    <span>Email</span>
                    <input type="email" name={`${namePrefix}email`} placeholder="Email" {...bindEmail} />
                </label>
                <label>
                    <span>Phone #</span>
                    <input type="text" name={`${namePrefix}phone`} placeholder="Phone" {...bindPhone} />
                </label>
            </div>
        </>
    );
}