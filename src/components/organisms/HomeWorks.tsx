import React from "react"
const dayjs = require("dayjs")
import styled from "styled-components"
import { MAX_WIDTH, BASE_TEXT_COLOR, MULI } from "../../styles/.style"

import myLabels from "../../documents/home"

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

const HomeWorksSection = ({ data }: any) => {
  return (
    <StyledSection>
      <div>
        <StyledContent>
          {data.map((item: any, index: number) => {
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
