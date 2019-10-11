import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/saltbox-logo-horizontal-color.png"

const Header = ({ siteTitle }) => (
    <header className="w-full shadow">
        <div className="flex flex-row flex-wrap items-center py-8 container mx-auto">
            <div className="flex-grow-0">
                <Link to="/">  
                    <img 
                      className="w-32"
                      src={logo} 
                    />
                </Link>
            </div>
            <div className="flex-grow flex flex-row flex-wrap justify-end">  
                <Link 
				  to="/about"
				  className="p-4"
                >
                    The Team
                </Link>
				<Link 
                  to="/case-studies"
                  className="p-4"
                >
                    Case Studies
                </Link>
				<Link 
                  to="/case-studies"
                  className="p-4"
                >
                    Testimonials
                </Link>
            </div>
        </div>  
    </header>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header