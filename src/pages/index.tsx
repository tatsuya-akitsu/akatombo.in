import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { WorksSummaryQuery } from "../../types/graphql-types"
const dayjs = require("dayjs")
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeIntroSection from "../components/organisms/HomeIntro"
import HomeAboutSection from "../components/organisms/HomeAbout"
import HomeWorksSection from "../components/organisms/HomeWorks"

type Props = {
  data: WorksSummaryQuery
}

const StyledBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fbfbfb;
`

const IndexPage: React.FC<Props> = () => {
  const backgroundEl = useRef<HTMLDivElement>(null)

  const data = useStaticQuery(graphql`
    query worksSummary {
      allMicrocmsWeb {
        edges {
          node {
            image {
              url
            }
            publishedAt
            tag
            url
          }
        }
      }
      allMicrocmsIllustrator {
        edges {
          node {
            image {
              url
            }
            publishedAt
            tag
          }
        }
      }
      allMicrocmsGraphic {
        edges {
          node {
            image {
              url
            }
            tag
            publishedAt
          }
        }
      }
      allMicrocmsPhotograph {
        edges {
          node {
            image {
              url
            }
            publishedAt
            tag
          }
        }
      }
    }
  `)

  const cmsData = data.allMicrocmsWeb.edges.concat(
    data.allMicrocmsIllustrator.edges,
    data.allMicrocmsGraphic.edges,
    data.allMicrocmsPhotograph.edges
  )
  const sortData = [...cmsData].sort(
    (a: any, b: any) => dayjs(b.node.publishedAt) - dayjs(a.node.publishedAt)
  )
  const initialState = sortData.slice(0, 12)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (backgroundEl && backgroundEl.current) {
      backgroundEl.current.style.top = `${window.innerHeight + 256}px`
      backgroundEl.current.style.height = `${window.innerHeight * 1.4}px`
    }
  })
  return (
    <Layout>
      <SEO title="Home" />
      <HomeIntroSection />
      <StyledBackground ref={backgroundEl}></StyledBackground>
      <HomeAboutSection />
      <HomeWorksSection data={state} />
    </Layout>
  )
}

export default IndexPage
