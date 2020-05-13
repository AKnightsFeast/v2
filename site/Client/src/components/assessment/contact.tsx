import React from 'react';

import { IndexedControlProp } from '../../modules/types';

export const Contact: React.FC<IndexedControlProp> = ({ index }) => {
    return (
        <div>
            <div className="field">
                <label>
                    <input className="form-input" id={`People_${index}__FirstName`} name={`People[${index}].FirstName`} placeholder="First Name"></input>
                    <span>First Name</span>
                </label>
                <label>
                    <input className="form-input" id={`People_${index}__LastName`} name={`People[${index}].LastName`} placeholder="Last Name"></input>
                    <span>Last Name</span>
                </label>
                <label title="Middle Initial">
                    <input className="form-input" id={`People_${index}__MiddleInitial`} name={`People[${index}].MiddleInitial`} placeholder="MI"></input>
                    <span>MI</span>
                </label>
                <label title="Date of Birth">
                    <input className="form-input" id={`People_${index}__DOB`} name={`People[${index}].DOB`} placeholder="DOB"></input>
                    <span>DOB</span>
                </label>
            </div>
            <div className="field">
                <label>
                    <input className="form-input" id={`People_${index}__Email`} name={`People[${index}].Email`} placeholder="Email"></input>
                    <span>Email</span>
                </label>
                <label>
                    <input className="form-input" id={`People_${index}__Phone`} name={`People[${index}].Phone`} placeholder="Phone #"></input>
                    <span>Phone #</span>
                </label>                           
            </div>
            <div>
                <div>&nbsp;</div>
                <input id={`People_${index}__UseContactInfo`} type='checkbox' title='Use Email/Phone' className='useContactInfo' />
                <label>&nbsp;Add Email/Phone</label>
            </div>
        </div>
    );
}