import React from "react";
import { Link } from "gatsby";

import defaultLogo from "../../images/saltbox-logo-horizontal-white.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeaderLogo = ({logo}) => {
    return (
        <div className="flex-grow-0">
            <Link to="/">
                <LazyLoadImage
                    src={logo ? logo : defaultLogo}
                    alt="saltbox logo"
                    className="w-32 hidden md:block"
                    width="150px"
                    height="54px"
                />
                <LazyLoadImage
                    src={defaultLogo}
                    alt="saltbox logo"
                    className="w-32 block md:hidden"
                    width="150px"
                    height="54px"
                />
            </Link>
        </div>
    );
}

export default HeaderLogo;