import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { MixinInner } from "../../styles/style"
import { BASE_TEXT_COLOR, RUBIK } from "../../styles/.style"
import { WorksQuery } from "../../../types/graphql-types"

import myLabels from "../../documents/home"

type Props = {
  data: WorksQuery
}

const StyledSection = styled.div`
  padding: 6.4rem 0;
  width: 100%;

  > div {
    ${MixinInner}
  }
`

const StyledTabs = styled.div`
  border-bottom: 2px solid #f0f3f4;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  li {
    cursor: pointer;
    margin-right: 3.2rem;
    padding: 1.2rem 0;
    font-size: 0;
  }

  li > img,
  li > span {
    display: inline-block;
    vertical-align: middle;
  }

  li > img {
    margin-right: 1.2rem;
    width: 2.4rem;
  }
  li > span {
    font-family: ${RUBIK};
    font-size: 2rem;
    letter-spacing: 0.13rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }
`

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 4.8rem;
`

const StyledContentItem = styled.div`
  position: relative;
  padding: 4.2rem 2.8rem;
  width: calc(33.3% - 1.6rem);
  height: 46rem;
  background: #1C3144;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 1.4rem);
    height: calc(100% + 1.4rem);
    border: 2px solid #F0F3F4;
    z-index: -1;
  }

  &:nth-child(3n - 1) { margin-top: 8rem; }
  &:nth-child(3n) { margin-top: 16rem; }
`

const StyledImage = styled.div`
  position: absolute;
  top: -3.2rem;
  left: -3.2rem;
  width: 90%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
`

const HomeWorksSection: React.FC<Props> = () => {
  const [state, setWorksData] = useState({
    web: [],
    illustration: [],
    graphic: [],
    photograph: [],
  })

  const data = useStaticQuery(graphql`
    query works {
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

  useEffect(() => {
    const newState = {
      web: data.allMicrocmsWeb.edges,
      illustration: data.allMicrocmsIllustrator.edges,
      graphic: data.allMicrocmsGraphic.edges,
      photograph: data.allMicrocmsPhotograph.edges,
    }
    setWorksData(Object.assign({}, newState))
  }, [])

  // const handleGetWorks = (val: String) => {
  //   switch (val) {
  //     case "web":
  //       getWebData()
  //     case "Illustration":
  //       getIllustrationData()
  //     case "Graphic":
  //       getGraphicData()
  //     case "Photograph":
  //       getPhotographData()
  //     default:
  //       return
  //   }
  // }

  return (
    <StyledSection>
      <div>
        <StyledTabs>
          <ul>
            {myLabels.works.tabs.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <img
                    src={require(`../../images/home/icon_works_${item.icon}.svg`)}
                    alt=""
                  />
                  <span>{item.label}</span>
                </li>
              )
            })}
          </ul>
        </StyledTabs>
        <StyledContent>
          {state.web.map((item: any, index: number) => {
            const background: { [key: string]: string } = {
              backgroundImage: `url(${item.node.image.url})`,
            }

            return (
              <StyledContentItem key={index}>
                <StyledImage style={background}></StyledImage>
                <div>
                  <p>{item.node.tag}</p>
                  <p>{item.node.publishedAt}</p>
                </div>
              </StyledContentItem>
            )
          })}
        </StyledContent>
      </div>
    </StyledSection>
  )
}

export default HomeWorksSection
