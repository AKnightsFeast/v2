import React, { useRef, useState, useCallback, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as getUuid } from 'uuid';

import { Contact, Person } from '../components/assessment/contact';

import { InputTypeEnum, InputList } from '../components/inputlist';
import { YesNoBoolTypes, AssessmentContainerTypes, AssessmentPackagingTypes, AssessmentBeefPrep, AssessmentChickenPrep, AssessmentSpiceRanges } from '../modules/records';

type WizardStep = {
    title: string,
    valid: boolean
};

export const Assessment: React.FC = () => {
    const [steps, updateSteps] = useState<Map<string, WizardStep>>(
        new Map([
            ["contact", { title: "What is your contact information?", valid: false }],
            ["address", { title: "At what address will the chef be cooking?", valid: false }],
            ["people", { title: "Will there be additional people?", valid: false }],
            ["allergies", { title: "<Just looking at the style>", valid: false}],
            ["health", { title: "Just need to gather some health info...", valid: false }],
            ["packaging", { title: "How should I deliver the meals?", valid: false }],
            ["beef", { title: "Do you like beef?", valid: false }],
            ["chicken", { title: "How about chicken?", valid: false }],
            ["turkey", { title: "Do you like turkey?", valid: false }],
            ["lamb", { title: "Are you okay with lamb?", valid: false }],
            ["pork", { title: "Do you enjoy pork?", valid: false }],
            ["seafood", { title: "How about seafood?", valid: false }],
            ["veggie", { title: "Would you like any vegetarian meals?", valid: false }],
            ["othermeat", { title: "Additional foods...", valid: false }],
            ["spicy", { title: "How spicy do you like your meals?", valid: false }],
            ["fvlikes", { title: "What are your favorite fruits, herbs, and veggies?", valid: false }],
            ["fvdislikes", { title: "What fruits, herbs, and veggies do you dislike?", valid: false }],
            ["greens", { title: "What are your favorite greens for salads?", valid: false }],
            ["appliances", { title: "Are there any kitchen appliances the chef can't use?", valid: false }],
            ["recipes", { title: "Are there any recipes you'd like the chef to prepare?", valid: false }],
            ["restaurants", { title: "What are some of your favorite restaurants?", valid: false }],
            ["addlfridge", { title: "Do you have an additional freezer or refrigerator?", valid: false }],
            ["groceries", { title: "Where do you shop for groceries?", valid: false }],
            ["fusebox", { title: "Where is your fuse/breaker box?", valid: false }],
            ["pets", { title: "Are there pets are in the household?", valid: false }],
        ])
    );

    const createPerson = (): Person => ({ id: getUuid(), fname: "", lname: "",  dob: "" });

    const [contact, updateContact] = useState<Person>(createPerson());
    const [people, updatePeople] = useState<Person[]>([]);

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

    const complete = () => {
        setStepIdx(totalSteps);
    };

    const onAddPerson = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        updatePeople(newPeople => [...newPeople].concat(createPerson()));
    }, []);

    const onRemovePerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to remove this person?")) return;

        const newPeople = people.filter(person => person.id !== e.currentTarget.value);
        updatePeople([...newPeople]);
    };

    const onAddPet = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();


    }, []);

    const onRemovePet = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to remove this pet?")) return;


    }, []);

    const onUpdateContact = (person: Person) => {
        updateContact({...contact, ...person});
    };

    const onUpdatePerson = (person: Person) => {
        const index = people.findIndex(oldPerson => oldPerson.id === person.id);

        if (index < 0) return;

        const newPeople = [...people];
        
        newPeople[index] = person;

        updatePeople(newPeople);
    };

    const getStepClass = (stepName: string): string => `step${stepOrder[stepIdx] === stepName ? " active" : ""}`

    return (
        <div className="assessment">
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
                            <Contact person={contact} contactInfoOptional={false} onContactUpdate={ onUpdateContact } />
                        </div>



                        <div className={ getStepClass("address") }>
                            <div className="field col">
                                <label>
                                    <span>Address1</span>
                                    <input type="text" placeholder="Address1"></input>
                                </label>
                                <label>
                                    <span>Address2</span>
                                    <input type="text" placeholder="Address2"></input>
                                </label>
                            </div>
                            <div className="field row">
                                <label>
                                    <span>City</span>
                                    <input type="text" placeholder="City"></input>
                                </label>
                                <label>
                                    <span>State</span>
                                    <select className="form-select"></select>
                                </label>
                                <label>
                                    <span>Zip Code</span>
                                    <input type="text" placeholder="Zip Code" maxLength={5}></input>
                                </label>
                            </div>
                        </div>



                        <div className={ getStepClass("people") }>
                            <div>
                                <button className="button" onClick={ onAddPerson }>Add Person</button>
                            </div>
                            <div className="field">
                                {
                                    people.map((person, index) => (
                                        <div key={person.id}>
                                            <div><button value={person.id} onClick={ onRemovePerson }>Remove Person</button></div>
                                            <Contact person={person} onContactUpdate={ onUpdatePerson } />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>



                        <div className={ getStepClass("allergies") }>
                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Gender</label>
                                
                                <div className="flex">
                                    <label
                                        className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
                                        <div className="text-teal-600 mr-3">
                                            <input type="radio" x-model="gender" value="Male" className="form-radio focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className="select-none text-gray-700">Male</div>
                                    </label>

                                    <label
                                        className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
                                        <div className="text-teal-600 mr-3">
                                            <input type="radio" x-model="gender" value="Female" className="form-radio focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className="select-none text-gray-700">Female</div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Profession</label>
                                <input type="profession"
                                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                    placeholder="eg. Web Developer" />
                            </div>
                        </div>



                        <div className={ getStepClass("health") }>
                            <div>
                                <div>Are there any allergies in your family?</div>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"haveallergies"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                                    <InputList type={InputTypeEnum.RadioButton} name={"islactoseint"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                                </div>
                            </div>

                            <div>
                                <div>Are there any medical conditions in your family?</div>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"havemedconditions"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                                    <InputList type={InputTypeEnum.RadioButton} name={"havedietplan"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                                    <InputList type={InputTypeEnum.RadioButton} name={"packagetype"} items={AssessmentPackagingTypes} />
                                </div>
                            </div>

                            <div>
                                <div>What type of containers should be used to store the food?</div>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"container"} items={AssessmentContainerTypes} />
                                    <div>
                                        <i>(a $100 one-time fee will be charged if the chef needs to purchase Pyrex for you)</i>                            
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className={ getStepClass("beef") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"beef"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                            </div>
                            <div className="field">
                                <div>How do you like your beef prepared?</div>
                                <div>
                                    <InputList type={InputTypeEnum.Checkbox} name={"beefprep"} items={AssessmentBeefPrep} />
                                </div>
                            </div>
                        </div>



                        <div className={ getStepClass("chicken") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"chicken"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                            </div>
                            <div className="field">
                                <div>How do you like your chicken prepared?</div>
                                <div>
                                    <InputList type={InputTypeEnum.Checkbox} name={"chickenprep"} items={AssessmentChickenPrep} />
                                </div>
                            </div>
                        </div>



                        <div className={ getStepClass("turkey") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"turkey"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                            </div>
                        </div>



                        <div className={ getStepClass("lamb") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"lamb"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                            </div>
                        </div>



                        <div className={ getStepClass("pork") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"pork"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                            </div>
                        </div>



                        <div className={ getStepClass("seafood") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"seafood"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                            </div>
                            <div className="field">
                                <div>What types of fish/shellfish don't you like?</div>
                                <textarea name={"seafooddislikes"} className="form-textarea" rows={10} cols={96}></textarea>
                            </div>
                        </div>



                        <div className={ getStepClass("veggie") }>
                            <div className="field">
                                <InputList type={InputTypeEnum.RadioButton} name={"likevegmeals"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                                <InputList type={InputTypeEnum.Checkbox} name={"spicelikes"} items={AssessmentSpiceRanges} />
                            </div>
                        </div>



                        <div className={ getStepClass("fvlikes") }>
                            <div className="field">
                                <textarea className="form-textarea" rows={10} cols={96}></textarea>
                            </div>
                        </div>



                        <div className={ getStepClass("fvdislikes") }>
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
                                <InputList type={InputTypeEnum.RadioButton} name={"addlfridge"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
    );
}