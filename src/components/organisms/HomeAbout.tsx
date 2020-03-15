import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MixinInner } from '../../styles/style'
import { RUBIK, BASE_TEXT_COLOR, BASE_WHITE_COLOR, BRAND_COLOR } from '../../styles/.style'
import myLabels from '../../documents/home'
import LogoBluePrint from '../../images/blueprint.svg'

const StyledSection = styled.section`
  position: relative;
  padding: 9.6rem 0 8rem;
`

const StyledInner = styled.div`
  ${MixinInner};
  margin-left: auto;
  margin-right: 0;
  padding: 16rem 14rem;
  background: #3fa9ac;
`

const StyledInfoBox = styled.div`
  position: absolute;
  top: 16rem;
  left: 14rem;
  width: 100%;
  z-index: 4;

  h2 {
    font-size: 0;
  }
  h2 > span {
    display: inline-block;
    vertical-align: text-top;
    font-family: ${RUBIK};
  }
  h2 > span:nth-of-type(1) {
    font-size: 2rem;
    letter-spacing: .13rem;
    font-weight: normal;
    color: ${BASE_WHITE_COLOR};
  }
  h2 > span:nth-of-type(2) {
    font-size: 8rem;
    letter-spacing: .626rem;
    color: ${BASE_TEXT_COLOR};
  }

  > div, > p { padding-left: 4rem; }

  > div {
    padding-top: 4.8rem;

    span {
      display: block;
      padding-bottom: 2.4rem;
      font-family: ${RUBIK};
      font-size: 1.2rem;
      color: ${BASE_WHITE_COLOR};
    }

    p {
      padding-bottom: 2rem;
      font-family: ${RUBIK};
      font-size: 3.2rem;
      font-weight: 500;
      color: ${BASE_TEXT_COLOR};
    }
  }

  > p {
    padding-bottom: 3.6rem;
    font-size: 1.4rem;
    letter-spacing: .067rem;
    line-height: 1.5;

    a {
      color: ${BRAND_COLOR};
    }
  }

  > p + a {
    display: inline-block;
    margin-left: 4rem;
    padding: 1.6rem 3.6rem;
    font-family: ${RUBIK};
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: .16rem;
    color: ${BASE_TEXT_COLOR};
    background: ${BASE_WHITE_COLOR};
    border-radius: 3px;
  }
`

const StyledThumbnail = styled.div`
  position: absolute;
  top: 16rem;
  right: -5rem;
  width: 60%;
  z-index: 2;
`

const HomeAboutSection: React.FC = () => {
  const thumbnailEl = useRef<HTMLImageElement>(null)
  const innerEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (thumbnailEl && thumbnailEl.current && innerEl && innerEl.current) {
        innerEl.current.style.height = `${thumbnailEl.current.offsetHeight + 160+ 160}px`
      }
    }, 100)
  }, [])

  return (
    <StyledSection>
      <StyledInner ref={innerEl}>
        <StyledInfoBox>
          <h2>
            <span>{myLabels.about.number}</span>
            <span>{myLabels.about.title}</span>
          </h2>
          <div>
            <span>{myLabels.about.position}</span>
            <p>{myLabels.about.name}</p>
          </div>
          <p dangerouslySetInnerHTML={{ __html: myLabels.about.text }}></p>
          <Link to="/about">{myLabels.about.button}</Link>
        </StyledInfoBox>
        <StyledThumbnail>
          <img src={LogoBluePrint} alt="" ref={thumbnailEl} />
        </StyledThumbnail>
      </StyledInner>
    </StyledSection>
  )
}

export default HomeAboutSection
