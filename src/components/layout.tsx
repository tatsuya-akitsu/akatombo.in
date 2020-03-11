import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from '../styles/globalStyle'

import Header from '../components/molecules/header'
import HomeIntroSection from '../components/organisms/HomeIntro'
import HomeAboutSection from '../components/organisms/HomeAbout'
import HomeWorksSection from '../components/organisms/HomeWorks'

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeIntroSection />
      <HomeAboutSection />
      <HomeWorksSection />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
