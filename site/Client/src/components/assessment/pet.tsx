import React, { useState, useEffect } from 'react';

import { useInput } from '../../utils';
import { InputTypeEnum, InputList } from '../../components/inputlist';
import { CustomerPet, IIndexedControlProp } from '../../modules/types';
import { YesNoBoolTypes, AssessmentPetLocationKeyTypes, AssessmentPetLocation } from '../../modules/records';

interface IPetProp extends IIndexedControlProp {
    animal: CustomerPet,
    onPetUpdate?: (pet: CustomerPet) => void,
}

export const Pet: React.FC<IPetProp> = ({ index, animal, onPetUpdate }) => {
    const namePrefix = (index !== undefined ? `pets[${index}]` : "pet") + ".";
    const [pet, updatePet] = useState<CustomerPet>(animal);
    
    const { value:type, bind:bindType } = useInput(pet.type ?? "", () => { updateTextFields(); });
    const { value:name, bind:bindName, /*reset:resetFName*/ } = useInput(pet.name ?? "", () => { updateTextFields(); });

    useEffect(() => {
        onPetUpdate && onPetUpdate(pet);
    }, [pet]);

    const updateTextFields = () => {
        updatePet({ ...pet, ...{ name: name, type: type } });
    };

    const updateFriendly = (values: string[]) => {
        updatePet({ ...pet, ...{ friendly: values[0] === YesNoBoolTypes.true }});
    };

    const updateLocation = (values: string[]) => {
        updatePet({ ...pet, ...{ location: values.map(value => value as AssessmentPetLocationKeyTypes) }});
    }

    return (
        <>
            <div className='field row'>
                <label title="Name">
                    <span>Name</span>
                    <input title='Name' type='text' name={`${namePrefix}name`} maxLength={30} style={{width: '250px'}} {...bindName} />
                </label>
                <label title="Type/Breed">
                    <span>Type/Breed</span>
                    <input title='Type/Breed' type='text' name={`${namePrefix}breed`} maxLength={50} style={{width: '380px'}} {...bindType} />
                </label>
            </div>
            <div className='field row'>
                <label title="Friendly?">
                    <span>Friendly?</span>
                    <InputList type={InputTypeEnum.RadioButton} name={`${namePrefix}friendly`} values={pet.friendly ? [ pet.friendly.toString() ] : []} items={YesNoBoolTypes} onChange={updateFriendly} />
                </label>
                <label title="Normall Stays">
                    <span>Normally stays</span>
                    <InputList type={InputTypeEnum.Checkbox} name={`${namePrefix}location`} values={pet.location ?? []} items={AssessmentPetLocation} onChange={updateLocation} />
                </label>
            </div>
        </>
    );
};