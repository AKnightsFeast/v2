import React, { useState } from 'react';

import { AssessmentEnums, AssessmentContainerTypes, AssessmentPackagingTypes, AssessmentSpiceRanges } from '../../modules/enums';

import { Pet } from './pet';
import { Contact } from './contact';

type RadioButtonItem = {
    label: string,
    value: string
}

type RadioButtonListProp = {
    name: string,
    items: RadioButtonItem[] | AssessmentEnums
}

const isRadioButtonItemArr = (v: any): v is RadioButtonItem[] => (v as RadioButtonItem[]).length !== undefined;

const RadioButtonList: React.FC<RadioButtonListProp> = ({ name, items }) => {
    const rbClassName = "pretty p-icon p-round p-plain p-smooth";
    const rbDivClassName = "state p-primary-o";
    const muiIconName = "check_circle";

    return (
        <>
            {
                (isRadioButtonItemArr(items)) ?
                    (items as RadioButtonItem[]).map(rb => (
                        <div className={rbClassName}>
                            <input type="radio" name={name} value={rb.value} />
                            <div className={rbDivClassName}>
                                <i className="icon material-icons">{muiIconName}</i>
                                <label>{rb.label}</label>
                            </div>
                        </div>
                    )) :
                    Object.entries(items).filter(entry => !Number(entry[0])).map(entry => (
                        <div className={rbClassName}>
                            <input type="radio" name={name} value={entry[0]} />
                            <div className={rbDivClassName}>
                                <i className="icon material-icons">{muiIconName}</i>
                                <label>{entry[1]}</label>
                            </div>
                        </div>
                    ))
            }
        </>
    );
}

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

                <div>
                    <div>Are there any allergies in your family?</div>
                    <div className="field">
                        <RadioButtonList name={"haveallergies"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                        <RadioButtonList name={"islactoseint"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                </div>

                <div>
                    <div>Are there any medical conditions in your family?</div>
                    <div className="field">
                        <RadioButtonList name={"havemedconditions"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                        <RadioButtonList name={"havedietplan"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
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
                        <RadioButtonList name={"packagetype"} items={AssessmentPackagingTypes} />
                    </div>
                </div>

                <div>
                    <div>What type of containers should be used to store the food?</div>
                    <div className="field">
                        <RadioButtonList name={"container"} items={AssessmentContainerTypes} />
                        <div>
                            <i>(a $100 one-time fee will be charged if the chef needs to purchase Pyrex for you)</i>                            
                        </div>
                    </div>
                </div>

                <div>
                    <div>Do you like the following meats?</div>
{/*
                    <div>
                            var showSection = Model != null && Model.Beef;
                            var subDivClass = @"className='nlfield" + (!showSection ? " hidden" : string.Empty) + "'";
                            var attrs = new Dictionary<string, object>() { { "class", "tfaction" } };
                            if (showSection) { attrs.Add("checked", "checked"); }
                        <div><label>@Html.CheckBoxFor(m => m.Beef, attrs) Beef</label></div>
                        <div id="beef" style="margin: 2px 0px 2px 16px !important">
                            <div style="margin-bottom: 2px">How do you like your beef prepared?</div>
                            <div className="field">@Html.CheckBoxListForEnum(m => m.BeefPrep, 3)</div>
                        </div>
                    </div>
                    <div>
                            showSection = Model != null && Model.Chicken;
                            subDivClass = @"className='nlfield" + (!showSection ? " hidden" : string.Empty) + "'";
                            attrs = new Dictionary<string, object>() { { "class", "tfaction" } };
                            if (showSection) { attrs.Add("checked", "checked"); }
                        <div><label>@Html.CheckBoxFor(m => m.Chicken, attrs) Chicken</label></div>
                        <div id="chicken" style="margin: 2px 0px 2px 16px !important">
                            <div style="margin-bottom: 2px">How do you like your chicken prepared?</div>
                            <div className="field">@Html.CheckBoxListForEnum(m => m.ChickenPrep, 3)</div>
                        </div>
                    </div>
                    <div><label>@Html.CheckBoxFor(m => m.Turkey) Turkey</label></div>
                    <div><label>@Html.CheckBoxFor(m => m.Lamb) Lamb</label></div>
                    <div><label>@Html.CheckBoxFor(m => m.Pork) Pork</label></div>
                    <div>
                        <div><label>@Html.CheckBoxFor(m => m.Seafood, new { @class = "tfaction" }) Seafood</label></div>
                        <div id="seafood" className="nlfield hidden" style="margin-bottom: 2px">
                            <div>What types of fish/shellfish don't you like?</div>
                            <div>@Html.TextAreaFor(m => m.SeafoodNots, new { @rows = "10", @cols = "96" })</div>
                        </div>
                    </div>
                    <div>
                        <div><label><input id="OtherMeatsTF" type="checkbox" className="tfaction" name="other" /> Other</label></div>
                        <div id="other" className="nlfield hidden">@Html.TextAreaFor(m => m.OtherMeats, new { @rows = "10", @cols = "96" })</div>
                    </div>
*/}
                </div>

                <div>
                    <div>How spicy do you like your spicy meals?</div>
                    <div className="field">
                        <div className="field">
                            <RadioButtonList name={"spicelikes"} items={AssessmentSpiceRanges} />
                        </div>
                    </div>
                </div>

                <div>
                    <div>Would you like any vegetarian meals?</div>
                    <div className="field">
                        <RadioButtonList name={"likevegmeals"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                </div>

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

                <div>
                    <div>Do you have an additional freezer or refrigerator?</div>
                    <div className="field">
                        <RadioButtonList name={"addlfridge"} items={[ { label: "Yes", value: "true" }, { label: "No", value: "false" } ]} />
                    </div>
                </div>

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
                    <div id="pets">
                        <Pet index={0} />
                    </div>
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