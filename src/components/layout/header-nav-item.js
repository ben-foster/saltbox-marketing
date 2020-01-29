import React, { useState } from "react";
import { Link } from "gatsby"

const HeaderNavItem = ({ item }) => {
    const [ showSubNav, setShowSubNav ] = useState(false);
    return (
        <div className="relative">
            <Link
                to={item.url.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                className="p-4"
                key={item.title}
                onMouseEnter={() => item.child_items ? setShowSubNav(true) : null}
                onMouseLeave={() => item.child_items ? setShowSubNav(false) : null}
            >
                {item.title}
            </Link>
            { item.child_items && (
                <div 
                    className={`absolute flex flex-col w-64 py-3 mt-3 bg-white rounded-lg shadow ${ showSubNav ? "" : "hidden" }`}
                    onMouseEnter={() => item.child_items ? setShowSubNav(true) : null}
                    onMouseLeave={() => item.child_items ? setShowSubNav(false) : null}
                >
                    {item.child_items.map(childItem => (
                        <Link
                            to={childItem.url.replace("http://saltbox-wordpress.flywheelsites.com", "")}
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