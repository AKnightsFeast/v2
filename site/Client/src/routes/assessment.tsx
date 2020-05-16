import React, { useRef, useState, useCallback, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as getUuid } from 'uuid';

import { Contact, Person } from '../components/assessment/contact';

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
            ["allergies", { title: "Are there any allergies in your party?", valid: false }],
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

    const addPerson = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        updatePeople(newPeople => [...newPeople].concat(createPerson()));
    }, []);

    const onRemovePerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (!window.confirm("Are you sure you want to delete this person?")) return;

        const newPeople = people.filter(person => person.id !== e.currentTarget.value);
        updatePeople([...newPeople]);
    };

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
                                <button className="button" onClick={ addPerson }>Add Person</button>
                            </div>
                            <div>
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



                        <div className={ getStepClass("lactose") }>

                        </div>



                        <div className={ getStepClass("medical") }>

                        </div>



                        <div className={ getStepClass("diet") }>

                        </div>



                        <div className={ getStepClass("packaging") }>

                        </div>



                        <div className={ getStepClass("containers") }>

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