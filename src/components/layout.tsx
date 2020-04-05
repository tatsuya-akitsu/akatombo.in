import React, { useEffect, useReducer, createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { WorksSummaryQuery } from "../../types/graphql-types"
const dayjs = require("dayjs")
import PropTypes from "prop-types"
import GlobalStyle from "../styles/globalStyle"

import Header from "../components/molecules/header"

type data = {
  data: WorksSummaryQuery
}

interface StateType {
  data: data | any
  all: Array<any>
  web: data | any
  illustration: data | any
  graphic: data | any
  photograph: data | any
}

export interface ActionType {
  type: "AJAX_GET_WORKS_DATA" | "HANDLE_GET_WORK_DATA"
  payload: StateType
}

const initialState = {
  data: [],
  all: [],
  web: [],
  illustration: [],
  graphic: [],
  photograph: [],
}

const arrSort = (arr: Array<any>) => {
  return [...arr].sort(
    (a: any, b: any) => dayjs(a.node.publishedAt) - dayjs(b.node.publishedAt)
  )
}

export const reducer: React.Reducer<StateType, ActionType> = (
  state: StateType,
  action: ActionType
) => {
  switch (action.type) {
    case "AJAX_GET_WORKS_DATA":
      return {
        ...state,
        data: [],
        all: arrSort(
          action.payload.data.allMicrocmsWeb.edges.concat(
            action.payload.data.allMicrocmsIllustrator.edges,
            action.payload.data.allMicrocmsGraphic.edges,
            action.payload.data.allMicrocmsPhotograph.edges
          )
        ).slice(0, 12),
        web: arrSort(action.payload.data.allMicrocmsWeb.edges),
        illustration: arrSort(action.payload.data.allMicrocmsIllustrator.edges),
        graphic: arrSort(action.payload.data.allMicrocmsGraphic.edges),
        photograph: arrSort(action.payload.data.allMicrocmsPhotograph.edges),
      }
    default:
      throw new Error()
  }
}

interface ContextProps {
  state: StateType
  action: ActionType
}

export const RouteContext = React.createContext<Partial<ContextProps>>({})

const Layout: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
            title
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
            title
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
            title
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
    dispatch({ type: "AJAX_GET_WORKS_DATA", payload: { ...state, data } })
  }, [])

  const _state = { state, dispatch }

  return (
    <>
      <GlobalStyle />
      <Header />
      <RouteContext.Provider value={_state}>
        <main>{children}</main>
      </RouteContext.Provider>
    </>
  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired,
}

export default Layout
