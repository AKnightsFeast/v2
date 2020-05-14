import React, { useRef, useState, useCallback, MouseEvent } from 'react';

type WizardStep = {
    title: string,
    valid: boolean
};

export const Assessment: React.FC = () => {
    const [steps, updateSteps] = useState<Map<string, WizardStep>>(
        new Map([
            ["a", { title: "Your Profile", valid: false }],
            ["b", { title: "Your Password", valid: false }],
            ["c", { title: "Your Info", valid: false }],
        ])
    );

    const totalSteps = steps.size;
    const stepOrder: string[] = Array.from(steps.keys());
        
    const [stepIdx, setStepIdx] = useState(0);
    const getPctDone = () => (stepIdx / (totalSteps - 1)) * 100;
    const pctDone = useRef(getPctDone());

    const getStepTitle = (): string => {
        const step: WizardStep | undefined = steps.get(stepOrder[stepIdx]);
        if (step) return step.title;
        return '';
    }

    const moveNext = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (stepIdx == totalSteps - 1) return;
        pctDone.current = getPctDone();
        setStepIdx(stepIdx + 1);
    }, [stepIdx]);

    const movePrev = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (stepIdx == 0) return;
        pctDone.current = getPctDone();
        setStepIdx(stepIdx - 1);
    }, [stepIdx]);

    const complete = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setStepIdx(totalSteps);
    }, [null]);

    return (
        <form>
            <div className="max-w-3xl mx-auto px-4 py-10">
                <div className={`relative ${stepIdx !== totalSteps ? "hidden" : ""}`}>
                    <div className={`step${stepIdx === totalSteps ? " active" : ""}`}>
                        <div className="bg-white rounded-lg p-10 flex items-center shadow justify-between">
                            <div>
                                <svg className="mb-4 h-20 w-20 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>

                                <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">Registration Success</h2>

                                <div className="text-gray-600 mb-8">
                                    Thank you. We have sent you an email to demo@demo.test. Please click the link in the message to activate your account.
                                </div>
        {/*
                                <button onClick={ moveNext }
                                    className="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border" 
                                >Back to home</button>
        */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${stepIdx === totalSteps ? "hidden" : ""}`}>
                    {/*<!-- Top Navigation -->*/}
                    <div className="border-b-2 py-4">
                        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">Step: {stepIdx + 1} of {totalSteps}</div>
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
                    {/*<!-- /Top Navigation -->*/}

                    {/*<!-- Step Content -->*/}
                    <div className="relative py-10">	
                        <div className={`step${stepOrder[stepIdx] === "a" ? " active" : ""}`}>
                            <div className="mb-5 text-center">							
                                <label 
                                    className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                        <circle cx="12" cy="13" r="3" />
                                    </svg>						
                                    Browse Photo
                                </label>

                                <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>
                            </div>

                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Firstname</label>
                                <input type="text"
                                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                    placeholder="Enter your firstname..." />
                            </div>

                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Email</label>
                                <input type="email"
                                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                    placeholder="Enter your email address..." />
                            </div>
                        </div>



                        <div className={`step${stepOrder[stepIdx] === "b" ? " active" : ""}`}>
                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Set up password</label>
                                <div className="text-gray-600 mt-2 mb-4">
                                    Please create a secure password including the following criteria below.

                                    <ul className="list-disc text-sm ml-4 mt-2">
                                        <li>lowercase letters</li>
                                        <li>numbers</li>
                                        <li>capital letters</li>
                                        <li>special characters</li>
                                    </ul>	
                                </div>

                                <div className="relative">
                                    <input type="password"
                                        className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                        placeholder="Your strong password..." />

                                    <div className="absolute right-0 bottom-0 top-0 px-3 py-3 cursor-pointer">	
                                        <svg xmlns="http://www.w3.org/2000/svg" className="block w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24"><path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z"/><path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z"/></svg>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className={`step${stepOrder[stepIdx] === "c" ? " active" : ""}`}>
                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Gender</label>
                                
                                <div className="flex">
                                    <label
                                        className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
                                        <div className="text-teal-600 mr-3">
                                            <input type="radio" x-model="gender" value="Male" className="form-radio focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className="select-none text-gray-700">Male</div>
                                    </label>

                                    <label
                                        className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
                                        <div className="text-teal-600 mr-3">
                                            <input type="radio" x-model="gender" value="Female" className="form-radio focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className="select-none text-gray-700">Female</div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="font-bold mb-1 text-gray-700 block">Profession</label>
                                <input type="profession"
                                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                    placeholder="eg. Web Developer" />
                            </div>
                        </div>
                    </div>
                    {/*<!-- / Step Content -->*/}
                </div>

                {/*<!-- Bottom Navigation -->*/}
                <div className={`fixed bottom-0 left-0 right-0 py-5 bg-white shadow-md${stepIdx === totalSteps ? " hidden" : ""}`}>
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="flex justify-between">
                            <div className="w-1/2">
                                <button
                                    x-show="step > 1"
                                    onClick={ movePrev }
                                    className={`w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border${stepIdx === 0 ? " hidden" : ""}`}
                                >Previous</button>
                            </div>

                            <div className="w-1/2 text-right">
                                <button
                                    x-show="step < 3"
                                    onClick={ moveNext }
                                    className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium${stepIdx >= totalSteps - 1 ? " hidden" : ""}`}
                                >Next</button>

                                <button
                                    onClick={ complete }
                                    className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium${stepIdx < totalSteps - 1 ? " hidden" : ""}`}
                                >Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- / Bottom Navigation https://placehold.co/300x300/e2e8f0/cccccc -->*/}
            </div>
        </form>
    );
}