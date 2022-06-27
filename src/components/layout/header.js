import React, { useState } from "react"

import HeaderNav from "./header-nav";
import HeaderLogo from "./header-logo";
import HeaderCTA from "./header-cta";
import Hamburger from "./hamburger";

const Header = ({logo}) => (
    <header className="w-full bg-gradient-to-b from-blue-150 to-transparent md:bg-none md:bg-transparent absolute top-0 left-0 right-0 z-50" data={logo}>
        <div className="flex flex-row flex-wrap items-center px-0 md:px-2 py-6 container mx-auto">
            <div className="flex flex-row w-full md:w-auto md:flex-grow-0 px-2 md:px-0">
                <HeaderLogo logo={logo} />
                <Hamburger />
            </div>
            <div className="nav hidden md:flex flex-col md:flex-row w-full md:w-auto md:flex-grow mt-4 md:mt-0 shadow-inset md:shadow-none transition duration-500 ease-in-out">
                <HeaderNav />
                <HeaderCTA />
            </div>
        </div>  
    </header>
)

export default Header;