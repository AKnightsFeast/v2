import React, { useState } from 'react';

import { useInput } from '../../utils';
import { Person } from '../../modules/types';
import { IIndexedControlProp } from '../../modules/types';

interface IContactProp extends IIndexedControlProp {
    person: Person,
    contactInfoOptional?: boolean,
    onContactUpdate?: (person: Person) => void,
}

export const Contact: React.FC<IContactProp> = ({ person, contactInfoOptional = true, onContactUpdate }) => {
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

    return (
        <>
            <div className="field row">
                <label>
                    <span>First Name</span>
                    {/*id={`People_${index}__FirstName`} name={`People[${index}].FirstName`}*/}
                    <input type="text" placeholder="First Name" {...bindFName} />
                </label>
                <label title="Middle Initial">
                    <span>MI</span>
                    {/*id={`People_${index}__MiddleInitial`} name={`People[${index}].MiddleInitial`}*/}
                    <input type="text" placeholder="MI" maxLength={1} {...bindMI} />
                </label>
                <label>
                    <span>Last Name</span>
                    {/*id={`People_${index}__LastName`} name={`People[${index}].LastName`}*/}
                    <input type="text" placeholder="Last Name" {...bindLName} />
                </label>
            </div>
            <div className="field">
                <label title="Date of Birth">
                    <span>DOB</span>
                    {/*id={`People_${index}__DOB`} name={`People[${index}].DOB`}*/}
                    <input type="text" placeholder="DOB" {...bindDOB} />
                </label>
            </div>
            <div className="field col">
                <label>
                    <span>Email</span>
                    {/*id={`People_${index}__Email`} name={`People[${index}].Email`}*/}
                    <input type="text" placeholder="Email" {...bindEmail} />
                </label>
                <label>
                    <span>Phone #</span>
                    {/*id={`People_${index}__Phone`} name={`People[${index}].Phone`}*/}
                    <input type="text" placeholder="Phone #" {...bindPhone} />
                </label>                           
            </div>
            {
                (contactInfoOptional) ?
                    <div>
                        <div>&nbsp;</div>
                        {/*id={`People_${index}__UseContactInfo`}*/}
                        <input type='checkbox' title='Use Email/Phone' className='useContactInfo' />
                        <label>&nbsp;Add Email/Phone</label>
                    </div> :
                    <></>
            }
        </>
    );
}