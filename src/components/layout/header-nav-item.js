import React, { useState } from "react";
import { Link } from "gatsby"

const HeaderNavItem = ({ item }) => {
    const [ showSubNav, setShowSubNav ] = useState(false);
    return (
        <div className="relative w-full md:w-auto">
            <Link
                to={item.url.replace("https://wordpress.saltbox.solutions", "")}
                className="w-full flex items-center justify-center bg-blue-900 md:bg-transparent md:w-auto p-4 text-white font-normal"
                key={item.title}
                onMouseEnter={() => item.child_items ? setShowSubNav(true) : null}
                onMouseLeave={() => item.child_items ? setShowSubNav(false) : null}
            >
                {item.title}
            </Link>
            { item.child_items && (
                <div 
                    className={`absolute hidden ${ showSubNav ? "md:flex" : "" } flex-col w-64 py-3 mt-0 bg-white rounded-lg shadow`}
                    onMouseEnter={() => item.child_items ? setShowSubNav(true) : null}
                    onMouseLeave={() => item.child_items ? setShowSubNav(false) : null}
                >
                    {item.child_items.map(childItem => (
                        <Link
                            to={childItem.url.replace("https://wordpress.saltbox.solutions", "")}
                            className="px-6 py-4 text-sm"
                            key={childItem.title}
                        >
                            {childItem.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderNavItem;