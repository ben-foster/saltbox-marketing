/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Fire datalayer event when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  window.dataLayer.push({ event: 'gatsby-route-change' });
}

exports.onClientEntry = () => {
    window.addEventListener("load", () => {
      document.body.className = document.body.className.replace(/\bno-js\b/, "");
    });
}