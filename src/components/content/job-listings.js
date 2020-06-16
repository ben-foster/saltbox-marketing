import React from "react";
import { StaticQuery, graphql } from "gatsby";

import JobListingPreview from "./job-listing-preview";

const JobListings = () => {
    return (
        <div className="flex flex-row flex-wrap">
            <StaticQuery
                query={ALL_JOB_LISTINGS_QUERY}
                render={data => {
                    let { edges: jobListings } = data.allWordpressWpJobListings
                    jobListings = jobListings.filter(({ node: jobListing }) => jobListing.title != "Do Not Delete")
                    if(jobListings.length == 0){
                        return <p className="py-20 w-full text-center">No Open Job Listings</p>;
                    } else {
                        return jobListings.map(({ node: jobListing }) => (
                            <JobListingPreview jobListing={jobListing} />
                        ))}
                    }
                }
            />
        </div>
    );
};

const ALL_JOB_LISTINGS_QUERY = graphql`
    query AllJobListingsQuery {
        allWordpressWpJobListings(sort: {order: DESC, fields: date}){
            edges {
                node {
                    title
                    excerpt
                    link
                    date(formatString: "MM/DD/YYYY")
                    featured_media {
                        alt_text
                        localFile {
                            publicURL
                            extension
                            childImageSharp {
                                fluid(maxWidth: 500, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                } 
            }
        }
    }
`

export default JobListings;