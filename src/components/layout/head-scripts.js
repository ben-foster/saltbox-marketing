import React from 'react';
import Helmet from 'react-helmet';

const HeadScripts = () => (
    <Helmet>
        <script type="text/javascript">
            {`
                function writeAttrToForms(){
                    // Don't run if no forms on page
                    if (document.querySelector("form")){
                        var ftSourceInputs = document.querySelectorAll(".firstTouchSource");
                        var ftMediumInputs = document.querySelectorAll(".firstTouchMedium");
                        var ftCampaignInputs = document.querySelectorAll(".firstTouchCampaign");
                        var ftContentInputs = document.querySelectorAll(".firstTouchContent");
                        var ftTermInputs = document.querySelectorAll(".firstTouchTerm");
                        var ftGclidInputs = document.querySelectorAll(".firstTouchGclid");
                        var ltSourceInputs = document.querySelectorAll(".lastTouchSource");
                        var ltMediumInputs = document.querySelectorAll(".lastTouchMedium");
                        var ltCampaignInputs = document.querySelectorAll(".lastTouchCampaign");
                        var ltContentInputs = document.querySelectorAll(".lastTouchContent");
                        var ltTermInputs = document.querySelectorAll(".lastTouchTerm");
                        var ltGclidInputs = document.querySelectorAll(".lastTouchGclid");
                        
                        ftSourceInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("original_source");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ftMediumInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("original_medium");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ftCampaignInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("original_campaign");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ftContentInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("original_content");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ftTermInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("original_term");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ftGclidInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("original_gclid");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ltSourceInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("source");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ltMediumInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("medium");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ltCampaignInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("campaign");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ltContentInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("content");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ltTermInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("term");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                        ltGclidInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("gclid");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                    }
                };

                function writeSessionHistoryToForms(){
                    // Don't run if no forms on page
                    if (document.querySelector("form")){
                        var sessionHistoryInputs = document.querySelectorAll(".sessionHistory");
                        
                        sessionHistoryInputs.forEach(function(input){
                            input.value = getSaltboxLocalStorage("session_history");
                            var event = new Event('change');
                            input.dispatchEvent(event);
                        });
                    }
                };
            `}
        </script>
        <script defer src="https://scripts.saltbox.tech/dist/v1/js/attribution.js" type="text/javascript" onload="writeAttrToForms()"></script>
        <script defer src="https://scripts.saltbox.tech/dist/v1/js/session-history.js" type="text/javascript" onload="writeSessionHistoryToForms()"></script>
    </Helmet>
);

export default HeadScripts;