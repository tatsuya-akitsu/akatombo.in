import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { MixinInner } from '../../styles/style'
import { WorksQuery } from "../../../types/graphql-types"

import myLabels from '../../documents/home'

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

const HomeWorksSection: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query works {
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
    }
  `)

  console.log(data)

  return (
    <StyledSection>
      <div>
        <div className="p-tabs">
          <ul>
            {myLabels.works.tabs.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <img src={require(`../../images/home/icon_works_${item.icon}.svg`)} alt=""/>
                  <span>{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="p-content">
          <div className="p-content_box">
            {data.allMicrocmsGraphic.edges.map((item: any, index: number) => {
              return (
                <div className="contents_item" key={index}>
                  <img src={item.node.image.url} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

export default HomeWorksSection
