import React, { useRef, useState, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as getUuid } from 'uuid';

import { States } from  '../modules/data';
import { Pet } from '../components/assessment/pet';
import { Contact } from '../components/assessment/contact';

import { useInput } from '../utils';
import { InputTypeEnum, InputList } from '../components/inputlist';
import { YesNoBoolTypes, AssessmentContainerTypes, AssessmentPackagingTypes, AssessmentBeefPrep, AssessmentChickenPrep, AssessmentSpiceRanges } from '../modules/records';

import { Person, CustomerPet, Assessment } from '../modules/types';

type WizardStep = {
    title: string,
    valid: boolean,
    menutitle: string,
};

export const AssessmentWizard: React.FC = () => {
    const [steps, updateSteps] = useState<Map<string, WizardStep>>(
        new Map([
            ["contact", { menutitle: "Contact Info", title: "What is your contact information?", valid: false }],
            ["address", { menutitle: "Cook Address", title: "At what address will the chef be cooking?", valid: false }],
            ["people", { menutitle: "Members in Party", title: "Will there be additional people?", valid: false }],
            ["health", { menutitle: "Health Info", title: "Just need to gather some health info...", valid: false }],
            ["packaging", { menutitle: "Food Packaging", title: "How should I deliver the meals?", valid: false }],
            ["beef", { menutitle: "Beef", title: "Do you like beef?", valid: false }],
            ["chicken", { menutitle: "Chicken", title: "How about chicken?", valid: false }],
            ["turkey", { menutitle: "Turkey", title: "Do you like turkey?", valid: false }],
            ["lamb", { menutitle: "Lamb", title: "Are you okay with lamb?", valid: false }],
            ["pork", { menutitle: "Pork", title: "Do you enjoy pork?", valid: false }],
            ["seafood", { menutitle: "Seafood", title: "How about seafood?", valid: false }],
            ["veggie", { menutitle: "Vegetarian", title: "Would you like any vegetarian meals?", valid: false }],
            ["othermeat", { menutitle: "Other Foods", title: "Additional foods...", valid: false }],
            ["spicy", { menutitle: "Spice Tolerance", title: "How spicy do you like your meals?", valid: false }],
            ["fhvlikes", { menutitle: "Produce Likes", title: "What are your favorite fruits, herbs, and veggies?", valid: false }],
            ["fhvdislikes", { menutitle: "Produce Dislikes", title: "What fruits, herbs, and veggies do you dislike?", valid: false }],
            ["greens", { menutitle: "Salads", title: "What are your favorite greens for salads?", valid: false }],
            ["appliances", { menutitle: "Appliances", title: "Are there any kitchen appliances the chef can't use?", valid: false }],
            ["recipes", { menutitle: "Recipes", title: "Are there any recipes you'd like the chef to prepare?", valid: false }],
            ["restaurants", { menutitle: "Restaurants", title: "What are some of your favorite restaurants?", valid: false }],
            ["addlfridge", { menutitle: "Fridge/Freezer", title: "Do you have an additional freezer or refrigerator?", valid: false }],
            ["groceries", { menutitle: "Grocery Stores", title: "Where do you shop for groceries?", valid: false }],
            ["fusebox", { menutitle: "Fuse/Breaker Box", title: "Where is your fuse/breaker box?", valid: false }],
            ["pets", { menutitle: "Pets", title: "Are there pets are in the household?", valid: false }],
            ["comments", { menutitle: "Comments", title: "Any comments/concerns?", valid: true }]
        ])
    );

    const createPerson = (): Person => ({ id: getUuid(), fname: "", lname: "",  dob: "" });
    const createPet = (): CustomerPet => ({ id: getUuid(), name: "", type: "", location: [] });

    const [ assessment, updateAssessment ] = useState<Assessment>({
        contact: createPerson(),
        address: { address1: "", city: "", state: "", zipcode: "" },
    });

    const { value:address1, bind:bindAddress1 } = useInput(assessment.address.address1, () => { onUpdateAddress(); });
    const { value:address2, bind:bindAddress2 } = useInput(assessment.address.address2 ?? "", () => { onUpdateAddress(); });
    const { value:city, bind:bindCity } = useInput(assessment.address.city, () => { onUpdateAddress(); });
    const { value:state, bind:bindState } = useInput(assessment.address.state, () => { onUpdateAddress(); });
    const { value:zipcode, bind:bindZipcode } = useInput(assessment.address.zipcode, () => { onUpdateAddress(); });

    const totalSteps = steps.size;
    const stepOrder: string[] = Array.from(steps.keys());
        
    const [stepIdx, setStepIdx] = useState(0);
    const getPctDone = () => ((stepIdx + 1) / totalSteps) * 100;
    const pctDone = useRef(getPctDone());

    const getStepTitle = (): string => {
        const step: WizardStep | undefined = steps.get(stepOrder[stepIdx]);
        if (step) return step.title;
        return '';
    }

    const moveNext = () => {
        if (stepIdx === totalSteps - 1) return;
        pctDone.current = getPctDone();
        setStepIdx(stepIdx + 1);
    };

    const movePrev = () => {
        if (stepIdx === 0) return;
        pctDone.current = getPctDone();
        setStepIdx(stepIdx - 1);
    };

    const moveTo = (e: MouseEvent<HTMLAnchorElement>,  idx: number) => {
        e.preventDefault();

        if (idx < 0 || idx > totalSteps - 1) return;

        setStepIdx(idx);
    };

    const complete = () => {
        setStepIdx(totalSteps);
    };

    const onAddPerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        updateAssessment({
            ...assessment,
            ...{ people: [...assessment.people ?? []].concat(createPerson()) }
        });
    };

    const onRemovePerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        window.confirm("Are you sure you want to remove this person?") &&
            updateAssessment({
                ...assessment,
                ...{ people: [...assessment.people ?? []].filter(person => person.id !== e.currentTarget.value) }
            });
    };

    const onUpdatePerson = (person: Person) => {
        if (assessment.people) {
            const newPeople = [...assessment.people];
            const index = newPeople.findIndex(oldPerson => oldPerson.id === person.id);

            if (index < 0) return;
            
            newPeople[index] = person;

            updateAssessment({
                ...assessment,
                ...{ people: newPeople }
            });
        }
    };

    const onAddPet = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        updateAssessment({
            ...assessment,
            ...{ pets: [...assessment.pets ?? []].concat(createPet()) }
        });
    };

    const onRemovePet = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        window.confirm("Are you sure you want to remove this pet?") &&
            updateAssessment({
                ...assessment,
                ...{ pets: [...assessment.pets ?? []].filter(pet => pet.id !== e.currentTarget.value) }
            });
    };

    const onUpdatePet = (pet: CustomerPet) => {
        if (assessment.pets) {
            const newPets = [...assessment.pets];
            const index = newPets.findIndex(oldPet => oldPet.id === pet.id);

            if (index < 0) return;

            newPets[index] = pet;

            updateAssessment({
                ...assessment,
                ...{ pets: newPets }
            });
        }
    };

    const onUpdateContact = (person: Person) => {
        updateAssessment({
            ...assessment,
            ...{ contact: person }
        });
    };

    const onUpdateAddress = () => {
        updateAssessment({
            ...assessment,
            ...{ address: { address1: address1, address2: (address2.trim() === "") ? null : address2, city: city, state: state, zipcode: zipcode } }
        });
    }

    const onUpdateAssessment = () => {

    }

    const getStepClass = (stepName: string): string => `step${stepOrder[stepIdx] === stepName ? " active" : ""}`

    return (
        <div className="assessment">
            <div className="nav fixed inset-0 h-full pt-24 bg-gray-100 z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:bg-transparent lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden">
                <div className="nav-wrapper">
                    <div className="nav-title">Sections</div>
                    <ul className="nav-items">
                        {
                            Array.from(steps.entries()).map((entry: [string, WizardStep], index) => (
                                <li key={entry[0]}><a onClick={ (e) => { moveTo(e, index); } }>{entry[1].menutitle}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="steps">
                {/*<!-- Completion Step -->*/}
                <div className={`flex-col items-center bg-white rounded-lg p-10 shadow justify-between step${stepIdx === totalSteps ? " active" : ""}`}>
                    <svg className="mb-4 h-20 w-20 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>

                    <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">Assessment Complete!</h2>

                    <div className="text-gray-600 mb-8 text-center">Your assessment has been submitted successfully!</div>
                    <div className="text-gray-600 mb-8 text-center">Once Chef Laura has reviewed it she will get back to you shortly!</div>

                    <NavLink to="/" className="button">Back to home</NavLink>
                </div>

                <div className={`${stepIdx === totalSteps ? "hidden" : ""}`}>
                    {/*<!-- Top Navigation -->*/}
                    <div className="border-b-2 py-4">
                        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">Step: {stepIdx + 1} of {totalSteps}</div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                                <div>
                                    <div className="text-lg font-bold text-gray-700 leading-tight">{ getStepTitle() }</div>
                                </div>
                            </div>

                            <div className="flex items-center md:w-64">
                                <div className="w-full bg-white rounded-full mr-2">
                                    <div className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white" style={{ width: `${getPctDone()}%` }}></div>
                                </div>
                                <div className="text-xs w-10 text-gray-600">{ `${parseInt(getPctDone().toString())}` }%</div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Step Content -->*/}
                    <div className="py-10">	
                        <form>
                            <div className={ getStepClass("contact") }>
                                <Contact person={assessment.contact} contactInfoOptional={false} onContactUpdate={ onUpdateContact } />
                            </div>



                            <div className={ getStepClass("address") }>
                                <div className="field col">
                                    <label>
                                        <span>Address1</span>
                                        <input type="text" placeholder="Address1" {...bindAddress1}></input>
                                    </label>
                                    <label>
                                        <span>Address2</span>
                                        <input type="text" placeholder="Address2" {...bindAddress2}></input>
                                    </label>
                                </div>
                                <div className="field row">
                                    <label>
                                        <span>City</span>
                                        <input type="text" placeholder="City" {...bindCity}></input>
                                    </label>
                                    <label>
                                        <span>State</span>
                                        <select className="form-select" {...bindState}>
                                        {
                                            States.map(state => (
                                                <option key={state.Abbr} value={state.Abbr}>{state.Abbr}</option>
                                            ))
                                        }
                                        </select>
                                    </label>
                                    <label>
                                        <span>Zip Code</span>
                                        <input type="text" placeholder="Zip Code" maxLength={5} {...bindZipcode}></input>
                                    </label>
                                </div>
                            </div>



                            <div className={ getStepClass("people") }>
                                <div>
                                    <button className="button" onClick={ onAddPerson }>Add Person</button>
                                </div>
                                <div className="field">
                                    {
                                        (assessment.people ?? []).map((person, index) => (
                                            <div key={person.id}>
                                                <div><button value={person.id} onClick={ onRemovePerson }>Remove Person</button></div>
                                                <Contact person={person} onContactUpdate={ onUpdatePerson } />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>



                            <div className={ getStepClass("health") }>
                                <div>
                                    <div>Are there any allergies in your family?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} values={[]} name={"haveallergies"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                    </div>
                                    <div className="field">
                                        <label>
                                            <span>Please explain</span>
                                            <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div>Are you lactose intolerant?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} values={assessment.lactoseint ? [ assessment.lactoseint.toString() ] : []} name={"islactoseint"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                    </div>
                                </div>

                                <div>
                                    <div>Are there any medical conditions in your family?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} values={[]} name={"havemedconditions"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                    </div>
                                    <div className="field">
                                        <label>
                                            <span>Please explain</span>
                                            <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div>Are you planning to follow or currently following any specific diet plan?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} values={[]} name={"havedietplan"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                    </div>
                                    <div className="field">
                                        <label>
                                            <span>Please explain</span>
                                            <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("packaging") }>
                                <div>
                                    <div>How should your meals be packaged?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} values={[]} name={"packagetype"} items={AssessmentPackagingTypes} onChange={ onUpdateAssessment } />
                                    </div>
                                </div>

                                <div>
                                    <div>What type of containers should be used to store the food?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} values={[]} name={"container"} items={AssessmentContainerTypes} onChange={ onUpdateAssessment } />
                                        <div>
                                            <i>(a $100 one-time fee will be charged if the chef needs to purchase Pyrex for you)</i>                            
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("beef") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"beef"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                                <div className="field">
                                    <div>How do you like it prepared?</div>
                                    <div>
                                        <InputList type={InputTypeEnum.Checkbox} values={[]} name={"beefprep"} items={AssessmentBeefPrep} onChange={ onUpdateAssessment } />
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("chicken") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"chicken"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                                <div className="field">
                                    <div>How do you like it prepared?</div>
                                    <div>
                                        <InputList type={InputTypeEnum.Checkbox} values={[]} name={"chickenprep"} items={AssessmentChickenPrep} onChange={ onUpdateAssessment } />
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("turkey") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"turkey"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                            </div>



                            <div className={ getStepClass("lamb") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"lamb"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                            </div>



                            <div className={ getStepClass("pork") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"pork"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                            </div>



                            <div className={ getStepClass("seafood") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"seafood"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                                <div className="field">
                                    <div>What types of fish/shellfish don't you like?</div>
                                    <textarea name={"seafooddislikes"} className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("veggie") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"likevegmeals"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                            </div>



                            <div className={ getStepClass("othermeat") }>
                                <div className="field">
                                    <div>Is there anything else that you like that I haven't covered?</div>
                                    <textarea name={"othermeat"} className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("spicy") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.Checkbox} values={[]} name={"spicelikes"} items={AssessmentSpiceRanges} onChange={ onUpdateAssessment } />
                                </div>
                            </div>



                            <div className={ getStepClass("fhvlikes") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("fhvdislikes") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("greens") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("appliances") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("recipes") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("restaurants") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("addlfridge") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} values={[]} name={"addlfridge"} items={YesNoBoolTypes} onChange={ onUpdateAssessment } />
                                </div>
                            </div>



                            <div className={ getStepClass("groceries") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("fusebox") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("pets") }>
                                <div>
                                    <button className="button" onClick={ onAddPet }>Add Pet</button>
                                </div>
                                <div className="field">
                                    {
                                        (assessment.pets ?? []).map((pet, index) => (
                                            <div key={pet.id}>
                                                <div><button value={pet.id} onClick={ onRemovePet }>Remove Pet</button></div>
                                                <Pet animal={pet} onPetUpdate={ onUpdatePet } />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>



                            <div className={ getStepClass("comments") }>
                                <div className="field">
                                    <textarea className="form-textarea" rows={10} cols={96}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/*<!-- Bottom Navigation -->*/}
                    <div className={`fixed bottom-0 left-0 right-0 py-5 bg-white shadow-md`}>
                        <div className="max-w-3xl mx-auto px-4">
                            <div className="flex justify-between">
                                <div className="w-1/2">
                                    <button
                                        x-show="step > 1"
                                        onClick={ movePrev }
                                        className={`w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border${stepIdx === 0 ? " hidden" : ""}`}
                                    >Previous</button>
                                </div>

                                <div className="w-1/2 text-right">
                                    <button
                                        x-show="step < 3"
                                        onClick={ moveNext }
                                        className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium${stepIdx >= totalSteps - 1 ? " hidden" : ""}`}
                                    >Next</button>

                                    <button
                                        onClick={ complete }
                                        className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium${stepIdx < totalSteps - 1 ? " hidden" : ""}`}
                                    >Complete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- / Bottom Navigation https://placehold.co/300x300/e2e8f0/cccccc -->*/}
                </div>
            </div>
        </div>
    );
}