import React from "react";

import background from "../../images/hexagons.svg"

const HomeHero = (props) => {
    const { taglineLineOne, taglineLineTwo } = props;
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className="container mx-auto flex flex-row flex-wrap items-center py-48 px-20">
                <div className="flex w-full">
                    <h1 className="flex flex-col">
                        <span className="whitespace-no-wrap">{taglineLineOne}</span>
                        <span className="whitespace-no-wrap">{taglineLineTwo}</span>
                    </h1>
                </div>
                
            </div>
        </div>
    );
};

export default HomeHero;