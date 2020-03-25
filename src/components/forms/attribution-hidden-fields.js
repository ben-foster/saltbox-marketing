import React from "react";

const AttributionHiddenFields = () => {
    return (
        <>
            <input 
                type="hidden" 
                name="firstTouchSource"
                id="firstTouchSource"
            />
            <input 
                type="hidden" 
                name="firstTouchMedium"
                id="firstTouchMedium"
            />
            <input 
                type="hidden" 
                name="firstTouchCampaign"
                id="firstTouchCampaign"
            />
            <input 
                type="hidden" 
                name="firstTouchContent"
                id="firstTouchContent"
            />
            <input 
                type="hidden" 
                name="firstTouchTerm"
                id="firstTouchTerm"
            />
            <input 
                type="hidden" 
                name="lastTouchSource"
                id="lastTouchSource"
            />
            <input 
                type="hidden" 
                name="lastTouchMedium"
                id="lastTouchMedium"
            />
            <input 
                type="hidden" 
                name="lastTouchCampaign"
                id="lastTouchCampaign"
            />
            <input 
                type="hidden" 
                name="lastTouchContent"
                id="lastTouchContent"
            />
            <input 
                type="hidden" 
                name="lastTouchTerm"
                id="lastTouchTerm"
            />
            <input 
                type="hidden" 
                name="sessionHistory"
                id="sessionHistory"
            />
        </>
    );
};

export default AttributionHiddenFields;