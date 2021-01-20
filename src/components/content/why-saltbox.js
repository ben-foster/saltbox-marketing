import React from "react";

import placeholder from '../../images/placeholder.png';

const WhySaltbox = ({ className }) => {
    return (
        <div className={`flex flex-col py-12 ${className}`}>
            <h2 className="font-bold text-center">Why Work with Saltbox?</h2>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/3 py-6 px-6 md:px-10">
                    {
                        process.env.GATSBY_ENV !== 'prod' ? (
                            <img src="https://wordpress.saltbox.solutions/wp-content/uploads/2020/07/no-commitments-icon-1.svg" alt="" className="my-4" />
                        ) : (
                            <img src={placeholder} data-src="https://wordpress.saltbox.solutions/wp-content/uploads/2020/07/no-commitments-icon-1.svg" alt="" className="lozad my-4" />
                        )
                    }
                    <h3 className="font-bold text-center text-xl mb-6">No Commitments</h3>
                    <div className="text-sm text-left">
                        <p>We give all of our customers a 30-day out in our service agreements. We want to be a high-ROI investment for you - if things aren't working, we don't hold you hostage!</p>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 py-6 px-6 md:px-10">
                    {
                        process.env.GATSBY_ENV !== 'prod' ? (
                            <img src="https://wordpress.saltbox.solutions/wp-content/uploads/2020/07/fixed-fee-icon-1.svg" alt="" className="my-4" />
                        ) : (
                            <img src={placeholder} data-src="https://wordpress.saltbox.solutions/wp-content/uploads/2020/07/fixed-fee-icon-1.svg" alt="" className="lozad my-4" />
                        )
                    }
                    <h3 className="font-bold text-center text-xl mb-6">No Variable Fees</h3>
                    <div className="text-sm text-left">
                        <p>We price our online advertising services as fixed fees (based on estimated management hours). This means our team isn't incentivized to increase your ad investment, so we can make the same decisions you would.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 py-6 px-6 md:px-10">
                    {
                        process.env.GATSBY_ENV !== 'prod' ? (
                            <img src="https://wordpress.saltbox.solutions/wp-content/uploads/2020/07/transparency-icon.svg" alt="" className="my-4" />
                        ) : (
                            <img src={placeholder} data-src="https://wordpress.saltbox.solutions/wp-content/uploads/2020/07/transparency-icon.svg" alt="" className="lozad my-4" />
                        )
                    }
                    <h3 className="font-bold text-center text-xl mb-6">Full Transparency</h3>
                    <div className="text-sm text-left">
                        <p>You own all your data and accounts. We provide full admin access to any tools we set up on your behalf. We will walk you through all the processes we execute so you understand what we are doing and why it's important.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySaltbox;