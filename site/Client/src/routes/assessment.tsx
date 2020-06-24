import React, { useRef, createRef, useState, MouseEvent, FormEvent } from 'react';
import { string, object, date, array, boolean, mixed, ValidationError } from 'yup';
import libphonenumber from 'google-libphonenumber';
import { NavLink } from 'react-router-dom';
import { v4 as getUuid } from 'uuid';
import InputMask from 'react-input-mask';

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
    isValid?: boolean,
    menutitle: string,
    errors?: Map<string, string>,
};

type StepAttribute = {
    name: string,
    className: string
}

export const AssessmentWizard: React.FC = () => {
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

    const steps = useRef<Map<string, WizardStep>>(
        new Map([
            ["contact", { menutitle: "* Contact Info", title: "What is your contact information?" }],
            ["address", { menutitle: "* Cook Address", title: "At what address will the chef be cooking?" }],
            ["people", { menutitle: "Members in Party", title: "Will there be additional people?", isValid: true }],
            ["health", { menutitle: "* Health Info", title: "Just need to gather some health info..." }],
            ["packaging", { menutitle: "* Food Packaging", title: "How should I deliver the meals?" }],
            ["beefPrep", { menutitle: "* Beef", title: "Does your family like beef?" }],
            ["chickenPrep", { menutitle: "* Chicken", title: "How about chicken?" }],
            ["likesTurkey", { menutitle: "* Turkey", title: "Does your family like turkey?" }],
            ["likesLamb", { menutitle: "* Lamb", title: "Would your family be okay with lamb?" }],
            ["likesPork", { menutitle: "* Pork", title: "How about pork?" }],
            ["likesSeafood", { menutitle: "* Seafood", title: "Is seafood something that would be desired?" }],
            ["likesVegetarian", { menutitle: "* Vegetarian", title: "Would you like any vegetarian meals?" }],
            ["otherFoods", { menutitle: "Other Foods", title: "Additional foods...", isValid: true }],
            ["spiceLikes", { menutitle: "* Spice Tolerance", title: "How spicy do you like your meals?" }],
            ["fhvLikes", { menutitle: "Produce Likes", title: "What are your favorite fruits, herbs, and veggies?", isValid: true }],
            ["fhvDislikes", { menutitle: "Produce Dislikes", title: "What fruits, herbs, and veggies do you dislike?", isValid: true }],
            ["saladLikes", { menutitle: "Salads", title: "What are your favorite greens for salads?", isValid: true }],
            ["appliances", { menutitle: "* Appliances", title: "Are there any kitchen appliances the chef can't use?" }],
            ["recipes", { menutitle: "Recipes", title: "Are there any recipes you'd like the chef to prepare?", isValid: true }],
            ["restaurants", { menutitle: "Restaurants", title: "What are some of your favorite restaurants?", isValid: true }],
            ["hasAddlFridge", { menutitle: "* Fridge/Freezer", title: "Do you have an additional freezer or refrigerator?" }],
            ["groceryStores", { menutitle: "Grocery Stores", title: "Where do you shop for groceries?", isValid: true }],
            ["fuseboxLocation", { menutitle: "* Fuse/Breaker Box", title: "Where is the fuse/breaker box located?" }],
            ["pets", { menutitle: "Pets", title: "Are there pets are in the household?", isValid: true }],
            ["comments", { menutitle: "Comments", title: "Any comments/concerns?", isValid: true }]
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

    const { value:address1, bind:bindAddress1 } = useInput(assessment.address.address1 ?? "", () => { onUpdateAddress(); });
    const { value:address2, bind:bindAddress2 } = useInput(assessment.address.address2 ?? "", () => { onUpdateAddress(); });
    const { value:city, bind:bindCity } = useInput(assessment.address.city ?? "", () => { onUpdateAddress(); });
    const { value:state, bind:bindState } = useInput(assessment.address.state ?? "", () => { onUpdateAddress(); });
    const { value:zipcode, bind:bindZipcode } = useInput(assessment.address.zipcode ?? "", () => { onUpdateAddress(); });

    const { value:allergies, bind:bindAllergies } = useInput(assessment.allergies ?? "", () => {onUpdateAssessment({allergies})});
    const { value:medical, bind:bindMedical } = useInput(assessment.medical ?? "", () => {onUpdateAssessment({medical})});
    const { value:dietPlan, bind:bindDietPlan } = useInput(assessment.dietPlan ?? "", () => {onUpdateAssessment({dietPlan})});
    const { value:seafoodDislikes, bind:bindSeafoodDislikes } = useInput(assessment.seafoodDislikes ?? "", () => {onUpdateAssessment({seafoodDislikes})});
    const { value:otherFoods, bind:bindOtherFoods } = useInput(assessment.otherFoods ?? "", () => {onUpdateAssessment({otherFoods})});
    const { value:fhvLikes, bind:bindFHVLikes } = useInput(assessment.fhvLikes ?? "", () => {onUpdateAssessment({fhvLikes})});
    const { value:fhvDislikes, bind:bindFHVDislikes } = useInput(assessment.fhvDislikes ?? "", () => {onUpdateAssessment({fhvDislikes})});
    const { value:saladLikes, bind:bindSaladLikes } = useInput(assessment.saladLikes ?? "", () => {onUpdateAssessment({saladLikes})});
    const { value:appliances, bind:bindAppliances } = useInput(assessment.appliances ?? "", () => {onUpdateAssessment({appliances})});
    const { value:recipes, bind:bindRecipes } = useInput(assessment.recipes ?? "", () => {onUpdateAssessment({recipes})});
    const { value:restaurants, bind:bindRestaurants } = useInput(assessment.restaurants ?? "", () => {onUpdateAssessment({restaurants})});
    const { value:groceryStores, bind:bindGroceryStores } = useInput(assessment.groceryStores ?? "", () => {onUpdateAssessment({groceryStores})});
    const { value:comments, bind:bindComments } = useInput(assessment.comments ?? "", () => {onUpdateAssessment({comments})});
    const { value:fuseboxLocation, bind:bindFuseboxLocation } = useInput(assessment.fuseboxLocation ?? "", () => {onUpdateAssessment({fuseboxLocation})});

    const totalSteps = steps.current.size;
    const stepOrder: string[] = Array.from(steps.current.keys());
    
    const [refreshHash, setRefreshHash] = useState<string>(getUuid());

    const pctDone = useRef(0);
    const stepIndex = useRef(0);

    const hasAllergies = useRef<boolean>();
    const hasMedConditions = useRef<boolean>();
    const hasDietPlan = useRef<boolean>();
    const likesBeef = useRef<boolean>();
    const likesChicken = useRef<boolean>();

    const formRef = createRef<HTMLFormElement>();

    const getPersonSchema = (isRequired: boolean) => {
        const phoneValidator = mixed().test("phone", "Please enter a valid phone #.",
            (value: string) => {
                try {
                    if (value === null && !isRequired) return true;

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
            dob: date().notRequired().nullable(),
            email: isRequired ? emailValidator.required("Please enter an email address.").nullable() : emailValidator.notRequired().nullable(),
            phone: isRequired ? phoneValidator.required("Please enter a valid phone number.").nullable() : phoneValidator.notRequired().nullable(),
        });
    };

    const PetSchema = object().shape({
        name: string().required().nullable(),
        type: string().required().nullable(),
        friendly: boolean().required().nullable(),
        location: mixed().test("location", "Please indicate where the pet normally stays.", function(value: string[]) {
            return value !== null && value.length > 0;
        }),
    });

    const AssessmentSchema = object().shape({
        contact: getPersonSchema(true).required(),
        address: object().shape({
            address1: string().required().nullable(),
            address2: string().notRequired().nullable(),
            city: string().required().nullable(),
            state: string().length(2).required().nullable(),
            zipcode: string().matches(/^[0-9]{5}$/, "Please enter a valid zipcode.").required().nullable(),
        }).required(),
        people: array().of(getPersonSchema(false)).notRequired().nullable(),
        allergies: mixed().test("allergies", "Please enter any food allergies.", function(value: string) {
            if (hasAllergies.current === undefined) return this.createError({ path: "hasallergies", message: "Please indicate if you currently have any food allergies."});
            return hasAllergies.current === false || (value || "") !== "";
        }),
        lactoseInt: boolean().required("Please indicate if anyone is lactose intolerant.").nullable(),
        medical: mixed().test("medical", "Please enter any current medical conditions.", function(value: string) {
            if (hasMedConditions.current === undefined) return this.createError({ path: "hasmedconditions", message: "Please indicate if you currently have any medical conditions."});
            return hasMedConditions.current === false || (value || "") !== "";
        }),
        dietPlan: mixed().test("dietPlan", "Please enter any current diet plans.", function(value: string) {
            if (hasDietPlan.current === undefined) return this.createError({ path: "hasdietplan", message: "Please indicate if you are currently on a diet plan."});
            return hasDietPlan.current === false || (value || "") !== "";
        }),
        packaging: string().required("Please select how your food should be packaged.").nullable(),
        container: string().required("Please select what type of containers to use.").nullable(),
        beefPrep: mixed().test("beefPrep", "Please select at least one type of beef preperation.", function(value: string[]) {
            if (likesBeef.current === undefined) return this.createError({ path: "likesbeef", message: "Please indicate if you like beef."});
            return likesBeef.current === false || (value !== null && value.length > 0); 
        }),
        chickenPrep: mixed().test("chickenPrep", "Please select at least one type of chicken preperation.", function(value: string[]) {
            if (likesChicken.current === undefined) return this.createError({ path: "likeschicken", message: "Please indicate if you like chicken."});
            return likesChicken.current === false || (value !== null && value.length > 0); 
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

    const refresh = () => setRefreshHash(getUuid());

    const getStepTitle = (): string => {
        const step: WizardStep | undefined = steps.current.get(stepOrder[stepIndex.current]);
        if (step) return step.title;
        return '';
    };

    const moveToStep = (e: FormEvent<HTMLButtonElement | HTMLAnchorElement>, invalidIndexCondition: boolean, newIndex: number) => {
        e.preventDefault();

        if (invalidIndexCondition) return;

        stepIndex.current = newIndex;
    
        refresh();
    };

    const onAddPerson = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        onUpdateAssessment({ people: [...assessment.people ?? []].concat(createPerson()) });
    };

    const onRemovePerson = (personId: string) => {
        window.confirm("Are you sure you want to remove this person?") &&
            onUpdateAssessment({ people: [...assessment.people ?? []].filter(person => person.id !== personId) });
    };

    const onUpdatePerson = (person: Person) => {
        if (assessment.people) {
            const people = [...assessment.people];
            const index = people.findIndex(oldPerson => oldPerson.id === person.id);

            if (index < 0) return;
            
            people[index] = person;

            onUpdateAssessment({ people });
        }
    };

    const onAddPet = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        onUpdateAssessment({ pets: [...assessment.pets ?? []].concat(createPet()) });
    };

    const onRemovePet = (petId: string) => {
        window.confirm("Are you sure you want to remove this pet?") &&
            onUpdateAssessment({ pets: [...assessment.pets ?? []].filter(pet => pet.id !== petId) });
    };

    const onUpdatePet = (pet: CustomerPet) => {
        if (assessment.pets) {
            const newPets = [...assessment.pets];
            const index = newPets.findIndex(oldPet => oldPet.id === pet.id);

            if (index < 0) return;

            newPets[index] = pet;

            onUpdateAssessment({ pets: newPets });
        }
    };

    const onUpdateContact = (contact: Person) => {
        onUpdateAssessment({ contact });
    };

    const onUpdateAddress = () => {
        onUpdateAssessment({ address: { address1: address1, address2: (address2.trim() === "") ? null : address2, city: city, state: state, zipcode: zipcode } });
    };

    const onUpdateAssessment = (attrObj: any) => {
        updateAssessment(oldAssessment => ({...oldAssessment, ...attrObj}));

        refresh();
    };

    const complete = () => {
        if (isAssessmentValid()) {
            stepIndex.current = totalSteps;
        } else {
            
        }
        
        refresh();
    //    formRef.current && formRef.current.submit();
    };

    const getStepAttributes = (stepName: string): StepAttribute => ({ name: stepName + "Step", className: `step${stepOrder[stepIndex.current] === stepName ? " active" : ""}` });

    const validateStep = () => {
        const sectionName = stepOrder[stepIndex.current];
        const currentStep = steps.current.get(sectionName);

        if (!currentStep) return;

        let errors: Map<string, string> | undefined;

        switch (sectionName) {
            case "health":
                errors = isStepValid(assessment, ["allergies", "lactoseInt", "medical", "dietPlan"]);
                break;
            case "packaging":
                errors = isStepValid(assessment, ["packaging", "container"]);
                break;
            default:
                errors = isStepValid(assessment, [sectionName]);
                break;
        }

        steps.current.set(sectionName, {...currentStep, ...{errors}, isValid: errors === undefined});
    };

    const isStepValid = (newAssessment: Assessment, paths: string[]): (Map<string, string>) | undefined => {
        let errors: (Map<string, string>) | undefined;

        paths.map((path) => {
            try {
                AssessmentSchema.validateSyncAt(path, newAssessment, {abortEarly: false});
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

    const isAssessmentValid = (): boolean => {
        try {
            AssessmentSchema.validateSync(assessment, {abortEarly: false});
            return true;
        } catch (e) {
            const vErr = e as ValidationError;

            if (vErr.inner) {
                let step: WizardStep | undefined;

                vErr.inner.map(ve => {
                    let path = "";
        
                    switch (true) {
                        case ve.path.startsWith("allergies"):
                        case ve.path.startsWith("lactoseInt"):
                        case ve.path.startsWith("medical"):
                        case ve.path.startsWith("dietPlan"):
                            path = "health";
                            break;
                        case ve.path.startsWith("packaging"):
                        case ve.path.startsWith("container"):
                            path = "packaging";
                            break;
                        case ve.path.startsWith("contact."):
                            path = "contact";
                            break;
                        case ve.path.startsWith("address."):
                            path = "address";
                            break;
                        case ve.path.startsWith("likesbeef"):
                            path = "beefPrep";
                            break;
                        case ve.path.startsWith("likeschicken"):
                            path = "chickenPrep";
                            break;
                        case ve.path.startsWith("people"):
                            path = "people";
                            break;
                        case ve.path.startsWith("pets"):
                            path = "pets";
                            break;
                        default:
                            path = ve.path;
                            break;
                    }

                    step = steps.current.get(path);

                    if (step) {
                        if (step.errors === undefined) step.errors = new Map<string, string>();
                        step.errors.set(ve.path, ve.message);
                    }
                });

                refresh();
            }

            return false;
        }
    };

    const updateErrors = () => {
        const stepName = stepOrder[stepIndex.current];
        const stepContainers: NodeListOf<HTMLElement> = document.getElementsByName(stepName + "Step");

        // clear the error states from the step's inputs
        if (stepContainers.length > 0) {
            Array.from(stepContainers[0].getElementsByClassName("error")).map(input => {
                const element = input as HTMLElement;
                element.title = "";
                element.className = element.className?.replace(/error/g, "").trim() || "";

                const typeName = element.getAttribute("type")?.toLowerCase();

                if (typeName === "radio" || typeName === "checkbox") {
                    let inputContainer: HTMLElement | null | undefined;
                    if (inputContainer = element.parentElement?.parentElement) {
                        inputContainer.className = (inputContainer.className || "").replace(/error/g, "").trim() || "";
                    }
                }
            });
        }

        pctDone.current = (Array.from(steps.current.values()).filter(v => v.isValid === true).length / totalSteps) * 100;

        const currentStep = steps.current.get(stepName);

        if (currentStep && currentStep.errors) {
            Array.from(currentStep.errors.entries()).map(entry => {
                const inputs = document.getElementsByName(entry[0].toLowerCase());
                if (inputs) {
                    inputs.forEach(element => {
                        element.className = "error";
                        element.title = entry[1];

                        const typeName = element.getAttribute("type")?.toLowerCase();

                        if (typeName === "radio" || typeName === "checkbox") {
                            let inputContainer: HTMLElement | null | undefined;
                            if (inputContainer = element.parentElement?.parentElement) {
                                inputContainer.className = (inputContainer.className + " error").trim();
                            }
                        }
                    });
                }
            });
        }
    };

    useIsomorphicLayoutEffect(() => {
        validateStep();
        updateErrors();
    }, [stepIndex.current, refreshHash]);

    return (
        <div className="assessment">
            {/*<!-- Completion Step -->*/}
            <div className={`flex-col items-center bg-gray-100 rounded-lg p-10 shadow justify-between step${stepIndex.current === totalSteps ? " active" : ""}`}>
                <svg className="mb-4 h-20 w-20 text-pink-600 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>

                <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">Assessment Complete!</h2>

                <div className="text-gray-600 mb-8 text-center">Your assessment has been submitted successfully!</div>
                <div className="text-gray-600 mb-8 text-center">Once Chef Laura has reviewed it she will get back to you shortly!</div>

                <NavLink to="/" className="button">Back to home</NavLink>
            </div>


            <div className={`flex ${stepIndex.current === totalSteps ? "hidden" : ""}`}>
                <div className="nav xl:w-1/5">
                    <div className="nav-wrapper">
                        <div className="nav-title">Assessment Areas (* Required)</div>
                        <ul className="nav-items">
                        {
                            Array.from(steps.current.entries()).map((entry: [string, WizardStep], index) => {
                                let className = stepOrder[stepIndex.current] === entry[0] ? "active" : "";
                                className += (entry[1].errors ? " error" : "");

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

                <div className="steps w-3/4 relative">
                    {/*<!-- Top Section -->*/}
                    <div className="border-b-2 py-2">
                        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">Step: {stepIndex.current + 1} of {totalSteps}</div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                                <div>
                                    <div className="text-lg font-bold text-gray-700 leading-tight">{ getStepTitle() }</div>
                                </div>
                            </div>

                            <div className="flex items-center md:w-64">
                                <div className="w-full bg-white rounded-full mr-2">
                                    <div className="rounded-full bg-pink-600 text-xs leading-none h-2 text-center text-white" style={{ width: `${pctDone.current}%` }}></div>
                                </div>
                                <div className="text-xs w-10 text-gray-600">{ `${parseInt(pctDone.current.toString())}` }%</div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Step Content -->*/}
                    <div className="areas">
                        <form ref={formRef}>
                            <div {...getStepAttributes("contact")}>
                                <Contact person={assessment.contact} onContactUpdate={onUpdateContact} />
                            </div>



                            <div {...getStepAttributes("address")}>
                                <div className="field col">
                                    <label>
                                        <span>Address1</span>
                                        <input type="text" name={"address.address1"} placeholder="Address1" maxLength={100} {...bindAddress1}></input>
                                    </label>
                                    <label>
                                        <span>Address2</span>
                                        <input type="text" name={"address.address2"} placeholder="Address2" maxLength={100} {...bindAddress2}></input>
                                    </label>
                                </div>
                                <div className="field row">
                                    <label>
                                        <span>City</span>
                                        <input type="text" name={"address.city"} placeholder="City" maxLength={100} style={{width: "320px"}} {...bindCity}></input>
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
                                        <InputMask type="text" name={"address.zipcode"} placeholder="Zip Code" style={{width: "120px"}} {...bindZipcode} mask="99999" />
                                    </label>
                                </div>
                            </div>



                            <div {...getStepAttributes("people")}>
                                {
                                    (assessment.people ?? []).map((person, index) => (
                                        <div className="person" key={person.id}>
                                            <div className="w-5/6">
                                                <Contact index={index} person={person} onContactUpdate={onUpdatePerson} />
                                            </div>
                                            <div className="w-1/6 text-center">
                                                <button className="remove" title="Remove" value={person.id} onClick={(e) => {e.preventDefault(); onRemovePerson(e.currentTarget.value);}}>
                                                    <span className="material-icons">remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div>
                                    <button className="button add" onClick={onAddPerson}>Add Person</button>
                                </div>
                            </div>



                            <div {...getStepAttributes("health")}>
                                <div className="field">
                                    <div>Are there any food allergies in your family?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"hasallergies"} items={YesNoBoolTypes} onChange={(values: string[]) => { hasAllergies.current = JSON.parse(values[0]); refresh(); }} />
                                    </div>
                                    <div className={`field conditional${hasAllergies.current ? " active" : ""}`}>
                                        <label>
                                            <span>Please explain</span>
                                            <textarea name="allergies" rows={10} cols={96} {...bindAllergies}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <div>Is anyone lactose intolerant?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"lactoseint"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({lactoseInt: JSON.parse(values[0])}); }} />
                                    </div>
                                </div>

                                <div className="field">
                                    <div>Are there any medical conditions in your family?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"hasmedconditions"} items={YesNoBoolTypes} onChange={(values: string[]) => { hasMedConditions.current = JSON.parse(values[0]); refresh(); }} />
                                    </div>
                                    <div className={`field conditional${hasMedConditions.current ? " active" : ""}`}>
                                        <label>
                                            <span>Please explain</span>
                                            <textarea name="medical" rows={10} cols={96} {...bindMedical}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <div>Is anyone planning to follow or currently following any specific diet plan?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton} name={"hasdietplan"} items={YesNoBoolTypes} onChange={(values: string[]) => { hasDietPlan.current = JSON.parse(values[0]); refresh(); }} />
                                    </div>
                                    <div className={`field conditional${hasDietPlan.current ? " active" : ""}`}>
                                        <label>
                                            <span>Please explain</span>
                                            <textarea name="dietplan" rows={10} cols={96} {...bindDietPlan}></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div {...getStepAttributes("packaging")}>
                                <div className="field">
                                    <div>How should the meals be packaged?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton}
                                                    name={"packaging"}
                                                    items={AssessmentPackagingTypes}
                                                    values={assessment.packaging ? [assessment.packaging] : []}
                                                    onChange={(values: string[]) => {onUpdateAssessment({ packaging: values[0] as AssessmentPackagingKeyTypes })}} />
                                    </div>
                                </div>

                                <div className="field">
                                    <div>What type of containers should be used to store the food?</div>
                                    <div className="field">
                                        <InputList type={InputTypeEnum.RadioButton}
                                            name={"container"}
                                            items={AssessmentContainerTypes}
                                            values={assessment.container ? [assessment.container] : []}
                                            onChange={(values: string[]) => {onUpdateAssessment({ container: values[0] as AssessmentContainerKeyTypes })}} />
                                        <div className="py-5">
                                            <i>(a $100 one-time fee will be charged if the chef needs to purchase Pyrex for you)</i>                            
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div {...getStepAttributes("beefPrep")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesbeef"} items={YesNoBoolTypes} onChange={(values: string[]) => { likesBeef.current = JSON.parse(values[0]); refresh(); }} />
                                </div>
                                <div className={`field conditional${likesBeef.current ? " active" : ""}`}>
                                    <div>How would you like it prepared?</div>
                                    <div>
                                        <InputList type={InputTypeEnum.Checkbox}
                                            name={"beefprep"}
                                            items={AssessmentBeefPrep}
                                            onChange={(values: string[]) => {
                                                onUpdateAssessment({ beefPrep: values.map(value => value as AssessmentBeefKeyTypes) });
                                            }} />
                                    </div>
                                </div>
                            </div>



                            <div {...getStepAttributes("chickenPrep")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likeschicken"} items={YesNoBoolTypes} onChange={(values: string[]) => { likesChicken.current = JSON.parse(values[0]); refresh(); }} />
                                </div>
                                <div className={`field conditional${likesChicken.current ? " active" : ""}`}>
                                    <div>How would you like it prepared?</div>
                                    <div>
                                        <InputList type={InputTypeEnum.Checkbox}
                                            name={"chickenprep"}
                                            items={AssessmentChickenPrep}
                                            onChange={(values: string[]) => {
                                                onUpdateAssessment({ chickenPrep: values.map(value => value as AssessmentChickenKeyTypes) });
                                            }} />
                                    </div>
                                </div>
                            </div>



                            <div {...getStepAttributes("likesTurkey")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesturkey"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({ likesTurkey: JSON.parse(values[0])}); }} />
                                </div>
                            </div>



                            <div {...getStepAttributes("likesLamb")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likeslamb"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({ likesLamb: JSON.parse(values[0])}); }} />
                                </div>
                            </div>



                            <div {...getStepAttributes("likesPork")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likespork"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({ likesPork: JSON.parse(values[0])}); }} />
                                </div>
                            </div>



                            <div {...getStepAttributes("likesSeafood")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesseafood"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({ likesSeafood: JSON.parse(values[0])}); }} />
                                </div>
                                <div className={`field conditional${assessment.likesSeafood ? " active" : ""}`}>
                                    <div>What types of fish/shellfish doesn't your family like?</div>
                                    <textarea name={"seafooddislikes"} rows={10} cols={96} {...bindSeafoodDislikes}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("likesVegetarian")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"likesvegetarian"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({ likesVegetarian: JSON.parse(values[0])}); }} />
                                </div>
                            </div>



                            <div {...getStepAttributes("otherFoods")}>
                                <div className="field">
                                    <div>Is there anything else that your family likes that I haven't covered?</div>
                                    <textarea name={"otherfoods"} rows={10} cols={96} {...bindOtherFoods}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("spiceLikes")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.Checkbox}
                                        name={"spicelikes"}
                                        items={AssessmentSpiceRanges}
                                        onChange={(values: string[]) => {
                                            onUpdateAssessment({ spiceLikes: values.map(value => value as AssessmentSpiceKeyTypes) });
                                        }} />
                                </div>
                            </div>



                            <div {...getStepAttributes("fhvLikes")}>
                                <div className="field">
                                    <textarea name="fhvlikes" rows={10} cols={96} {...bindFHVLikes}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("fhvDislikes")}>
                                <div className="field">
                                    <textarea name="fhvdislikes" rows={10} cols={96} {...bindFHVDislikes}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("saladLikes")}>
                                <div className="field">
                                    <textarea name="saladlikes" rows={10} cols={96} {...bindSaladLikes}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("appliances")}>
                                <div className="field">
                                    <textarea name="appliances" rows={10} cols={96} {...bindAppliances}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("recipes")}>
                                <div className="field">
                                    <textarea name="recipes" rows={10} cols={96} {...bindRecipes}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("restaurants")}>
                                <div className="field">
                                    <textarea name="restaurants" rows={10} cols={96} {...bindRestaurants}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("hasAddlFridge")}>
                                <div className="field">
                                    <InputList type={InputTypeEnum.RadioButton} name={"hasaddlfridge"} items={YesNoBoolTypes} onChange={(values: string[]) => { onUpdateAssessment({ hasAddlFridge: JSON.parse(values[0])}); }} />
                                </div>
                            </div>



                            <div {...getStepAttributes("groceryStores")}>
                                <div className="field">
                                    <textarea name="groceryStores" rows={10} cols={96} {...bindGroceryStores}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("fuseboxLocation")}>
                                <div className="field">
                                    <textarea name="fuseboxlocation" rows={10} cols={96} {...bindFuseboxLocation}></textarea>
                                </div>
                            </div>



                            <div {...getStepAttributes("pets")}>
                                <div>
                                {
                                    (assessment.pets ?? []).map((pet, index) => (
                                        <div className="pet" key={pet.id}>
                                            <div className="w-5/6">
                                                <Pet index={index} animal={pet} onPetUpdate={onUpdatePet} />
                                            </div>
                                            <div className="w-1/6 text-center">
                                                <button className="remove" title="Remove" value={pet.id} onClick={(e) => {e.preventDefault(); onRemovePet(pet.id)}}>
                                                    <span className="material-icons">remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                <div>
                                    <button className="button add" onClick={onAddPet}>Add Pet</button>
                                </div>
                            </div>



                            <div {...getStepAttributes("comments")}>
                                <div className="field">
                                    <textarea name="comments" rows={10} cols={96} {...bindComments}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/*<!-- Bottom Section -->*/}
                    <div className="buttons">
                        <div className="w-1/2">
                            <button onClick={(e) => moveToStep(e, stepIndex.current === 0, stepIndex.current - 1)}
                                    className={`button${stepIndex.current === 0 ? " hidden" : ""}`}>Previous</button>
                        </div>

                        <div className="w-1/2 text-right">
                            <button onClick={(e) => moveToStep(e, stepIndex.current === totalSteps - 1 || stepIndex.current < 0, stepIndex.current + 1)}
                                    className={`button${stepIndex.current >= totalSteps - 1 ? " hidden" : ""}`}>Next</button>
                        </div>
                    </div>
                    {/*<!-- / Bottom Navigation https://placehold.co/300x300/e2e8f0/cccccc -->*/}
                </div>
            </div>


            <div className="pt-5 float-right">
                <button onClick={complete} disabled={pctDone.current !== 100} className={`button color${stepIndex.current === totalSteps ? " hidden" : ""}`}>Submit</button>
            </div>
        </div>
    );
}