import React from "react";

import transparencyIcon from "../../images/transparency-icon.svg";
import lockIcon from "../../images/lock-icon.svg";
import clockIcon from "../../images/clock-icon.svg";

const WhySaltbox = () => {
    return (
        <div className="flex flex-col my-8">
            <h2 className="font-bold text-center">Why Work with Saltbox?</h2>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/3 p-10">
                    <img src={clockIcon} alt="" className="my-4" />
                    <h3 className="font-bold text-center mb-6">No Commitments</h3>
                    <div className="text-sm text-left">
                        <p>We give all of our customers a 30-day out in our service agreements. We want to be a high-ROI investment for you - if things aren't working, we don't hold you hostage!</p>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 p-10">
                    <img src={lockIcon} alt="" className="my-4" />
                    <h3 className="font-bold text-center mb-6">No Variable Fees</h3>
                    <div className="text-sm text-left">
                        <p>We price our online advertising services as fixed fees (based on estimated management hours). This means our team isn't incentivized to increase your ad investment, so we can make the same decisions you would.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 p-10">
                    <img src={transparencyIcon} alt="" className="my-4" />
                    <h3 className="font-bold text-center mb-6">Full Transparency</h3>
                    <div className="text-sm text-left">
                        <p>You own all your data and accounts. We provide full admin access to any tools we set up on your behalf. We will walk you through all the processes we execute so you understand what we are doing and why it's important.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySaltbox;