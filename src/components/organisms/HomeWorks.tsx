import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
const dayjs = require("dayjs")
import styled from "styled-components"
import { MixinInner } from "../../styles/style"
import { BASE_TEXT_COLOR, BASE_WHITE_COLOR, RUBIK } from "../../styles/.style"
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
  background: #1c3144;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 1.4rem);
    height: calc(100% + 1.4rem);
    border: 2px solid #f0f3f4;
    z-index: -1;
  }

  &:nth-child(3n - 1) {
    margin-top: 11.2rem;
  }
  &:nth-child(3n) {
    margin-top: 19.2rem;
  }
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
    content: "";
    display: block;
    padding-top: 71%;
  }
`

const StyledWorkInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  p:nth-of-type(1) {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    font-family: ${RUBIK};
    font-size: 1.4rem;
    letter-spacing: 0.067rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
    background: ${BASE_WHITE_COLOR};
    border-radius: 2px;
  }

  p:nth-of-type(2) {
    padding-top: 1.6rem;
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
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
            const background: { [key: string]: string } = {
              backgroundImage: `url(${item.node.image.url})`,
            }

            return (
              <StyledContentItem key={index}>
                <StyledImage style={background}></StyledImage>
                <StyledWorkInfo>
                  <p>{item.node.tag}</p>
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
