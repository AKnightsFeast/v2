import React, { FC, useState, useRef } from 'react';

import { MenuNavProp } from '../../modules/types';
import { isUsingBrowser, useIsomorphicLayoutEffect } from '../../utils';

import { Nav as EventsNav, MenuList as EventsList } from './events';
import { Nav as FreezerNav, MenuList as FreezerList } from './freezer';
import { Nav as PersonalNav, MenuList as PersonalList } from './personal';

type MenuSections = {
    Menus: FC,
    Title: string,
    Nav: FC<MenuNavProp>
}

const MenuTemplate = ({ Nav, Menus, Title }: MenuSections) => {
    const [menuId, setMenuId] = useState(1);
    const menus = useRef<HTMLElement[]>([]);
    const [, refreshNav] = useState();

    useIsomorphicLayoutEffect(() => {
        if (!isUsingBrowser) return;

        const domMenus = document.getElementsByClassName("menu");

        if (domMenus && domMenus.length > 0) {
            const menuElements = Array.prototype.slice.call(domMenus) as HTMLElement[];

            menus.current = [ ...menus.current, ...menuElements ];

            // Add all listeners which can start scroll
            window.addEventListener('scroll', handleScroll);
        }

        // Remove all listeners which was registered
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);

    useIsomorphicLayoutEffect(() => { refreshNav({}); }, [menuId])

    /**
     * Evaluate the position of this component, depend on new position
     */
    const handleScroll = () => {
        if (menus.current.length === 0) return;

        let visibleMenuId = 1;

        menus.current.forEach((menu: HTMLElement) => {
            if (50 > menu.getBoundingClientRect().top) {
                visibleMenuId = +menu.id;
            }
        });

        setMenuId(visibleMenuId);
    }

    return (
        <div className="menu-special">
            <div className="menu-nav fixed inset-0 h-full pt-24 bg-gray-100 z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:bg-transparent lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden">
                <div className="menu-nav-wrapper">
                    <div className="menu-nav-title">{ Title }</div>
                    <ul className="menu-nav-items">
                        <Nav activeMenuId={ menuId } />
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