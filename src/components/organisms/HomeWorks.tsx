import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { MixinInner } from "../../styles/style"
import { BASE_TEXT_COLOR, BASE_WHITE_COLOR, RUBIK } from "../../styles/.style"
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
  margin: 3.2rem 0 0 3.2rem;
  padding: 4.2rem 2.8rem;
  width: calc(30% - 1.6rem);
  height: 32rem;
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

  &:nth-child(3n - 1) { margin-top: 11.2rem; }
  &:nth-child(3n) { margin-top: 19.2rem; }
`

const StyledImage = styled.div`
  position: absolute;
  top: -3.2rem;
  left: -3.2rem;
  width: 90%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
`

const StyledWorkInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  p:nth-of-type(1) {
    display: inline-block;
    padding: .8rem 1.6rem;
    font-family: ${RUBIK};
    font-size: 1.6rem;
    letter-spacing: .067rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
    background: ${BASE_WHITE_COLOR};
    border-radius: 2px;
  }

  p:nth-of-type(2) {
    padding-top: 1.6rem;
    font-size: 1.2rem:
    letter-spacing: .04rem;
    line-height: 1.4;
    color: ${BASE_WHITE_COLOR};
  }
`

const HomeWorksSection: React.FC<Props> = () => {
  const [state, setWorksData] = useState({
    web: [],
    illustration: [],
    graphic: [],
    photograph: [],
  })
  const [initWork, setInitWork] = useState({
    work: [],
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
    const initWork = {
      work: data.allMicrocmsWeb.edges,
    }
    setInitWork(Object.assign({}, initWork))
  }, [])

  const handleGetWorks = (val: string) => {
    if (val === "web") {
      const newWork = {
        work: state.web,
      }
      setInitWork(Object.assign({}, newWork))
    } else if (val === "illustration") {
      const newWork = {
        work: state.illustration,
      }
      setInitWork(Object.assign({}, newWork))
    } else if (val === "graphic") {
      const newWork = {
        work: state.graphic,
      }
      setInitWork(Object.assign({}, newWork))
    } else if (val === "photograph") {
      const newWork = {
        work: state.photograph,
      }
      setInitWork(Object.assign({}, newWork))
    }
  }

  return (
    <StyledSection>
      <div>
        <StyledTabs>
          <ul>
            {myLabels.works.tabs.map((item: any, index: number) => {
              return (
                <li key={index} onClick={() => handleGetWorks(item.target)}>
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
          {initWork.work.map((item: any, index: number) => {
            const background: { [key: string]: string } = {
              backgroundImage: `url(${item.node.image.url})`,
            }

            return (
              <StyledContentItem key={index}>
                <StyledImage style={background}></StyledImage>
                <StyledWorkInfo>
                  <p>{item.node.tag}</p>
                  <p>{item.node.publishedAt}</p>
                </StyledWorkInfo>
              </StyledContentItem>
            )
          })}
        </StyledContent>
      </div>
    </StyledSection>
  )
}

export default HomeWorksSection
