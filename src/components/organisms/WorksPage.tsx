import React, { useState, useEffect } from "react"
const dayjs = require("dayjs")
import styled from "styled-components"
import { BASE_TEXT_COLOR, MULI } from "../../styles/.style"

import myLabels from "../../documents/works"

type initialType = Readonly<{ state: Array<any> }>
const initialState: initialType = {
  state: [],
}

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

const WorksPage = ({ data }: any) => {
  const [state, setState] = useState([initialState])

  useEffect(() => {
    setState([...state, data.all])
  })

  const handleGetWork = (val: string) => {
    if (val === "web") {
      setState([...state, data.web])
    } else if (val === "illustration") {
      setState([...state, data.illustration])
    } else if (val === "graphic") {
      setState([...state, data.graphic])
    } else if (val === "photograph") {
      setState([...state, data.photograph])
    }
  }

  return (
    <section>
      <StyledTabs>
        <ul>
          {myLabels.tabs.map((item: any, index: number) => {
            return (
              <li key={index} onClick={() => handleGetWork(item.target)}>
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
      <ul>
        {state.map((item: any, index: number) => (
          <div>
            {item.node.url !== undefined ? (
              <a href={item.node.url} target="_blank">
                <img src={item.node.image.url} alt="" />
              </a>
            ) : (
              <img src={item.node.image.url} alt="" />
            )}
            <p>{myLabels.label.replace("{tag}", item.node.tag)}</p>
            <p>{dayjs(item.node.publishedAt).format("YYYY/MM/DD")}</p>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default WorksPage
