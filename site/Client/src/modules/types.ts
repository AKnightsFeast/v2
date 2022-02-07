import { Epic } from 'redux-observable';
import { CSSProperties } from 'react';
import { StateType, ActionType } from 'typesafe-actions';

import Services from '../services';
import * as RecordTypes from './records';
import { TweenFunctionEnum } from './enums';

export type State = {
    Abbr: string,
    Name: string,
}

export type Month = {
    Abbr: string,
    Name: string,
    Number: number
}    

export type MonthlyMenuState = {
    IsLoading: boolean,
    SelectedYear: number,
    MenuDates: Map<number, number[]>,
    SelectedMonth?: Month | null | undefined
};    

export type AssessmentState = {
    IsSubmitting: boolean
}

export type ContactMessageState = {
    IsSendingMessage: boolean
}

export type ApplicationState = {
    MonthlyMenu: MonthlyMenuState,
    Assessment: AssessmentState,
    ContactMessage: ContactMessageState
};    

export type ScrollToTopProp = {
    topPosition?: number,
    showUnder?: number, // show button under this position,
    easing?: TweenFunctionEnum,
    duration?: number, // seconds
    style?: CSSProperties
};

export type MenuNavProp = {
    activeMenuId: number
}

export interface IIndexedControlProp {
    index?: number
}

export type Address = {
    address1: string | null,
    address2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
}

export type Person = {
    id: string,
    fname: string | null,
    mi: string | null,
    lname: string | null,
    dob: Date | null,
    email: string | null,
    phone: string | null,
};

export type CustomerPet = {
    id: string,
    name: string | null,
    type: string | null,
    friendly: boolean | null,
    location: RecordTypes.AssessmentPetLocationKeyTypes[] | null,
};

export type Assessment = {
    contact: Person,
    address: Address,
    people: Person[] | null,
    hiringGoal: string | null,
    allergies: string | null,
    lactoseInt: boolean | null,
    medical: string | null,
    dietPlan: string | null,
    packaging: RecordTypes.AssessmentPackagingKeyTypes | null,
    container: RecordTypes.AssessmentContainerKeyTypes | null,
    beefPrep: RecordTypes.AssessmentBeefKeyTypes[] | null,
    chickenPrep: RecordTypes.AssessmentChickenKeyTypes[] | null,
    likesTurkey: boolean | null,
    likesLamb: boolean | null,
    likesPork: boolean | null,
    likesSeafood: boolean | null,
    seafoodDislikes: string | null,
    likesVegetarian: boolean | null,
    otherFoods: string | null,
    spiceLikes: RecordTypes.AssessmentSpiceKeyTypes[] | null,
    fhvLikes: string | null,
    fhvDislikes: string | null,
    saladLikes: string | null,
    appliances: string | null,
    recipes: string | null,
    restaurants: string | null,
    hasAddlFridge: boolean | null,
    groceryStores: string | null,
    fuseboxLocation: string | null,
    pets: CustomerPet[] | null,
    comments: string | null,
}

export type Message = {
    sender: string,
    email: string,
    text: string
};

export type Services = typeof import ('../services').default;

export type Store = StateType<typeof import('../store').default>;

export type RootReducer = StateType<typeof import('../store/reducer').default>;

export type RootAction = ActionType<typeof import('../store/action').default>;

export type RootEpic = Epic<RootAction, RootAction, RootReducer, Services>;

//interface Types {
//    RootAction: RootAction;
//}