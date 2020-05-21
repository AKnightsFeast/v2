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
    location: string[],
};

export type Assessment = {
    contact: Person,
    address: Address,
    people?: Person[],
    allergies?: string,
    lactoseint?: boolean,
    medical?: string,
    dietplan?: string,
    packaging?: typeof RecordTypes.AssessmentPackagingTypes,
    container?: typeof RecordTypes.AssessmentContainerTypes,
    beefPrep?: typeof RecordTypes.AssessmentBeefPrep[],
    chickenPrep?: typeof RecordTypes.AssessmentChickenPrep[],
    likesTurkey?: boolean,
    likesLamb?: boolean,
    likesPork?: boolean,
    likesSeafood?: boolean,
    seafoodDislikes?: string,
    likesVeggie?: boolean,
    otherFoods?: string,
    spiceLikes?: typeof RecordTypes.AssessmentSpiceRanges[],
    fhvLikes?: string,
    fhvDislikes?: string,
    saladLikes?: string,
    appliances?: string,
    recipes?: string,
    restaurants?: string,
    hasAddlFridge?: boolean,
    groceryStores?: string,
    fuseboxLocation?: string,
    pets?: CustomerPet[],
    comments?: string,
}

export type Services = typeof import ('../services').default;

export type Store = StateType<typeof import('../store').default>;

export type RootReducer = StateType<typeof import('../store/reducer').default>;

export type RootAction = ActionType<typeof import('../store/action').default>;

export type RootEpic = Epic<RootAction, RootAction, RootReducer, Services>;

//interface Types {
//    RootAction: RootAction;
//}