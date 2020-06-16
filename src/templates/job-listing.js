import React from 'react';

const JobListing = ({ data }) => {
    const jobListing = data.wordpressWpJobListing;
    
    return (
        <div>
            
        </div>
    );
};


export const query = graphql`
	query($id: String!) {
		wordpressWpJobListings(id: { eq: $id }) {
			id
			title
            content
			yoast_meta {
                yoast_wpseo_title
                yoast_wpseo_metadesc
            }
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
`

export default JobListing;