// https://github.com/milosjanda/react-scroll-up

import React, { useState, useCallback, CSSProperties } from 'react';
import { supportsPassiveEvents } from 'detect-passive-events';

import { ScrollToTopProp } from '../modules/types';
import { TweenFunctionEnum } from '../modules/enums';
import { isUsingBrowser, TweenFunctions, useIsomorphicLayoutEffect } from '../utils';

export const ScrollToTop: React.FC<ScrollToTopProp> = ({ children, duration = 250, easing = TweenFunctionEnum.easeOutCubic, showUnder = 43, topPosition = 0, style = {
    position: 'fixed',
    bottom: 50,
    right: 30,
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s' }
}) => {
    const [show, setShow] = useState((!isUsingBrowser) ? false : window.pageYOffset == 0);

    let startValue = 0;
    let currentTime = 0;
    let rafId: number | null = null;
    let startTime: number | null = null; 

    useIsomorphicLayoutEffect(() => {
        if (!isUsingBrowser) return;

        handleScroll(); // initialize state

        // Add all listeners which can start scroll
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("wheel", stopScrolling, supportsPassiveEvents ? {capture: false, passive: true} : false);
        window.addEventListener("touchstart", stopScrolling, supportsPassiveEvents ? {capture: false, passive: true} : false);

        return () => {
            // Remove all listeners which was registered
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener("wheel", stopScrolling, false);
            window.removeEventListener("touchstart", stopScrolling, false);
        };
    }, [show]);

    /**
     * Evaluate show/hide this component, depend on new position
     */
    const handleScroll = () => {
        if (window.pageYOffset > showUnder) {
            !show && setShow(true);
        } else {
            show && setShow(false);
        }
    }

    /**
     * Handle click on the button
     */
    const handleClick = useCallback(() => {
        stopScrolling();
        
        startValue = window.pageYOffset;
        currentTime = 0;
        startTime = null;
        rafId = window.requestAnimationFrame(scrollStep);
    }, []);

    /**
     * Calculate new position
     * and scroll screen to new position or stop scrolling
     * @param timestamp
     */
    const scrollStep = (timestamp: number) => {
        if (!startTime) {
            startTime = timestamp;
        }

        currentTime = timestamp - startTime;

        let position = TweenFunctions[easing](currentTime, startValue, topPosition, duration);

        if (window.pageYOffset <= topPosition) {
            stopScrolling();
        } else {
            window.scrollTo(window.pageYOffset, position);
            rafId = window.requestAnimationFrame(scrollStep);
        }
    }

    /**
     * Stop Animation Frame
     */
    const stopScrolling = () => {
        (rafId) && window.cancelAnimationFrame(rafId);
    }

    const getCurrentStyle = (): CSSProperties => {
        return { ...style, opacity: (show ? 1 : 0), visibility: (show ? 'visible' : 'hidden'), transitionProperty: 'opacity, visibility' };
    }

    /**
     * Render component
     */
    return (
        <div className="slide-to-top" style={ getCurrentStyle() } onClick={ handleClick }>
            <span>&nbsp;</span>
        </div>
    );
}