import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"

import HeaderNavItem from './header-nav-item';

const HeaderNav = () => {
    return (
        <div className="flex flex-col md:flex-row flex-grow justify-end w-full md:w-auto">  
            <StaticQuery
                query={graphql`
                    query HeaderQuery {
                        allWordpressMenusMenusItems(filter: {slug: {eq: "header"}}) {
                            edges {
                                node {
                                    slug
                                    name
                                    items {
                                        title
                                        url
                                        child_items {
                                            title
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
                render={data => {
                    const { items } = data.allWordpressMenusMenusItems.edges[0].node
                    return items.map(item => (
                        <HeaderNavItem item={item} key={item.slug} />
                    ))}
                }
            />
            <div className="relative w-full md:w-auto bg-blue-150">
                <Link
                    to="/services/pay-per-click-advertising/"
                    className="flex w-full md:hidden items-center justify-center bg-blue-150 md:bg-transparent md:w-auto p-4 text-white font-normal text-sm"
                >
                    PPC
                </Link>
                <Link
                    to="/services/search-engine-optimization/"
                    className="flex w-full md:hidden items-center justify-center bg-blue-150 md:bg-transparent md:w-auto p-4 text-white font-normal text-sm"
                >
                    SEO
                </Link>
                <Link
                    to="/about/"
                    className="flex w-full md:hidden items-center justify-center bg-blue-150 md:bg-transparent md:w-auto p-4 text-white font-normal text-sm"
                >
                    Company
                </Link>
                <Link
                    to="/blog/"
                    className="flex w-full md:hidden items-center justify-center bg-blue-150 md:bg-transparent md:w-auto p-4 text-white font-normal text-sm"
                >
                    Blog
                </Link>
                <Link
                    to="/contact/"
                    className="flex w-full md:hidden items-center justify-center bg-blue-150 md:bg-transparent md:w-auto p-4 text-white font-normal text-sm"
                >
                    Get In Touch
                </Link>
            </div>
        </div>
    );
};

export default HeaderNav;
