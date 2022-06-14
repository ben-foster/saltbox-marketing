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
                    className="w-32"
                    width="150px"
                    height="54px"
                />
            </Link>
        </div>
    );
}

export default HeaderLogo;