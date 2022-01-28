import React, { useRef, useState, useEffect, ButtonHTMLAttributes } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { ClipLoader } from "react-spinners";

interface WaitButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading: boolean
}

export default ({ isLoading, children, ...props }: WaitButtonProperties) => {
    /* showLoader is used to stay in the "isLoading state" a bit longer to avoid loading flashes
    if the loading state is too short. */
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if (isLoading) setShowLoader(true);

        // Show loader a bits longer to avoid loading flash
        if (!isLoading && showLoader) {
            const timeout = setTimeout(() => { setShowLoader(false); }, 400);

            return () => { clearTimeout(timeout); };
        }
    }, [isLoading, showLoader]);

    /* Capture the dimensions of the button before the loading happens
    so it doesn’t change size.
    These hooks can be put in a seprate file. */
    const ref = useRef<HTMLButtonElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current && ref.current.getBoundingClientRect().width) {
            setWidth(ref.current.getBoundingClientRect().width);
        }

        if (ref.current && ref.current.getBoundingClientRect().height) {
            setHeight(ref.current.getBoundingClientRect().height);
        }
    }, [children]);

    // Hooks used to fade in/out the loader or the button contents
    const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
    const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 });

    return (
        <button className="button" ref={ref} style={showLoader ? {width: `${width}px`, height: `${height}px`} : {}} {...props}>
            {
                showLoader ? (
                    <animated.div style={fadeOutProps}>
                        <ClipLoader />
                    </animated.div>
                ) : (
                    <animated.div style={fadeInProps}>
                        {children}
                    </animated.div>
                )
            }
        </button>
    );
}