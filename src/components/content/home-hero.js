import React from 'react';
import Img from "gatsby-image";

import background from "../../images/hexagons.svg"

const HomeHero = (props) => {
    const { logoSrc, tagline } = props;
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className="container mx-auto flex flex-row flex-wrap items-center py-48 px-20">
                <div className="flex flex-row-reverse w-1/2 p-24">
                    <img 
                        className="w-64"
                        src={logoSrc}
                        alt="Saltbox logo"
                    />
                </div>
                <div className="flex flex-col w-1/2 text-gray-800">
                    <h1 className="font-light">{tagline}</h1>
                </div>
                
            </div>
        </div>
    );
};

export default HomeHero;