import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { RouteContext } from "../components/layout"
import HomeIntroSection from "../components/organisms/HomeIntro"
import HomeAboutSection from "../components/organisms/HomeAbout"
import HomeWorksSection from "../components/organisms/HomeWorks"

const StyledBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fbfbfb;
`

const IndexPage = () => {
  const backgroundEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (backgroundEl && backgroundEl.current) {
      backgroundEl.current.style.top = `${window.innerHeight + 200}px`
      backgroundEl.current.style.height = `${window.innerHeight * 1.4}px`
    }
  })
  return (
    <Layout>
      <SEO title="Home" />
      <HomeIntroSection />
      <StyledBackground ref={backgroundEl}></StyledBackground>
      <HomeAboutSection />
      <RouteContext.Consumer>
        {context => <HomeWorksSection data={context.state}></HomeWorksSection>}
      </RouteContext.Consumer>
    </Layout>
  )
}

export default IndexPage
