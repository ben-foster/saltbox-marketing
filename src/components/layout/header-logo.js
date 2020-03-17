import React from "react";
import { Link } from "gatsby";

import logo from "../../images/saltbox-logo-horizontal-white.svg"

const HeaderLogo = () => (
    <div className="flex-grow-0">
        <Link to="/">  
            <img 
                className="w-32"
                src={logo} 
            />
        </Link>
    </div>
)

export default HeaderLogo;