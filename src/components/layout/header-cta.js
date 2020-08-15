import React from "react";
import { StaticQuery, graphql } from "gatsby"

import HeaderNavItem from './header-nav-item';

const HeaderCTA = () => {
    return (
        <div className="flex flex-grow-0 flex-row flex-no-wrap justify-end">  
            <StaticQuery
                query={graphql`
                    query HeaderCTAQuery {
                        allWordpressMenusMenusItems(filter: {slug: {eq: "header-cta"}}) {
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
        </div>
    );
};

export default HeaderCTA;