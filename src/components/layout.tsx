import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/globalStyle"

import Header from "../components/molecules/header"

const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired,
}

export default Layout
