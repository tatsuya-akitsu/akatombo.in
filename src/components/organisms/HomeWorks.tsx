import React from "react"
import { Link } from "gatsby"
const dayjs = require("dayjs")
import styled from "styled-components"
import {
  MAX_WIDTH,
  BASE_TEXT_COLOR,
  EASE_IN_OUT_QUART,
} from "../../styles/.style"

import myLabels from "../../documents/home"

import WorkItem from "../atoms/WorkItem"

const StyledSection = styled.div`
  padding: 6.4rem 0;
  width: 100%;

  > div {
    position: relative;
    margin: 0;
    padding: 0 32px;
    width: 100%;
    max-width: ${MAX_WIDTH}px;

    > a {
      display: inline-block;
      position: relative;
      padding: 1.6rem 2.8rem;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.16rem;
      color: ${BASE_TEXT_COLOR};

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        display: inline-block;
        vertical-align: middle;
        height: 0.2rem;
        border-radius: 1px;
        transition: ${EASE_IN_OUT_QUART};
      }

      &::before {
        width: 100%;
        background: #d4b079;
      }

      &::after {
        width: 0%;
        background: #f03434;
      }

      &:hover {
        &::before {
          width: 0%;
          transition: ${EASE_IN_OUT_QUART};
        }

        &::after {
          width: 100%;
          transition: ${EASE_IN_OUT_QUART};
        }
      }
    }
  }
`

const StyledContent = styled.div`
  column-count: 3;
  column-gap: 3.2rem;
  margin-top: 8.2rem;
`

const HomeWorksSection = ({ data }: any) => {
  return (
    <StyledSection>
      <div>
        <StyledContent>
          {data.map((item: any, index: number) => {
            return <WorkItem key={index} data={item.node}></WorkItem>
          })}
        </StyledContent>
        <Link to="/works">{myLabels.button}</Link>
      </div>
    </StyledSection>
  )
}

export default HomeWorksSection
