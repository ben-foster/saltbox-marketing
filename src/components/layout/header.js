import React, { useState } from "react"

import HeaderNav from "./header-nav";
import HeaderLogo from "./header-logo";
import HeaderCTA from "./header-cta";

const Header = () => (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
        <div className="flex flex-row flex-wrap items-center px-2 py-6 container mx-auto">
            <HeaderLogo />
            <HeaderNav />
            <HeaderCTA />
        </div>  
    </header>
)

export default Header;