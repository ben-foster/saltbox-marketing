import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const FooterNavOne = () => {
    return (
        <StaticQuery
            query={graphql`
                query FooterOneQuery {
                    allWordpressMenusMenusItems(filter: {slug: {eq: "footer-one"}}) {
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
                    <Link
                        to={item.url.replace("https://wordpress.saltbox.solutions", "")}
                        className="w-full p-3 text-sm text-white text-left font-light hover:text-gray-200 focus:text-gray-200"
                        key={item.title}
                    >
                        {item.title}
                    </Link>
                ))}
            }
        />
    );
};

export default FooterNavOne;