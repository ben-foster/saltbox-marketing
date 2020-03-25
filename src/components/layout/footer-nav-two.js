import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const FooterNavTwo = () => {
    return (
        <StaticQuery
            query={graphql`
                query FooterTwoQuery {
                    allWordpressMenusMenusItems(filter: {slug: {eq: "footer-two"}}) {
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
                        to={item.url.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                        className="p-3 text-sm text-white font-normal hover:text-gray-200 focus:text-gray-200"
                        key={item.title}
                    >
                        {item.title}
                    </Link>
                ))}
            }
        />
    );
};

export default FooterNavTwo;