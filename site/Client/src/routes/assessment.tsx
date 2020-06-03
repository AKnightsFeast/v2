import React, { useRef, createRef, useState, MouseEvent, FormEvent } from 'react';
import { string, object, date, array, boolean, mixed, ValidationError } from 'yup';
import libphonenumber from 'google-libphonenumber';
import { NavLink } from 'react-router-dom';
import { v4 as getUuid } from 'uuid';

import { States } from  '../modules/data';
import { Pet } from '../components/assessment/pet';
import { Contact } from '../components/assessment/contact';

import { useInput, useIsomorphicLayoutEffect } from '../utils';
import { InputTypeEnum, InputList } from '../components/inputlist';
import {
    YesNoBoolTypes,
    AssessmentContainerKeyTypes,
    AssessmentContainerTypes,
    AssessmentPackagingKeyTypes,
    AssessmentPackagingTypes,
    AssessmentBeefKeyTypes,
    AssessmentBeefPrep,
    AssessmentChickenKeyTypes,
    AssessmentChickenPrep,
    AssessmentSpiceKeyTypes,
    AssessmentSpiceRanges
} from '../modules/records';

import { Person, CustomerPet, Assessment } from '../modules/types';

type WizardStep = {
    title: string,
    menutitle: string,
    errors?: Map<string, string>,
};

