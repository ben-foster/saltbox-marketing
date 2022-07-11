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
						slug
						status
					}
				}
			}
			allWordpressWpTeamMembers {
				edges {
					node {
						id
						path
						slug
						status
					}
				}
			} allWordpressMenusMenusItems {
				edges{
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
		allWordpressWpTeamMembers,
	} = result.data

	const homeTemplate = path.resolve(`./src/templates/index.js`);
	const contactTemplate = path.resolve(`./src/templates/contact.js`);
	const blogTemplate = path.resolve(`./src/templates/blog.js`);
	const privacyPolicyTemplate = path.resolve(`./src/templates/privacy-policy.js`);
	const aboutTemplate = path.resolve(`./src/templates/about.js`);
	const careersTemplate = path.resolve(`./src/templates/careers.js`);
	const pageTemplate = path.resolve(`./src/templates/page.js`);
	const postTemplate = path.resolve(`./src/templates/post.js`);
	const serviceTemplate = path.resolve(`./src/templates/service.js`)
	const teamMemberTemplate = path.resolve(`./src/templates/team-member.js`)
	const thankYouTemplate = path.resolve(`./src/templates/thank-you.js`)

	allWordpressPage.edges.forEach(edge => {
		const path = edge.node.path;
		// delete path from node so it doesn't get passed to page context (namespace issue - 'path' already exists on context)
		delete edge.node.path;
		// Check for specific pages, otherwise apply generic page template
		if(path === "/") {
			createPage({
				path,
				component: slash(homeTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/contact/") {
			createPage({
				path,
				component: slash(contactTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/blog/") {
			createPage({
				path,
				component: slash(blogTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/privacy-policy/") {
			createPage({
				path,
				component: slash(privacyPolicyTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/about/") {
			createPage({
				path,
				component: slash(aboutTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/careers/") {
			createPage({
				path,
				component: slash(careersTemplate),
				context: { ...edge.node },
			})
		} else if(path === "/thank-you/") {
			createPage({
				path,
				component: slash(thankYouTemplate),
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
	
	allWordpressPost.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;

		createPage({
			path,
			component: slash(postTemplate),
			context: { ...edge.node },
		})
	})

	allWordpressWpServices.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;
		
		createPage({
			path,
			component: slash(serviceTemplate),
			context: { ...edge.node },
		})
	})

	allWordpressWpTeamMembers.edges.forEach(edge => {
		const path = edge.node.path;
		delete edge.node.path;
		
		createPage({
			path,
			component: slash(teamMemberTemplate),
			context: { ...edge.node },
		})
	})
}