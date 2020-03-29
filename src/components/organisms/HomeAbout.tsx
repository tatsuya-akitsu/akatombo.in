import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MixinInner } from "../../styles/style"
import { MULI, BASE_WHITE_COLOR, EASE_IN_OUT_QUART } from "../../styles/.style"
import myLabels from "../../documents/home"
import dragonfly from "../../images/dragonfly.svg"

const StyledSection = styled.section`
  position: relative;
  padding: 9.6rem 0 8rem;
`

const StyledInner = styled.div`
  ${MixinInner};
  margin-left: auto;
  margin-right: 0;
  padding: 12rem 14rem;
  background: #2f2f38;
`

const StyledInfoBox = styled.div`
  width: 100%;
  z-index: 4;

  h2 {
    font-size: 0;
  }
  h2 > span,
  h2 > p {
    display: inline-block;
    vertical-align: text-top;
    color: ${BASE_WHITE_COLOR};
  }
  h2 > span {
    font-family: ${MULI};
    font-size: 2rem;
    letter-spacing: 0.4rem;
    font-weight: normal;
  }
  h2 > p {
    font-size: 6.4rem;
    letter-spacing: 0.016rem;
  }
`

const StyledInfoBody = styled.div`
  padding: 9.6rem 0 0 4rem;
  width: 64rem;

  span {
    display: block;
    padding-bottom: 1.6rem;
    font-family: ${MULI};
    font-size: 1.2rem;
    lettrer-spacing: .14rem;
    color: ${BASE_WHITE_COLOR};
  }

  p:nth-of-type(1) {
    padding-bottom: 3.2rem;
    font-family: ${MULI};
    font-size: 3.2rem;
    font-weight: 500;
    letter-spacing: .26rem;
    color: ${BASE_WHITE_COLOR};
  }

  p:nth-of-type(2) {
    padding-bottom: 6.4rem;
    font-size: 1.4rem;
    letter-spacing: 0.4rem;
    line-height: 1.6;
    color: ${BASE_WHITE_COLOR};

    a {
      color: #f03434;
    }
  }

  p + a {
    display: inline-block;
    position: relative;
    padding: 1.6rem 2.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.16rem;
    color: ${BASE_WHITE_COLOR};

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
`

const StyledThumbnail = styled.div`
  position: absolute;
  top: 50%;
  left: 84%;
  transform: translate(-50%, -50%);
  width: 64rem;

  img {
    display: block;
    width: 100%;
    opacity: .12;
  }
`

const HomeAboutSection: React.FC = () => {
  return (
    <StyledSection>
      <StyledInner>
        <StyledInfoBox>
          <h2>
            <span>{myLabels.about.number}</span>
            <p>{myLabels.about.title}</p>
          </h2>
          <StyledInfoBody>
            <span>{myLabels.about.position}</span>
            <p>{myLabels.about.name}</p>
            <p dangerouslySetInnerHTML={{ __html: myLabels.about.text }}></p>
            <Link to="/about">{myLabels.about.button}</Link>
          </StyledInfoBody>
        </StyledInfoBox>
        <StyledThumbnail>
          <img src={dragonfly} alt="" />
        </StyledThumbnail>
      </StyledInner>
    </StyledSection>
  )
}

export default HomeAboutSection