export const AssessmentWizard: React.FC = () => {
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

    const [steps, updateSteps] = useState<Map<string, WizardStep>>(
        new Map([
            ["contact", { menutitle: "Contact Info", title: "What is your contact information?" }],
            ["address", { menutitle: "Cook Address", title: "At what address will the chef be cooking?" }],
            ["people", { menutitle: "Members in Party", title: "Will there be additional people?" }],
            ["health", { menutitle: "Health Info", title: "Just need to gather some health info..." }],
            ["packaging", { menutitle: "Food Packaging", title: "How should I deliver the meals?" }],
            ["beefPrep", { menutitle: "Beef", title: "Do you like beef?" }],
            ["chickenPrep", { menutitle: "Chicken", title: "How about chicken?" }],
            ["likesTurkey", { menutitle: "Turkey", title: "Do you like turkey?" }],
            ["likesLamb", { menutitle: "Lamb", title: "Are you okay with lamb?" }],
            ["likesPork", { menutitle: "Pork", title: "Do you enjoy pork?" }],
            ["likesSeafood", { menutitle: "Seafood", title: "How about seafood?" }],
            ["likesVegetarian", { menutitle: "Vegetarian", title: "Would you like any vegetarian meals?" }],
            ["otherFoods", { menutitle: "Other Foods", title: "Additional foods..." }],
            ["spiceLikes", { menutitle: "Spice Tolerance", title: "How spicy do you like your meals?" }],
            ["fhvLikes", { menutitle: "Produce Likes", title: "What are your favorite fruits, herbs, and veggies?" }],
            ["fhvDislikes", { menutitle: "Produce Dislikes", title: "What fruits, herbs, and veggies do you dislike?" }],
            ["saladLikes", { menutitle: "Salads", title: "What are your favorite greens for salads?" }],
            ["appliances", { menutitle: "Appliances", title: "Are there any kitchen appliances the chef can't use?" }],
            ["recipes", { menutitle: "Recipes", title: "Are there any recipes you'd like the chef to prepare?" }],
            ["restaurants", { menutitle: "Restaurants", title: "What are some of your favorite restaurants?" }],
            ["hasAddlFridge", { menutitle: "Fridge/Freezer", title: "Do you have an additional freezer or refrigerator?" }],
            ["groceryStores", { menutitle: "Grocery Stores", title: "Where do you shop for groceries?" }],
            ["fuseboxLocation", { menutitle: "Fuse/Breaker Box", title: "Where is your fuse/breaker box?" }],
            ["pets", { menutitle: "Pets", title: "Are there pets are in the household?" }],
            ["comments", { menutitle: "Comments", title: "Any comments/concerns?" }]
        ])
    );

    const createPerson = (): Person => ({ id: getUuid(), fname: null, mi: null, lname: null,  dob: null, email: null, phone: null });
    const createPet = (): CustomerPet => ({ id: getUuid(), name: null, type: null, friendly: null, location: null });

    const [ assessment, updateAssessment ] = useState<Assessment>({
        contact: createPerson(),
        address: { address1: null, address2: null, city: null, state: null, zipcode: null },
        people: null,
        allergies: null,
        lactoseInt: null,
        medical: null,
        dietPlan: null,
        packaging: null,
        container: null,
        beefPrep: null,
        chickenPrep: null,
        likesTurkey: null,
        likesLamb: null,
        likesPork: null,
        likesSeafood: null,
        seafoodDislikes: null,
        likesVegetarian: null,
        otherFoods: null,
        spiceLikes: null,
        fhvLikes: null,
        fhvDislikes: null,
        saladLikes: null,
        appliances: null,
        recipes: null,
        restaurants: null,
        hasAddlFridge: null,
        groceryStores: null,
        fuseboxLocation: null,
        pets: null,
        comments: null,
    });

    const [ hasAllergies, setHasAllergies ] = useState<boolean>();
    const [ hasMedCondition, setHasMedCondition ] = useState<boolean>();
    const [ hasDietPlan, setHasDietPlan ] = useState<boolean>();
    const [ likesBeef, setLikesBeef ] = useState<Boolean>();
    const [ likesChicken, setLikesChicken ] = useState<Boolean>();

    const { value:address1, bind:bindAddress1 } = useInput(assessment.address.address1 ?? "", () => { onUpdateAddress(); });
    const { value:address2, bind:bindAddress2 } = useInput(assessment.address.address2 ?? "", () => { onUpdateAddress(); });
    const { value:city, bind:bindCity } = useInput(assessment.address.city ?? "", () => { onUpdateAddress(); });
    const { value:state, bind:bindState } = useInput(assessment.address.state ?? "", () => { onUpdateAddress(); });
    const { value:zipcode, bind:bindZipcode } = useInput(assessment.address.zipcode ?? "", () => { onUpdateAddress(); });

    const { value:allergies, bind:bindAllergies } = useInput(assessment.allergies ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{allergies}}))});
    const { value:medical, bind:bindMedical } = useInput(assessment.medical ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{medical}}))});
    const { value:dietPlan, bind:bindDietPlan } = useInput(assessment.dietPlan ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{dietPlan}}))});
    const { value:seafoodDislikes, bind:bindSeafoodDislikes } = useInput(assessment.seafoodDislikes ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{seafoodDislikes}}))});
    const { value:otherFoods, bind:bindOtherFoods } = useInput(assessment.otherFoods ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{otherFoods}}))});
    const { value:fhvLikes, bind:bindFHVLikes } = useInput(assessment.fhvLikes ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{fhvLikes}}))});
    const { value:fhvDislikes, bind:bindFHVDislikes } = useInput(assessment.fhvDislikes ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{fhvDislikes}}))});
    const { value:saladLikes, bind:bindSaladLikes } = useInput(assessment.saladLikes ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{saladLikes}}))});
    const { value:appliances, bind:bindAppliances } = useInput(assessment.appliances ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{appliances}}))});
    const { value:recipes, bind:bindRecipes } = useInput(assessment.recipes ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{recipes}}))});
    const { value:restaurants, bind:bindRestaurants } = useInput(assessment.restaurants ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{restaurants}}))});
    const { value:groceryStores, bind:bindGroceryStores } = useInput(assessment.groceryStores ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{groceryStores}}))});
    const { value:comments, bind:bindComments } = useInput(assessment.comments ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{comments}}))});
    const { value:fuseboxLocation, bind:bindFuseboxLocation } = useInput(assessment.fuseboxLocation ?? "", () => { updateAssessment(oldAssessment => ({...oldAssessment, ...{fuseboxLocation}}))});

    const totalSteps = steps.size;
    const stepOrder: string[] = Array.from(steps.keys());
    
    const [stepIndex, setStepIndex] = useState(0);
    const getPctDone = () => ((stepIndex + 1) / totalSteps) * 100;
    const pctDone = useRef(getPctDone());

    const formRef = createRef<HTMLFormElement>();

    useIsomorphicLayoutEffect(() => {
        pctDone.current = getPctDone();

        const currentStep = steps.get(stepOrder[stepIndex]);
    
        if (currentStep && currentStep.errors) {
            Array.from(currentStep.errors.entries()).map(entry => {
                const inputs = document.getElementsByName(entry[0].toLowerCase());
                if (inputs) {
                    inputs.forEach(element => {
                        element.className = "error";
                        element.title = entry[1];
                    });
                }
            });
        }
    }, [stepIndex]);

    const getPersonSchema = (isRequired: boolean) => {
        const phoneValidator = mixed().test("phone", "Please enter a valid phone #.",
            (value: string) => {
                try {
                    const phone = phoneUtil.parse(value, 'US');
                    return phoneUtil.isValidNumber(phone);
                } catch {
                    return false;
                }
            });
    
        const emailValidator = string().email();
    
        return object().shape({
            fname: string().required("Please enter a first name.").nullable(),
            mi: string().matches(/^[a-zA-z]{1}$/, "Please enter a valid middle initial.").notRequired().nullable(),
            lname: string().required("Please enter a last name.").nullable(),
            dob: date().nullable().notRequired(),
            email: isRequired ? emailValidator.nullable().required("Please enter an email address.") : emailValidator.notRequired(),
            phone: isRequired ? phoneValidator.nullable().required() : phoneValidator.notRequired(),
        });
    };
    
    const PetSchema = object().shape({
        name: string().required().nullable(),
        type: string().required().nullable(),
        friendly: boolean().required().nullable(),
        location: array().of(string()).min(1).nullable(),
    });
    
    const assessmentValidator = object().shape({
        contact: getPersonSchema(true).required(),
        address: object().shape({
            address1: string().required().nullable(),
            address2: string().notRequired().nullable(),
            city: string().required().nullable(),
            state: string().length(2).required().nullable(),
            zipcode: string().matches(/^[0-9]{5}$/, "Please enter a valid zipcode.").required().nullable(),
        }).required(),
        people: array().of(getPersonSchema(false)).notRequired().nullable(),
        allergies: mixed().test("allergies", "Please enter any allergies.", function(value: string) {
            return hasAllergies !== undefined && (!hasAllergies || value !== "");
        }),
        lactoseInt: boolean().required("Please indicate if anyone is lactose intolerant.").nullable(),
        medical: mixed().test("medical", "Please enter any current medical conditions.", function(value: string) {
            return hasMedCondition !== undefined && (!hasMedCondition || value !== "");
        }),
        dietPlan: mixed().test("dietPlan", "Please enter any current diet plans.", function(value: string) {
            return hasDietPlan !== undefined && (!hasDietPlan || value !== "");
        }),
        packaging: string().required("Please select how your food should be packaged.").nullable(),
        container: string().required("Please select what type of containers to use.").nullable(),
        beefPrep: mixed().test("beefPrep", "Please select at least one type of beef preperation.", function(value: string[]) {
            return likesBeef !== undefined && (!likesBeef || (value !== null && value.length > 0)); 
        }),
        chickenPrep: mixed().test("chickenPrep", "Please select at least one type of chicken preperation.", function(value: string[]) {
            return likesChicken !== undefined && (!likesChicken || (value !== null && value.length > 0)); 
        }),
        likesTurkey: boolean().required("Please indicate if you like turkey.").nullable(),
        likesLamb: boolean().required("Please indicate if you like lamb.").nullable(),
        likesPork: boolean().required("Please indicate if you like pork.").nullable(),
        likesSeafood: boolean().required("Please indicate if you like seafood.").nullable(),
        seafoodDislikes: string().notRequired().nullable(),    
        likesVegetarian: boolean().required("Please indicate if you like vegetarian food.").nullable(),
        otherFoods: string().notRequired().nullable(),
        spiceLikes: mixed().test("spiceLikes", "Please select at least one spice level you like.", function(value: string[]) {
            return value !== null && value.length > 0;
        }),
        fhvLikes: string().notRequired().nullable(),
        fhvDislikes: string().notRequired().nullable(),
        saladLikes: string().notRequired().nullable(),
        appliances: string().required().nullable(),
        recipes: string().notRequired().nullable(),
        restaurants: string().notRequired().nullable(),
        hasAddlFridge: boolean().required("Please indicate if there is an additional fridge/freezer.").nullable(),
        groceryStores: string().notRequired().nullable(),
        fuseboxLocation: string().required("Please enter the location of the fuse/breaker box.").nullable(),
        pets: array().of(PetSchema).notRequired().nullable(),
        comments: string().notRequired().nullable(),
    }).noUnknown();

    const getStepTitle = (): string => {
        const step: WizardStep | undefined = steps.get(stepOrder[stepIndex]);
        if (step) return step.title;
        return '';
    };

    const moveToStep = (e: FormEvent<HTMLButtonElement | HTMLAnchorElement>, invalidIndexCondition: boolean, moveToIndex: number) => {
        e.preventDefault();

        if (invalidIndexCondition) return;

        validateCurrentStep();

        setStepIndex(moveToIndex);
    };

    const onAddPerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        updateAssessment(oldAssessment => ({
            ...oldAssessment,
            ...{ people: [...oldAssessment.people ?? []].concat(createPerson()) }
        }));
    };

    const onRemovePerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        window.confirm("Are you sure you want to remove this person?") &&
            updateAssessment(oldAssessment => ({
                ...oldAssessment,
                ...{ people: [...oldAssessment.people ?? []].filter(person => person.id !== e.currentTarget.value) }
            }));
    };

    const onUpdatePerson = (person: Person) => {
        if (assessment.people) {
            const people = [...assessment.people];
            const index = people.findIndex(oldPerson => oldPerson.id === person.id);

            if (index < 0) return;
            
            people[index] = person;

            updateAssessment(oldAssessment => ({
                ...oldAssessment,
                ...{ people }
            }));
        }
    };

    const onAddPet = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        updateAssessment(oldAssessment => ({
            ...oldAssessment,
            ...{ pets: [...oldAssessment.pets ?? []].concat(createPet()) }
        }));
    };

    const onRemovePet = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        window.confirm("Are you sure you want to remove this pet?") &&
            updateAssessment(oldAssessment => ({
                ...oldAssessment,
                ...{ pets: [...oldAssessment.pets ?? []].filter(pet => pet.id !== e.currentTarget.value) }
            }));
    };

    const onUpdatePet = (pet: CustomerPet) => {
        if (assessment.pets) {
            const newPets = [...assessment.pets];
            const index = newPets.findIndex(oldPet => oldPet.id === pet.id);

            if (index < 0) return;

            newPets[index] = pet;

            updateAssessment(oldAssessment => ({
                ...oldAssessment,
                ...{ pets: newPets }
            }));
        }
    };

    const onUpdateContact = (contact: Person) => {
        updateAssessment(oldAssessment => ({
            ...oldAssessment,
            ...{ contact }
        }));
    };

    const onUpdateAddress = () => {
        updateAssessment(oldAssessment => ({
            ...oldAssessment,
            ...{ address: { address1: address1, address2: (address2.trim() === "") ? null : address2, city: city, state: state, zipcode: zipcode } }
        }));
    }

    const complete = () => {
        setStepIndex(totalSteps);

    //    formRef.current && formRef.current.submit();
    };

    const getStepClass = (stepName: string): string => `step${stepOrder[stepIndex] === stepName ? " active" : ""}`;

    const validateCurrentStep = () => {
        const sectionName = stepOrder[stepIndex];
        const currentStep = steps.get(sectionName);

        if (!currentStep) return;

        // clear the error states from the step's inputs
        if (currentStep.errors) {
            Array.from(currentStep.errors.entries()).map(entry => {
                const inputs = document.getElementsByName(entry[0].toLowerCase());
                if (inputs) {
                    inputs.forEach(element => {
                        element.removeAttribute("class");
                        element.removeAttribute("title");
                    });
                }
            });
        }

        let errors: Map<string, string> | undefined;

        switch (sectionName) {
            case "health":
                errors = isStepValid(["allergies", "lactoseInt", "medical", "dietPlan"]);
                break;
            case "packaging":
                errors = isStepValid(["packaging", "container"]);
                break;
            default:
                errors = isStepValid([sectionName]);
                break;
        }

        updateSteps(oldSteps => oldSteps.set(sectionName, {...currentStep, ...{errors}}));
    };

    const isStepValid = (paths: string[]): (Map<string, string>) | undefined => {
        let errors: (Map<string, string>) | undefined;

        paths.map((path) => {
            try {
                assessmentValidator.validateSyncAt(path, assessment, {abortEarly: false});
            } catch (e) {
                const vErr = e as ValidationError;

                if (vErr.inner) {
                    vErr.inner.map(ve => {
                        if (errors === undefined) errors = new Map<string, string>();
                        errors.set(ve.path, ve.message);
                    });
                } else {
                    if (errors === undefined) errors = new Map<string, string>();
                    errors.set(vErr.path, vErr.message);                    
                }
            }
        });

        return errors;
    };

    return (
        <div className="assessment">
            <div className="nav lg:-mb-0 lg:static lg:h-auto lg:bg-transparent lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
                <div className="nav-wrapper">
                    <div className="nav-title">Sections</div>
                    <ul className="nav-items">
                    {
                        Array.from(steps.entries()).map((entry: [string, WizardStep], index) => {
                            let className = stepOrder[stepIndex] === entry[0] ? "active" : "";
                            className += (entry[1].errors ? " invalid" : "");

                            return (
                                <li key={entry[0]} className={className.trim()}>
                                    <a onClick={ (e) => { moveToStep(e, index < 0 || index > totalSteps - 1, index); } }>{entry[1].menutitle}</a>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>



            <div className="steps w-3/4">
                {/*<!-- Completion Step -->*/}
                <div className={`flex-col items-center bg-white rounded-lg p-10 shadow justify-between step${stepIndex === totalSteps ? " active" : ""}`}>
                    <svg className="mb-4 h-20 w-20 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>

                    <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">Assessment Complete!</h2>

                    <div className="text-gray-600 mb-8 text-center">Your assessment has been submitted successfully!</div>
                    <div className="text-gray-600 mb-8 text-center">Once Chef Laura has reviewed it she will get back to you shortly!</div>

                    <NavLink to="/" className="button">Back to home</NavLink>
                </div>

                <div className={`${stepIndex === totalSteps ? "hidden" : ""}`}>
                    {/*<!-- Top Navigation -->*/}
                    <div className="border-b-2 py-4">
                        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">Step: {stepIndex + 1} of {totalSteps}</div>
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
                        <form ref={formRef}>
                            <div className={getStepClass("contact")}>
                                <Contact person={assessment.contact} onContactUpdate={onUpdateContact} />
                            </div>



                            <div className={ getStepClass("address") }>
                                <div className="field col">
                                    <label>
                                        <span>Address1</span>
                                        <input type="text" name={"address.address1"} placeholder="Address1" {...bindAddress1}></input>
                                    </label>
                                    <label>
                                        <span>Address2</span>
                                        <input type="text" name={"address.address2"} placeholder="Address2" {...bindAddress2}></input>
                                    </label>
                                </div>
                                <div className="field row">
                                    <label>
                                        <span>City</span>
                                        <input type="text" name={"address.city"} placeholder="City" {...bindCity}></input>
                                    </label>
                                    <label>
                                        <span>State</span>
                                        <select name={"address.state"} {...bindState}>
                                            <option></option>
                                        {
                                            States.map(state => (<option key={state.Abbr} value={state.Abbr}>{state.Abbr}</option>))
                                        }
                                        </select>
                                    </label>
                                    <label>
                                        <span>Zip Code</span>
                                        <input type="text" name={"address.zipcode"} placeholder="Zip Code" maxLength={5} {...bindZipcode}></input>
                                    </label>
                                </div>
                            </div>



                            <div className={ getStepClass("people") }>
                                <div>
                                    <button className="button" onClick={onAddPerson}>Add Person</button>
                                </div>
                                <div>
                                {
                                    (assessment.people ?? []).map((person, index) => (
                                        <div key={person.id}>
                                            <div><button value={person.id} onClick={onRemovePerson}>Remove Person</button></div>
                                            <Contact index={index} person={person} onContactUpdate={onUpdatePerson} />
                                        </div>
                                    ))
                                }
                                </div>
                            </div>



                            <div className={ getStepClass("health") }>
                                <div>
                                    <div>Are there any allergies in your family?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"haveallergies"} items={YesNoBoolTypes} onChange={(values: string[]) => { setHasAllergies(JSON.parse(values[0])); }} />
                                    </div>
                                    <div className={`field conditional${hasAllergies ? " active" : ""}`}>
                                        <label>
                                            <span>Please explain</span>
                                            <textarea name="allergies" rows={10} cols={96} {...bindAllergies}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div>Are you lactose intolerant?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"lactoseint"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ lactoseInt: JSON.parse(values[0])}})); }} />
                                    </div>
                                </div>

                                <div>
                                    <div>Are there any medical conditions in your family?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"havemedconditions"} items={YesNoBoolTypes} onChange={(values: string[]) => { setHasMedCondition(JSON.parse(values[0])) }} />
                                    </div>
                                    <div className={`field conditional${hasMedCondition ? " active" : ""}`}>
                                        <label>
                                            <span>Please explain</span>
                                            <textarea name="medical" rows={10} cols={96} {...bindMedical}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div>Are you planning to follow or currently following any specific diet plan?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"havedietplan"} items={YesNoBoolTypes} onChange={(values: string[]) => { setHasDietPlan(JSON.parse(values[0])) }} />
                                    </div>
                                    <div className={`field conditional${hasDietPlan ? " active" : ""}`}>
                                        <label>
                                            <span>Please explain</span>
                                            <textarea name="dietplan" rows={10} cols={96} {...bindDietPlan}></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("packaging") }>
                                <div>
                                    <div>How should your meals be packaged?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton}
                                                    name={"packaging"}
                                                    items={AssessmentPackagingTypes}
                                                    values={assessment.packaging ? [assessment.packaging] : []}
                                                    onChange={(values: string[]) => {
                                                       updateAssessment(oldAssessment => ({
                                                           ...oldAssessment,
                                                           ...{ packaging: values[0] as AssessmentPackagingKeyTypes }})
                                                       )}} />
                                    </div>
                                </div>

                                <div>
                                    <div>What type of containers should be used to store the food?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton}
                                            name={"container"}
                                            items={AssessmentContainerTypes}
                                            values={assessment.container ? [assessment.container] : []}
                                            onChange={(values: string[]) => {
                                                updateAssessment(oldAssessment => ({
                                                    ...oldAssessment,
                                                    ...{ container: values[0] as AssessmentContainerKeyTypes }})
                                                )}} />
                                        <div>
                                            <i>(a $100 one-time fee will be charged if the chef needs to purchase Pyrex for you)</i>                            
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("beefPrep") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"beef"} items={YesNoBoolTypes} onChange={(values: string[]) => { setLikesBeef(JSON.parse(values[0])) }} />
                                </div>
                                <div className={`field conditional${likesBeef ? " active" : ""}`}>
                                    <div>How do you like it prepared?</div>
                                    <div>
                                        <InputList type={InputTypeEnum.Checkbox}
                                            name={"beefprep"}
                                            items={AssessmentBeefPrep}
                                            onChange={(values: string[]) => {
                                                updateAssessment(oldAssessment => ({...oldAssessment, ...{ beefPrep: values.map(value => value as AssessmentBeefKeyTypes) }})
                                            )}} />
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("chickenPrep") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"chicken"} items={YesNoBoolTypes} onChange={(values: string[]) => { setLikesChicken(JSON.parse(values[0])) }} />
                                </div>
                                <div className={`field conditional${likesChicken ? " active" : ""}`}>
                                    <div>How do you like it prepared?</div>
                                    <div>
                                        <InputList type={InputTypeEnum.Checkbox}
                                            name={"chickenprep"}
                                            items={AssessmentChickenPrep}
                                            onChange={(values: string[]) => {
                                                updateAssessment(oldAssessment => ({...oldAssessment, ...{ chickenPrep: values.map(value => value as AssessmentChickenKeyTypes) }}));
                                            }} />
                                    </div>
                                </div>
                            </div>



                            <div className={ getStepClass("likesTurkey") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesturkey"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ likesTurkey: JSON.parse(values[0])}})); }} />
                                </div>
                            </div>



                            <div className={ getStepClass("likesLamb") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likeslamb"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ likesLamb: JSON.parse(values[0])}})); }} />
                                </div>
                            </div>



                            <div className={ getStepClass("likesPork") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likespork"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ likesPork: JSON.parse(values[0])}})); }} />
                                </div>
                            </div>



                            <div className={ getStepClass("likesSeafood") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesseafood"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ likesSeafood: JSON.parse(values[0])}})); }} />
                                </div>
                                <div className={`field conditional${assessment.likesSeafood ? " active" : ""}`}>
                                    <div>What types of fish/shellfish don't you like?</div>
                                    <textarea name={"seafooddislikes"} rows={10} cols={96} {...bindSeafoodDislikes}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("likesVegetarian") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesvegetarian"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ likesVegetarian: JSON.parse(values[0])}})); }} />
                                </div>
                            </div>



                            <div className={ getStepClass("otherFoods") }>
                                <div className="field">
                                    <div>Is there anything else that you like that I haven't covered?</div>
                                    <textarea name={"otherfoods"} rows={10} cols={96} {...bindOtherFoods}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("spiceLikes") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.Checkbox}
                                        name={"spicelikes"}
                                        items={AssessmentSpiceRanges}
                                        onChange={(values: string[]) => {
                                            updateAssessment(oldAssessment => ({...oldAssessment, ...{ spiceLikes: values.map(value => value as AssessmentSpiceKeyTypes) }}));
                                        }} />
                                </div>
                            </div>



                            <div className={ getStepClass("fhvLikes") }>
                                <div className="field">
                                    <textarea name="fhvlikes" rows={10} cols={96} {...bindFHVLikes}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("fhvDislikes") }>
                                <div className="field">
                                    <textarea name="fhvdislikes" rows={10} cols={96} {...bindFHVDislikes}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("saladLikes") }>
                                <div className="field">
                                    <textarea name="saladlikes" rows={10} cols={96} {...bindSaladLikes}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("appliances") }>
                                <div className="field">
                                    <textarea name="appliances" rows={10} cols={96} {...bindAppliances}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("recipes") }>
                                <div className="field">
                                    <textarea name="recipes" rows={10} cols={96} {...bindRecipes}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("restaurants") }>
                                <div className="field">
                                    <textarea name="restaurants" rows={10} cols={96} {...bindRestaurants}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("hasAddlFridge") }>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"hasaddlfridge"} items={YesNoBoolTypes} onChange={(values: string[]) => { updateAssessment(oldAssessment => ({...oldAssessment, ...{ hasAddlFridge: JSON.parse(values[0])}})); }} />
                                </div>
                            </div>



                            <div className={ getStepClass("groceryStores") }>
                                <div className="field">
                                    <textarea name="groceryStores" rows={10} cols={96} {...bindGroceryStores}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("fuseboxLocation") }>
                                <div className="field">
                                    <textarea name="fuseboxlocation" rows={10} cols={96} {...bindFuseboxLocation}></textarea>
                                </div>
                            </div>



                            <div className={ getStepClass("pets") }>
                                <div>
                                    <button className="button" onClick={ onAddPet }>Add Pet</button>
                                </div>
                                <div>
                                {
                                    (assessment.pets ?? []).map((pet, index) => (
                                        <div key={pet.id}>
                                            <div><button value={pet.id} onClick={onRemovePet}>Remove Pet</button></div>
                                            <Pet index={index} animal={pet} onPetUpdate={onUpdatePet} />
                                        </div>
                                    ))
                                }
                                </div>
                            </div>



                            <div className={ getStepClass("comments") }>
                                <div className="field">
                                    <textarea name="comments" rows={10} cols={96} {...bindComments}></textarea>
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
                                        onClick={(e) => moveToStep(e, stepIndex === 0, stepIndex - 1)}
                                        className={`w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border${stepIndex === 0 ? " hidden" : ""}`}
                                    >Previous</button>
                                </div>

                                <div className="w-1/2 text-right">
                                    <button
                                        onClick={(e) => moveToStep(e, stepIndex === totalSteps - 1 || stepIndex < 0, stepIndex + 1)}
                                        className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium${stepIndex >= totalSteps - 1 ? " hidden" : ""}`}
                                    >Next</button>

                                    <button
                                        onClick={complete}
                                        className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium${stepIndex < totalSteps - 1 ? " hidden" : ""}`}
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