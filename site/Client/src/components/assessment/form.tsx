import React, { useState } from 'react';

import { InputTypeEnum, InputList } from '../inputlist';
import { AssessmentContainerTypes, AssessmentPackagingTypes, AssessmentSpiceRanges } from '../../modules/records';

import { Pet } from './pet';
import { Contact } from './contact';

export const Assessment: React.FC = () => {
    return (
        <form>
            <div>
                <div><i><b>* Asterisk fields are required.</b></i></div>
                <div>
                    <div className="padbottom">At what address will the chef be cooking?</div>
                    <div className="field">
                        <label>
                            <input className="form-input" placeholder="Address1"></input>
                            <span>Address1</span>
                        </label>
                        <label>
                            <input className="form-input" placeholder="Address2"></input>
                            <span>Address2</span>
                        </label>
                    </div>
                    <div className="field">
                        <label>
                            <input className="form-input" placeholder="City"></input>
                            <span>City</span>
                        </label>
                        <label>
                            <select className="form-select"></select>
                            <span>State</span>
                        </label>
                        <label>
                            <input className="form-input" placeholder="Zip Code" maxLength={5}></input>
                            <span>Zip Code</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="field">
                        <label>
                            <span>How many people will the chef be cooking for?</span>
                            <input className="form-input" maxLength={2}></input>
                        </label>
                    </div>
                    <div><i><b>Please enter either the person's email address, phone number, or both.</b></i></div>
                    <div>
                        {/*
                        <Contact index={0} contactInfoOptional={true} />
                        */}
                    </div>
                </div>

                <div>
                    <label>
                        <span>What is your goal with hiring a personal chef?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>
{/*
                <div>
                    <div>Are there any allergies in your family?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"haveallergies"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                    <div className="field">
                        <label>
                            <span>Please explain</span>
                            <textarea className="form-textarea" rows={10} cols={96}></textarea>
                        </label>
                    </div>
                </div>

                <div>
                    <div>Are you lactose intolerant?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"islactoseint"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                </div>

                <div>
                    <div>Are there any medical conditions in your family?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"havemedconditions"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                    <div className="field">
                        <label>
                            <span>Please explain</span>
                            <textarea className="form-textarea" rows={10} cols={96}></textarea>
                        </label>
                    </div>
                </div>

                <div>
                    <div>Are you planning to follow or currently following any specific diet plan?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"havedietplan"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                    <div className="field">
                        <label>
                            <span>Please explain</span>
                            <textarea className="form-textarea" rows={10} cols={96}></textarea>
                        </label>
                    </div>
                </div>

                <div>
                    <div>How should your meals be packaged?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"packagetype"} items={AssessmentPackagingTypes} />
                    </div>
                </div>

                <div>
                    <div>What type of containers should be used to store the food?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"container"} items={AssessmentContainerTypes} />
                        <div>
                            <i>(a $100 one-time fee will be charged if the chef needs to purchase Pyrex for you)</i>                            
                        </div>
                    </div>
                </div>

                <div>
                    <div>Do you like the following meats?</div>

                </div>

                <div>
                    <div>How spicy do you like your spicy meals?</div>
                    <div className="field">
                        <div className="field">
                            <InputList type={InputTypeEnum.RadioButton} name={"spicelikes"} items={AssessmentSpiceRanges} />
                        </div>
                    </div>
                </div>

                <div>
                    <div>Would you like any vegetarian meals?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"likevegmeals"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                </div>
*/}
                <div>
                    <label>
                        <span>What are your favorite fruits, herbs and vegetables?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        <span>What fruits, herbs and vegetables do you dislike?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        <span>What are you favorite greens for salads?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Are there any kitchen appliances or equipment the chef cannot use?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Are there any family favorite recipes that you no longer have time to prepare? List any that you would like the chef to prepare for you.</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        <span>What are some of your favorite restaurants?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>
{/*
                <div>
                    <div>Do you have an additional freezer or refrigerator?</div>
                    <div className="field">
                        <InputList type={InputTypeEnum.RadioButton} name={"addlfridge"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                </div>
*/}
                <div>
                    <label>
                        <span>Where do you shop for groceries?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Where is your fuse/breaker box?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>

                <div>
                    <div className="field">
                        <label>
                            <span>How many people will the chef be cooking for?</span>
                            <input className="form-input" maxLength={2}></input>
                        </label>
                    </div>
                    <div><i><b>To clear the list of pets enter "0".</b></i></div>
                    <div id="pets"></div>
                </div>

                <div>
                    <label>
                        <span>Any comments/concerts?</span>
                        <textarea className="form-textarea" rows={10} cols={96}></textarea>
                    </label>
                </div>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
}