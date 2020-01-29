import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import HeaderNavItem from './header-nav-item';

const HeaderNav = () => {
    return (
        <div className="flex-grow flex flex-row flex-wrap justify-end">  
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
