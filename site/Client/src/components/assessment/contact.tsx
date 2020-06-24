import React, { useState, FormEvent } from 'react';
import InputMask from 'react-input-mask';

import { useInput } from '../../utils';
import { Person, IIndexedControlProp } from '../../modules/types';

interface IContactProp extends IIndexedControlProp {
    person: Person,
    onContactUpdate?: (person: Person) => void,
}

export const Contact: React.FC<IContactProp> = ({ index, person, onContactUpdate }) => {
    const namePrefix = (index !== undefined ? `people[${index}]` : "contact") + ".";
    const [contact, updateContact] = useState<Person>(person);

    const updateAssessment = () => {
        const newPerson = {
            id: person.id,
            fname: (fname === "" ? null : fname),
            mi: (mi === "" ? null : mi),
            lname: (lname === "" ? null : lname),
            dob: (dob === "" ? null : new Date(dob)),
            email: (email === "" ? null : email),
            phone: (phone === "" ? null : phone)
        };

        updateContact(newPerson);
        onContactUpdate && onContactUpdate(newPerson);
    };

    const { value:dob, bind:bindDOB } = useInput(contact.dob ? contact.dob.toString() : "", () => { updateAssessment(); });
    const { value:mi, bind:bindMI } = useInput(contact.mi ?? "", () => { updateAssessment(); });
    const { value:lname, bind:bindLName } = useInput(contact.lname ?? "", () => { updateAssessment(); });
    const { value:email, bind:bindEmail } = useInput(contact.email ?? "", () => { updateAssessment(); });
    const { value:phone, bind:bindPhone } = useInput(contact.phone ?? "", () => { updateAssessment(); });
    const { value:fname, bind:bindFName, /*reset:resetFName*/ } = useInput(contact.fname ?? "", () => { updateAssessment(); });

    return (
        <>
            <div className="field row">
                <label>
                    <span>First Name</span>
                    <input type="text" name={`${namePrefix}fname`} placeholder="First Name" maxLength={30} style={{width: `${index === undefined ? "250" : "180"}px`}} {...bindFName} />
                </label>
                <label title="Middle Initial">
                    <span>MI</span>
                    <input type="text" name={`${namePrefix}mi`} placeholder="MI" maxLength={1} style={{width: "50px"}} {...bindMI} />
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text" name={`${namePrefix}lname`} placeholder="Last Name" maxLength={50} style={{width: `${index === undefined ? "250" : "180"}px`}} {...bindLName} />
                </label>
                <label title="Date of Birth">
                    <span>DOB</span>
                    <InputMask type="text" name={`${namePrefix}dob`} placeholder="DOB" style={{width: `${index === undefined ? "150" : "120"}px`}} {...bindDOB} mask="99/99/9999" />
                </label>
            </div>
            <div className="field row">
                <label>
                    <span>Email</span>
                    <input type="email" name={`${namePrefix}email`} placeholder="Email" maxLength={70} style={{width: `${index === undefined ? "350" : "320"}px`}} {...bindEmail} />
                </label>
                <label>
                    <span>Phone #</span>
                    <InputMask type="text" name={`${namePrefix}phone`} placeholder="Phone #" style={{width: `${index === undefined ? "200" : "150"}px`}} {...bindPhone} mask="999-999-9999" />
                </label>
            </div>
        </>
    );
}