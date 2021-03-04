import { v4 as getUuid } from 'uuid';

import { MonthlyMenuState, ApplicationState, Assessment, Person, CustomerPet} from './types';
//import { boolean } from 'yup';

export const InitialMonthlyMenuState : MonthlyMenuState = {
    IsLoading: false,
    SelectedMonth: null,
    SelectedYear: new Date().getFullYear(),
    MenuDates: new Map<number, number[]>()
};

export const InitialApplicationState : ApplicationState = {
    MonthlyMenu: InitialMonthlyMenuState,
    Assessment: { IsSubmitting: false }
};

export const getInitialPetState = (): CustomerPet => ({ id: getUuid(), name: null, type: null, friendly: null, location: null });

export const getInitialPersonState = (): Person => ({ id: getUuid(), fname: null, mi: null, lname: null,  dob: null, email: null, phone: null });

export const getInitialAssessmentState: Assessment = {
    contact: getInitialPersonState(),
    hiringGoal: null,
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
}