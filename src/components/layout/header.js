import React, { useState } from "react"

import HeaderNav from "./header-nav";
import HeaderLogo from "./header-logo";

const Header = ({ data }) => (
    <header className="w-full shadow">
        <div className="flex flex-row flex-wrap items-center px-2 py-8 container mx-auto">
            <HeaderLogo />
            <HeaderNav />
        </div>  
    </header>
)

export default Header