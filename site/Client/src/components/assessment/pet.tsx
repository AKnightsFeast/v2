import React, { useState, useEffect } from 'react';

import { useInput } from '../../utils';
import { IIndexedControlProp } from '../../modules/types';
import { InputTypeEnum, InputList } from '../../components/inputlist';
import { YesNoBoolTypes, AssessmentPetLocation } from '../../modules/records';

interface IPetProp extends IIndexedControlProp {
    animal: Pet,
    onPetUpdate?: (pet: Pet) => void,
}

export type Pet = {
    id: string,
    name: string,
    type: string,
    friendly?: boolean,
    location: string[],
};

export const Pet: React.FC<IPetProp> = ({ animal, onPetUpdate }) => {
    const [pet, updatePet] = useState<Pet>(animal);
    
    const { value:type, bind:bindType } = useInput(pet.type, () => { updateTextFields(); });
    const { value:name, bind:bindName, /*reset:resetFName*/ } = useInput(pet.name, () => { updateTextFields(); });

    useEffect(() => {
        onPetUpdate && onPetUpdate(pet);
    }, [pet])

    const updateTextFields = () => {
        updatePet({ ...pet, ...{ name: name, type: type } });
    };

    const updateFriendly = (values: string[]) => {
        updatePet({ ...pet, ...{ friendly: values[0] === YesNoBoolTypes.true }});
    };

    const updateLocation = (values: string[]) => {
        updatePet({ ...pet, ...{ location: values }});
    }

    return (
        <div className='cls'>
            <input type='hidden' name='Pets.Index' value='index' />
            <div className='field'>
                <label title="Name">
                    {/*className='name entry required' id={`Pets_${index}__Name`} name={`Pets[${index}].Name`}*/}
                    <span>Name</span>
                    <input title='Name' type='text' maxLength={30} style={{width: '250px'}} {...bindName} />
                </label>
                <label title="Type/Breed">
                    {/*className='type entry required' id={`Pets_${index}__Breed`} name={`Pets[${index}].Breed`}*/}
                    <span>Type/Breed</span>
                    <input title='Type/Breed' type='text' maxLength={50} style={{width: '380px'}} {...bindType} />
                </label>
            </div>
            <div className='field'>
                <div className='field'>
                    {/*
                    name={`Pets[${index}].IsFriendly`} value='true'
                    name={`Pets[${index}].IsFriendly`} value='false'
                    */}
                    <span>Friendly?</span>
                    <InputList type={InputTypeEnum.RadioButton} values={pet.friendly ? [ pet.friendly.toString() ] : []} name={`friendly_${pet.id}`} items={YesNoBoolTypes} onChange={ updateFriendly } />
                </div>
                <div className='field'>
                    {/*
                    name={`Pets[${index}].Location`}
                    name={`Pets[${index}].Location`}
                    */}
                    <span>Normally stays</span>
                    <InputList type={InputTypeEnum.Checkbox} values={ pet.location } name={`location_${pet.id}`} items={AssessmentPetLocation} onChange={ updateLocation } />
                </div>
            </div>
        </div>
    );
}