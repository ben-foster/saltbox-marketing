import React from "react";

import Hero from "./hero";

const HomeHero = (props) => {
    const { taglineLineOne, taglineLineTwo } = props;
    return (
        <Hero fillColor="text-gray-100">
            <div className="container mx-auto flex flex-row flex-wrap items-center pt-48 pb-32 px-20">
                <div className="flex flex-col w-full items-center justify-center">
                    <h1 className="flex flex-col text-center font-bold mb-16">
                        <span className="text-white whitespace-no-wrap">{taglineLineOne}</span>
                        <span className="text-teal-100 whitespace-no-wrap">{taglineLineTwo}</span>
                    </h1>
                </div>
            </div>
        </Hero>
    );
};

export default HomeHero;