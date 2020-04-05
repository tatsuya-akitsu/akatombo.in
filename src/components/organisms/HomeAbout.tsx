import React from "react"
import styled from "styled-components"

import { MixinInner } from "../../styles/style"
import { MULI, BASE_TEXT_COLOR, EASE_IN_OUT_QUART } from "../../styles/.style"
import myLabels from "../../documents/home"
import HomeAboutItems from "../molecules/HomeAboutItems"
import dragonfly from "../../images/dragonfly.svg"

const StyledSection = styled.section`
  position: relative;
  padding: 6.4rem 0 20rem;
`

const StyledInner = styled.div`
  ${MixinInner};
  margin-left: auto;
  margin-right: 0;
`

const StyledThumbnail = styled.div`
  position: absolute;
  top: 32%;
  left: 14%;
  transform: translate(-50%, -50%);
  width: 64rem;

  img {
    display: block;
    width: 100%;
    opacity: .12;
  }
`

const StyledInfoBox = styled.div`
  width: 100%;
  z-index: 4;

  h2 {
    font-size: 0;
    text-align: right;
  }
  h2 > span,
  h2 > p {
    display: inline-block;
    vertical-align: text-top;
    color: ${BASE_TEXT_COLOR};
  }
  h2 > span {
    font-family: ${MULI};
    font-size: 2rem;
    letter-spacing: 0.4rem;
    font-weight: normal;
  }
  h2 > p {
    font-size: 5.6rem;
    letter-spacing: 0.016rem;
  }
`

const StyledInfoBody = styled.div`
  padding-top: 6.4rem;

  span {
    display: block;
    padding-bottom: 1.6rem;
    font-family: ${MULI};
    font-size: 1.2rem;
    lettrer-spacing: .14rem;
    color: ${BASE_TEXT_COLOR};
  }

  p:nth-of-type(1) {
    padding-bottom: 3.2rem;
    font-family: ${MULI};
    font-size: 3.2rem;
    font-weight: 500;
    letter-spacing: .26rem;
    color: ${BASE_TEXT_COLOR};
  }

  p:nth-of-type(2) {
    font-size: 1.4rem;
    letter-spacing: 0.4rem;
    line-height: 1.6;
    color: ${BASE_TEXT_COLOR};

    a {
      color: #f03434;
    }
  }
`

const HomeAboutSection: React.FC = () => {
  return (
    <StyledSection>
      <StyledInner>
        <StyledThumbnail>
          <img src={dragonfly} alt="" />
        </StyledThumbnail>
        <StyledInfoBox>
          <h2>
            <span>{myLabels.about.number}</span>
            <p>{myLabels.about.title}</p>
          </h2>
          <StyledInfoBody>
            <span>{myLabels.about.position}</span>
            <p>{myLabels.about.name}</p>
            <p dangerouslySetInnerHTML={{ __html: myLabels.about.text }}></p>
            <HomeAboutItems></HomeAboutItems>
          </StyledInfoBody>
        </StyledInfoBox>
      </StyledInner>
    </StyledSection>
  )
}

export default HomeAboutSection
