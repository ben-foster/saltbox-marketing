import React from "react";

import Hero from "./hero";

const HomeHero = (props) => {
    const { taglineLineOne, taglineLineTwo } = props;
    return (
        <Hero fillColor="text-white" className="bg-blue-150">
            <div className="container mx-auto flex flex-row flex-wrap items-center pt-24 px-2 md:px-20 h-screen">
                <div className="flex flex-col w-full items-center justify-center mb-32 py-12">
                    <h1 className="w-full text-2xl md:text-5xl flex flex-col text-center text-shadow font-bold mb-16">
                        <span className="w-full text-white whitespace-no-wrap">{taglineLineOne}</span>
                        <span className="w-full text-teal-100 whitespace-no-wrap">{taglineLineTwo}</span>
                    </h1>
                </div>
            </div>
        </Hero>
    );
};

export default HomeHero;