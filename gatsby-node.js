/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
		{
			allWordpressPage {
				edges {
					node {
						id
						path
						slug
						status
					}
				}
			}
			allWordpressPost {
				edges {
					node {
						id
						slug
						path
						status
					}
				}
			}
			allWordpressWpServices {
				edges {
					node {
						id
						path
						status
					}
				}
			}
			allWordpressWpCaseStudies {
				edges {
					node {
						id
						path
						slug
						status
					}
				}
			}
			allWordpressWpWhitepapers {
				edges {
					node {
						id
						path
						status
					}
				}
			}
		}
  `)

  	// Check for any errors
	if (result.errors) {
		throw new Error(result.errors)
	}

	// Access query results via object destructuring
	const { 
		allWordpressPage, 
		allWordpressPost, 
		allWordpressWpServices, 
		allWordpressWpCaseStudies, 
		allWordpressWpWhitepapers, 
	} = result.data

	const pageTemplate = path.resolve(`./src/templates/page.js`)
	const homeTemplate = path.resolve(`./src/templates/index.js`)
	const contactTemplate = path.resolve(`./src/templates/contact.js`)

	allWordpressPage.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;

		// Check for specific pages, otherwise apply generic page template
		if(path === "/") {
			createPage({
				path,
				component: slash(homeTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/contact") {
			createPage({
				path,
				component: slash(contactTemplate),
				context: { ...edge.node },
			})
		} else {
			createPage({
				path,
				component: slash(pageTemplate),
				context: { ...edge.node },
			})
		}
  	})

	const postTemplate = path.resolve(`./src/templates/post.js`)
	
	allWordpressPost.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;

		createPage({
			path,
			component: slash(postTemplate),
			context: { ...edge.node },
		})
	})

	const serviceTemplate = path.resolve(`./src/templates/service.js`)

	allWordpressWpServices.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;
		
		createPage({
			path,
			component: slash(serviceTemplate),
			context: { ...edge.node },
		})
	})

	const caseStudyTemplate = path.resolve(`./src/templates/case-study.js`)

	allWordpressWpCaseStudies.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;
		
		createPage({
			path,
			component: slash(caseStudyTemplate),
			context: { ...edge.node },
		})
	})

	const whitepaperTemplate = path.resolve(`./src/templates/whitepaper.js`)

	allWordpressWpWhitepapers.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;
		
		createPage({
			path,
			component: slash(whitepaperTemplate),
			context: { ...edge.node },
		})
	})
}