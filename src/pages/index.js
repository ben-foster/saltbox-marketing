import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/hexagons.svg"

const IndexPage = () => {
  return ( 
    <Layout>
      <SEO title="Home" />

      <div 
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        <div className="container mx-auto flex flex-row flex-wrap items-center py-64 px-20">
          <div>
            <h1 className="text-5xl">Welcome to Saltbox Solutions</h1>
            <p className="text-2xl">Hello.</p>  
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default IndexPage
