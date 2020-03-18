import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from '../styles/globalStyle'

import Header from '../components/molecules/header'
import HomeIntroSection from '../components/organisms/HomeIntro'
import HomeAboutSection from '../components/organisms/HomeAbout'
import HomeWorksSection from '../components/organisms/HomeWorks'

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeIntroSection />
      <HomeAboutSection />
      <HomeWorksSection />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
