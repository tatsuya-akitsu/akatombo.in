import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { WorksDetailQuery } from "../../types/graphql-types"
const dayjs = require("dayjs")

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorksPage from "../components/organisms/WorksPage"

type Props = {
  data: WorksDetailQuery
}

type initialState = Readonly<{
  all: Array<any>
  web: Array<any>
  illustration: Array<any>
  graphic: Array<any>
  photograph: Array<any>
}>

const initialData: initialState = {
  all: [],
  web: [],
  illustration: [],
  graphic: [],
  photograph: [],
}

const SecondPage: React.FC<Props> = () => {
  const [state, setState] = useState([initialData])

  const data = useStaticQuery(graphql`
    query worksDetail {
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
    const allData = data.allMicrocmsWeb.edges.concat(
      data.allMicrocmsIllustrator.edges,
      data.allMicrocmsGraphic.edges,
      data.allMicrocmsPhotograph.edges
    )

    const sortable = ({ arr }: any) => {
      return [...arr].sort(
        (a: any, b: any) =>
          dayjs(b.node.publishedAt) - dayjs(a.node.publishedAt)
      )
    }

    const newState: initialState = {
      all: sortable(allData),
      web: sortable(data.allMicrocmsWeb.edges),
      illustration: sortable(data.allMicrocmsIllustrator.edges),
      graphic: sortable(data.allMicrocmsGraphic.edges),
      photograph: sortable(data.allMicrocmsPhotograph.edges),
    }

    setState([...state, newState])
  }, [])
  return (
    <Layout>
      <SEO title="Works" />
      <WorksPage data={state}></WorksPage>
    </Layout>
  )
}

export default SecondPage
