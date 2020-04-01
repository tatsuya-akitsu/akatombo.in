import React from "react"
const dayjs = require("dayjs")
import styled from "styled-components"
import { BASE_TEXT_COLOR, MULI, EASE_IN_OUT_QUART } from "../../styles/.style"

import myLabels from "../../documents/common"

const StyledContentItem = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 6.4rem;
  width: 100%;

  img {
    display: block;
    width: 100%;
  }

  > a {
    display: block;
    position: relative;
    border: 6px solid transparent;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      border-style: solid;
      border-color: #d4b079;
      transition: ${EASE_IN_OUT_QUART};
      box-sizing: content-box;
    }

    &::before {
      width: 0;
      height: 100%;
      border-width: 6px 0 6px 0;
      top: -6px;
      left: -6px;
      transition-delay: 0.05s;
    }

    &::after {
      width: 100%;
      height: 0;
      border-width: 0 6px 0 6px;
      top: 0;
      left: -6px;
    }

    &:hover {
      &::before {
        width: calc(100% + 12px);
      }
      &::after {
        height: 100%;
      }
    }
  }
`

const StyledWorkInfo = styled.div`
  padding-top: 2rem;

  p:nth-of-type(1) {
    font-family: ${MULI};
    font-size: 1.6rem;
    letter-spacing: 0.067rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }

  p:nth-of-type(2) {
    padding-top: 1.8rem;
    font-family: ${MULI};
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
    line-height: 1.4;
    color: #717377;
  }

  h4 {
    padding-top: 0.8rem;
    font-family: ${MULI};
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: 0.078rem;
    line-height: 1.2;
  }
`

const WorkItem = ({ data }: any) => (
  <StyledContentItem>
    {data.url !== undefined ? (
      <a href={data.url} target="_blank">
        <img src={data.image.url} alt="" />
      </a>
    ) : (
      <img src={data.image.url} alt="" />
    )}
    <StyledWorkInfo>
      <p>{myLabels.tag.replace("tag", data.tag)}</p>
      <p>{dayjs(data.publishedAt).format("YYYY/MM/DD")}</p>
      {data.title !== undefined ? <h4>{data.title}</h4> : null}
    </StyledWorkInfo>
  </StyledContentItem>
)

export default WorkItem
