import { Epic } from 'redux-observable';
import { CSSProperties, MutableRefObject } from 'react';
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

export type ApplicationState = {
    MonthlyMenu: MonthlyMenuState
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
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zipcode: string,
}

export type Person = {
    id: string,
    fname: string,
    mi?: string,
    lname: string,
    dob: string,
    email?: string,
    phone?: string,
};

export type CustomerPet = {
    id: string,
    name: string,
    type: string,
    friendly?: boolean,
    location: RecordTypes.AssessmentPetLocationKeyTypes[],
};

export type Assessment = {
    contact: Person,
    address: Address,
    people?: Person[],
    allergies: string | null,
    lactoseInt?: boolean,
    medical: string | null,
    dietPlan: string | null,
    packaging?: RecordTypes.AssessmentPackagingKeyTypes,
    container?: RecordTypes.AssessmentContainerKeyTypes,
    beefPrep?: RecordTypes.AssessmentBeefKeyTypes[],
    chickenPrep?: RecordTypes.AssessmentChickenKeyTypes[],
    likesTurkey?: boolean,
    likesLamb?: boolean,
    likesPork?: boolean,
    likesSeafood?: boolean,
    seafoodDislikes: string | null,
    likesVeggie?: boolean,
    otherFoods: string | null,
    spiceLikes?: RecordTypes.AssessmentSpiceKeyTypes[],
    fhvLikes: string | null,
    fhvDislikes: string | null,
    saladLikes: string | null,
    appliances: string | null,
    recipes: string | null,
    restaurants: string | null,
    hasAddlFridge?: boolean,
    groceryStores: string | null,
    fuseboxLocation: string,
    pets?: CustomerPet[],
    comments: string | null,
}

export type Services = typeof import ('../services').default;

export type Store = StateType<typeof import('../store').default>;

export type RootReducer = StateType<typeof import('../store/reducer').default>;

export type RootAction = ActionType<typeof import('../store/action').default>;

export type RootEpic = Epic<RootAction, RootAction, RootReducer, Services>;

//interface Types {
//    RootAction: RootAction;
//}