import React from "react"
const dayjs = require("dayjs")
import styled from "styled-components"
import { BRAND_COLOR, MULI, EASE_IN_OUT_QUART } from "../../styles/.style"

import myLabels from "../../documents/common"

const StyledContentItem = styled.div`
  margin-bottom: 6.4rem;
  width: 100%;
`

const StyledContentHeader = styled.div`
  position: relative;
`

const StyledContentImage = styled.div`
  position: relative;

  a,
  img {
    display: block;
    padding-top: 4rem;
    width: calc(100% - 3.8rem);
  }

  a > img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 6.8rem;
    right: -2.6rem;
    transform: rotate(90deg);
    font-family: ${MULI};
    font-size: 1.2rem;
    letter-spacing: 0.06rem;
    color: #8798ad;
  }
`

const StyledContentSolid = styled.div`
  position: absolute;
  top: 0;
  left: .8;
  transform: rotate(45deg);

  span {
    display: block;
    position: relative;
    transform-origin: top;
    margin: 0 auto 0.6rem;
    width: 0.1rem;
    height: 0.1rem;
    background: ${BRAND_COLOR};
    border-radius: 0.2rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${BRAND_COLOR};
    }
  }

  span:first-child {
    position: relative;
    transform: scaleY(1);
    width: 0.1rem;
    height: 9rem;

    &::before {
      transform-origin: top;
    }
  }
`

const StyledContentBody = styled.div`
  padding-top: 2.4rem;

  p,
  h4 {
    font-family: ${MULI};
  }

  p {
    font-size: 1.2rem;
    letter-spacing: 0.06rem;
    color: #717377;
  }

  h4 {
    padding-top: 0.8rem;
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: 0.08rem;
    line-height: 1.2;
  }
`

const WorkItem = ({ data }: any) => (
  <StyledContentItem>
    <StyledContentHeader>
      <StyledContentImage>
        {data.url !== undefined ? (
          <a href={data.url} target="_blank">
            <img src={data.image.url} alt="" />
          </a>
        ) : (
          <img src={data.image.url} alt="" />
        )}
        <p>{myLabels.tag.replace("tag", data.tag)}</p>
      </StyledContentImage>
      <StyledContentSolid>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StyledContentSolid>
    </StyledContentHeader>
    <StyledContentBody>
      <p>{dayjs(data.publishedAt).format("YYYY/MM/DD")}</p>
      {data.title !== undefined ? <h4>{data.title}</h4> : null}
    </StyledContentBody>
  </StyledContentItem>
)

export default WorkItem
