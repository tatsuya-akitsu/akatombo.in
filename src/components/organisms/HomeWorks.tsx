import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
const dayjs = require("dayjs")
import styled from "styled-components"
import {
  MAX_WIDTH,
  BASE_TEXT_COLOR,
  BASE_WHITE_COLOR,
  MULI,
} from "../../styles/.style"
import { WorksQuery } from "../../../types/graphql-types"

import myLabels from "../../documents/home"

type Props = {
  data: WorksQuery
}

interface IAll {
  all: Array<any>
}

interface IWork {
  work: Array<any>
}

const StyledSection = styled.div`
  padding: 6.4rem 0;
  width: 100%;

  > div {
    position: relative;
    margin: 0;
    padding: 0 32px;
    width: 100%;
    max-width: ${MAX_WIDTH}px;
  }
`

const StyledTabs = styled.div`
  border-bottom: 1px solid ${BASE_TEXT_COLOR};

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 3.2rem;
  }

  li {
    cursor: pointer;
    margin-right: 3.2rem;
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
    font-family: ${MULI};
    font-size: 1.6rem;
    letter-spacing: 0.13rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }
`

const StyledContent = styled.div`
  column-count: 3;
  column-gap: 3.2rem;
  margin-top: 8.2rem;
`

const StyledContentItem = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 6.4rem;
  width: 100%;

  img {
    display: block;
    width: 100%;
  }
`

const StyledWorkInfo = styled.div`
  p:nth-of-type(1) {
    padding-top: 2rem;
    font-family: ${MULI};
    font-size: 1.4rem;
    letter-spacing: 0.067rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }

  p:nth-of-type(2) {
    padding-top: 1.2rem;
    font-family: ${MULI};
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
    line-height: 1.4;
    color: #717377;
  }
`

const HomeWorksSection: React.FC<Props> = () => {
  const [state, setWorksData] = useState({
    web: [],
    illustration: [],
    graphic: [],
    photograph: [],
  })
  const [initWork, setInitWork] = useState<IWork[]>([])
  const [allWork, setAllWork] = useState<IAll[]>([])

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
    const cmsData = data.allMicrocmsWeb.edges.concat(
      data.allMicrocmsIllustrator.edges,
      data.allMicrocmsGraphic.edges,
      data.allMicrocmsPhotograph.edges
    )
    console.log(cmsData)
    const sortData = [...cmsData].sort(
      (a: any, b: any) => dayjs(b.node.publishedAt) - dayjs(a.node.publishedAt)
    )
    const allData = sortData.slice(0, 12)
    setAllWork(allData)
    const newState = {
      web: data.allMicrocmsWeb.edges,
      illustration: data.allMicrocmsIllustrator.edges,
      graphic: data.allMicrocmsGraphic.edges,
      photograph: data.allMicrocmsPhotograph.edges,
    }
    setWorksData(Object.assign({}, newState))
    setInitWork(data.allMicrocmsWeb.edges)
  }, [])

  const handleGetWorks = (val: string) => {
    if (val === "web") {
      setInitWork(state.web)
    } else if (val === "illustration") {
      setInitWork(state.illustration)
    } else if (val === "graphic") {
      setInitWork(state.graphic)
    } else if (val === "photograph") {
      setInitWork(state.photograph)
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
          {allWork.map((item: any, index: number) => {
            return (
              <StyledContentItem key={index}>
                {item.node.url !== undefined ? (
                  <a href={item.node.url} target="_blank">
                    <img src={item.node.image.url} alt="" />
                  </a>
                ) : (
                  <img src={item.node.image.url} alt="" />
                )}
                <StyledWorkInfo>
                  <p>{myLabels.works.label.replace("tag", item.node.tag)}</p>
                  <p>{dayjs(item.node.publishedAt).format("YYYY/MM/DD")}</p>
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
