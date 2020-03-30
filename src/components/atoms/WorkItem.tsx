import React from 'react'
const dayjs = require('dayjs')
import styled from 'styled-components'
import { BASE_TEXT_COLOR, MULI } from '../../styles/.style'

import myLabels from '../../documents/common'

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
    </StyledWorkInfo>
  </StyledContentItem>
)

export default WorkItem
