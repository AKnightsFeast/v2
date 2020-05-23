import React, { useState, FormEvent } from 'react';

import { useInput, InputBinding } from '../../utils';
import { Person } from '../../modules/types';
import { IIndexedControlProp } from '../../modules/types';
import { register } from '../../serviceWorker';

interface IContactProp extends IIndexedControlProp {
    person: Person,
    contactInfoOptional?: boolean,
    onContactUpdate?: (person: Person) => void,
}

type InputAttributes = {
    type: string,
    name: string,
    placeholder: string,
    binding: InputBinding,
};

export const Contact: React.FC<IContactProp> = ({ index, person, contactInfoOptional = true, onContactUpdate }) => {
    const namePrefix = (index ? `People[${index}]` : "Contact") + ".";
    const [contact, updateContact] = useState<Person>(person);

    const updateAssessment = () => {
        const newPerson = { id: person.id, fname: fname, mi: mi, lname: lname, dob: dob, email: email, phone: phone };
        updateContact(newPerson);
        onContactUpdate && onContactUpdate(newPerson);
    };

    const { value:dob, bind:bindDOB } = useInput(contact.dob, () => { updateAssessment(); });
    const { value:mi, bind:bindMI } = useInput(contact.mi ?? "", () => { updateAssessment(); });
    const { value:lname, bind:bindLName } = useInput(contact.lname, () => { updateAssessment(); });
    const { value:email, bind:bindEmail } = useInput(contact.email ?? "", () => { updateAssessment(); });
    const { value:phone, bind:bindPhone } = useInput(contact.phone ?? "", () => { updateAssessment(); });
    const { value:fname, bind:bindFName, /*reset:resetFName*/ } = useInput(contact.fname, () => { updateAssessment(); });

    const emailAttributes: InputAttributes = {
        type: "text",
        name: `${namePrefix}Email`,
        placeholder: "Email",
        binding: bindEmail,
    }

    const phoneAttributes: InputAttributes = {
        type: "text",
        name: `${namePrefix}Phone`,
        placeholder: "Phone #",
        binding: bindPhone,
    }

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
                    <input type="text" name={`${namePrefix}FirstName`} placeholder="First Name" {...bindFName} />
                </label>
                <label title="Middle Initial">
                    <span>MI</span>
                    <input type="text" name={`${namePrefix}MiddleInitial`} placeholder="MI" maxLength={1} {...bindMI} />
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text" name={`${namePrefix}LastName`} placeholder="Last Name" {...bindLName} />
                </label>
            </div>
            <div className="field">
                <label title="Date of Birth">
                    <span>DOB</span>
                    <input type="text" name={`${namePrefix}DOB`} placeholder="MM/DD/YYYY" {...bindDOB} onKeyUp={formatDOB} maxLength={10} />
                </label>
            </div>
            <div className="field col">
                <label>
                    <span>Email</span>
                    <input type="text" placeholder="Email" name={`${namePrefix}Email`} {...bindEmail} />
                </label>
                <label>
                    <span>Phone #</span>
                    <input type="text" placeholder="Phone" name={`${namePrefix}Phone`} {...bindPhone} />
                </label>
            </div>
        </>
    );
}