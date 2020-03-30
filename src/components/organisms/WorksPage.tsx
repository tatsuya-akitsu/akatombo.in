import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BASE_TEXT_COLOR, MULI } from "../../styles/.style"
import WorkItem from "../atoms/WorkItem"

import myLabels from "../../documents/works"

interface IState {
  state: Array<any>
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
  const [state, setState] = useState<IState[]>([])

  useEffect(() => {
    setState(data.all)
  }, [])

  const handleGetWork = (val: string) => {
    if (val === "all") {
      setState(data.all)
    } else if (val === "web") {
      setState(data.web)
    } else if (val === "illustration") {
      setState(data.illustration)
    } else if (val === "graphic") {
      setState(data.graphic)
    } else if (val === "photograph") {
      setState(data.photograph)
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
        {state.map((item: any, index: number) => {
          return <WorkItem key={index} data={item.node}></WorkItem>
        })}
      </ul>
    </section>
  )
}

export default WorksPage
