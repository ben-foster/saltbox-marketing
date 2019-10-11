import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
    <footer className="py-8 flex flex-row flex-wrap items-center justify-center">
        <div className="container mx-auto text-center">
            © {new Date().getFullYear()} Saltbox Group LLC
        </div>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer