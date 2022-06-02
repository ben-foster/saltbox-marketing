module.exports = {
	siteMetadata: {
		title: `Saltbox Solutions`,
		description: `We help businesses get leads from search engines.`,
		author: `Saltbox Group LLC`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/saltbox-logo-square-color.svg`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: `Ubuntu`,
							variants: [`300`, `300i`, `400`, `700`],
							fontDisplay: `swap`,
						},
						{
							family: `Ubuntu Mono`,
							variants: [`400`],
							fontDisplay: `swap`,
						},
					],
				},
				// formatAgents: {
				//   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
				//   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
				//   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
				//   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
				// },
				//formats: ['woff2', 'woff'],
				useMinify: true,
				usePreload: true,
				//usePreconnect: false,
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
			  // You can add multiple tracking ids and a pageview event will be fired for all of them.
			  trackingIds: [
				"250572659", // Google Analytics / GA
				// "AW-CONVERSION_ID", // Google Ads / Adwords / AW
				// "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
			  ],
			  // This object gets passed directly to the gtag config command
			  // This config will be shared across all trackingIds
			//   gtagConfig: {
			// 	optimize_id: "OPT_CONTAINER_ID",
			// 	anonymize_ip: true,
			// 	cookie_expires: 0,
			//   },
			  // This object is used for configuration specific to this plugin
			  pluginConfig: {
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is also optional
				// respectDNT: true,
				// Avoids sending pageview hits from custom paths
				// exclude: [],
				// Defaults to https://www.googletagmanager.com
				// origin: "YOUR_SELF_HOSTED_ORIGIN",
			  },
			},
		  },
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "UA-175324349-1",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
				// Setting this parameter is optional
				// anonymize: true,
				// Setting this parameter is also optional
				// respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Enables Google Optimize using your container Id
				// optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				// Enables Google Optimize Experiment ID
				// experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
				// Set Variation ID. 0 for original 1,2,3....
				// variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
				// Defers execution of google analytics script after page load
				defer: true,
				// Any additional optional fields
				// sampleRate: 5,
				// siteSpeedSampleRate: 10,
				cookieDomain: "saltbox.solutions",
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				/*
				* The base URL of the WordPress site without the trailingslash and the protocol. This is required.
				* Example : 'demo.wp-api.org' or 'www.example-site.com'
				*/
				baseUrl: `wordpress.saltbox.solutions`,
				// The protocol. This can be http or https.
				protocol: `https`,
				// Indicates whether the site is hosted on wordpress.com.
				// If false, then the assumption is made that the site is self hosted.
				// If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
				// If your site is hosted on wordpress.org, then set this to false.
				hostingWPCOM: false,
				// If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
				// This feature is untested for sites hosted on wordpress.com.
				// Defaults to true.
				useACF: true,
				// Include specific ACF Option Pages that have a set post ID
				// Regardless if an ID is set, the default options route will still be retrieved
				// Must be using V3 of ACF to REST to include these routes
				// Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
				// routes with the ID option_page_1 and option_page_2
				// The IDs provided to this array should correspond to the `post_id` value when defining your
				// options page using the provided `acf_add_options_page` method, in your WordPress setup
				// Dashes in IDs will be converted to underscores for use in GraphQL
				acfOptionPageIds: [],
				auth: {
					// If auth.user and auth.pass are filled, then the source plugin will be allowed
					// to access endpoints that are protected with .htaccess.
					// htaccess_user: "your-htaccess-username",
					// htaccess_pass: "your-htaccess-password",
					// htaccess_sendImmediately: false,

					// If hostingWPCOM is true then you will need to communicate with wordpress.com API
					// in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
					// then add your clientId, clientSecret, username, and password here
					// Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
					// If two-factor authentication is enabled then you need to create an Application-Specific Password,
					// see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
					// wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
					// wpcom_app_clientId: "54793",
					// wpcom_user: "gatsbyjswpexample@gmail.com",
					// wpcom_pass: process.env.WORDPRESS_PASSWORD,

					// If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
					// or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
					// plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
					// jwt_user: process.env.JWT_USER,
					// jwt_pass: process.env.JWT_PASSWORD,
					// jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
				},
				// Set cookies that should be send with requests to WordPress as key value pairs
				cookies: {},
				// Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
				// It can help you debug specific API Endpoints problems.
				verboseOutput: false,
				// Set how many pages are retrieved per API request.
				perPage: 100,
				// Search and Replace Urls across WordPress content.
				// searchAndReplaceContentUrls: {
				//   sourceUrl: "https://source-url.com",
				//   replacementUrl: "https://replacement-url.com",
				// },
				// Set how many simultaneous requests are sent at once.
				concurrentRequests: 10,
				// Set WP REST API routes whitelists
				// and blacklists using glob patterns.
				// Defaults to whitelist the routes shown
				// in the example below.
				// See: https://github.com/isaacs/minimatch
				// Example:  `["/*/*/comments", "/yoast/**"]`
				// ` will either include or exclude routes ending in `comments` and
				// all routes that begin with `yoast` from fetch.
				// Whitelisted routes using glob patterns
				includedRoutes: [
					`**/posts`,
					`**/pages`,
					`**/media`,
					`**/categories`,
					`**/tags`,
					`**/taxonomies`,
					`**/menus`,
					`**/users`,
					`**/services`,
					`**/case_studies`,
					`**/testimonials`,
					`**/clients`,
					`**/whitepapers`,
					`**/team_members`,
					`**/pets`,
					`**/job_listings`,
				],
				// Blacklisted routes using glob patterns
				excludedRoutes: [],
				// Set this to keep media sizes.
				// This option is particularly useful in case you need access to
				// URLs for thumbnails, or any other media detail.
				// Defaults to false
				keepMediaSizes: false,
				// use a custom normalizer which is applied after the built-in ones.
				normalizer: function({ entities }) {
					return entities
				},
				// The normalizers option allows you to manipulate the array of internal
				// normalizers that are applied to entities after they're fetched
				// from WordPress.
				// You can add your own normalizers to this array by adding an object
				// that contains name and normalizer properties.
				// Name is the name of your normalizer, and normalizer is a function that
				// should return the array of entities that are passed to it.
				// This is useful if you need more control over the order of normalizers,
				// instead of your normalizer being applied after the built in normalizers (as is the case with the normalizer option).
				normalizers: normalizers => [
					...normalizers,
					{
						name: `nameOfTheFunction`,
						normalizer: function({ entities }) {
							// manipulate entities here
							return entities
						},
					},
				],
			},
		},
	],
}
