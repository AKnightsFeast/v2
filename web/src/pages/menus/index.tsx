import React, { FC } from 'react';

import { Nav as EventsNav, MenuList as EventsList } from './events';
import { Nav as FreezerNav, MenuList as FreezerList } from './freezer';
import { Nav as PersonalNav, MenuList as PersonalList } from './personal';

type MenuSections = {
    Nav: FC,
    Menus: FC,
    Title: string
}

const MenuTemplate = ({ Nav, Menus, Title }: MenuSections) => {
    return (
        <div className="menu-special">
            <div className="menu-nav fixed inset-0 h-full pt-24 bg-gray-100 z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:bg-transparent lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden">
                <div className="menu-nav-wrapper">
                    <div className="menu-nav-title">{ Title }</div>
                    <ul className="menu-nav-items">
                        <Nav />
                    </ul>
                </div>
            </div>
            <div className="menus">
                <Menus />
            </div>
        </div>
    );
}

export { Monthly } from  './monthly';
export const Events: FC = () => <MenuTemplate Nav={ EventsNav } Menus={ EventsList } Title={ "Themed Event Menus" } />
export const Personal: FC = () => <MenuTemplate Nav={ PersonalNav } Menus={ PersonalList } Title={ "Personal Menus" } />
export const Freezer: FC = () => <MenuTemplate Nav={ FreezerNav } Menus={ FreezerList } Title={ "Pack Your Freezer Menus" } />