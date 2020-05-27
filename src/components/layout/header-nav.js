import React from 'react';
import { StaticQuery, graphql } from "gatsby"

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
                        <HeaderNavItem item={item} />
                    ))}
                }
            />
        </div>
    );
};

export default HeaderNav;
