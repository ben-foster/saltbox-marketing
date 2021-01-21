import React from "react";
import { Link } from "gatsby";

import logo from "../../images/saltbox-logo-horizontal-white.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeaderLogo = () => (
    <div className="flex-grow-0">
        <Link to="/">
            <LazyLoadImage
                src={logo}
                alt="saltbox logo"
                className="w-32"
                width="150px"
                height="auto"
            />
            {/* <img 
                className="w-32"
                src={logo}
                alt="saltbox logo"
            /> */}
        </Link>
    </div>
)

export default HeaderLogo;