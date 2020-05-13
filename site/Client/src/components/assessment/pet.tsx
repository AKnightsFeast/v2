import React from 'react';

import { IndexedControlProp } from '../../modules/types';

export const Pet: React.FC<IndexedControlProp> = ({ index }) => {
    return (
        <div className='cls'>
            <input type='hidden' name='Pets.Index' value='index' />
            <div className='field'>
                <div>
                    <input className='name entry required' id={`Pets_${index}__Name`} name={`Pets[${index}].Name`} title='Name' type='text' maxLength={30} style={{width: '250px'}} />
                    <div><label>* Name</label></div>
                </div>
                <div>
                    <input className='type entry required' id={`Pets_${index}__Breed`} name={`Pets[${index}].Breed`} title='Type/Breed' type='text' maxLength={50} style={{width: '380px'}} />
                    <div><label>* Type/Breed</label></div>
                </div>
            </div>
            <div className='field'>
                <div className='field'>
                    <div>Friendly?</div>
                    <div><label><input type='radio' name={`Pets[${index}].IsFriendly`} value='true' checked={true} /> Yes</label></div>
                    <div><label><input type='radio' name={`Pets[${index}].IsFriendly`} value='false' /> No</label></div>
                </div>
                <div className='field'>
                    <div style={{paddingLeft: '20px'}}>Normally stays</div>
                    <div><label><input name={`Pets[${index}].Location`} type='checkbox' value='Inside' /> Inside</label></div>
                    <div><label><input name={`Pets[${index}].Location`} type='checkbox' value='Outside' /> Outside</label></div>
                </div>
            </div>
        </div>
    );
}