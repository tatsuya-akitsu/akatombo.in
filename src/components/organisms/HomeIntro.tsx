import React from "react"
import styled from "styled-components"
import { MAX_WIDTH } from "../../styles/.style"
import HomeTextPhrase from "../atoms/HomeTextPhrase"
import HomeTextPath from "../atoms/HomeTextPath"
import HeaderThumbnail from "../atoms/thumbnail"

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: ${window.innerHeight}px;
`

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: ${window.innerHeight}px;
  max-width: ${MAX_WIDTH}px;
`

const StyledThumbnail = styled.div`
  position: absolute;
  right: 0;
  bottom: 14.2rem;
  width: 50%;

  svg {
    display: block;
    width: 100%;
  }
`

const HomeIntroSection: React.FC = () => {
  return (
    <StyledSection>
      <StyledInner>
        <HomeTextPhrase></HomeTextPhrase>
        <HomeTextPath></HomeTextPath>
        <StyledThumbnail>
          <HeaderThumbnail />
        </StyledThumbnail>
      </StyledInner>
    </StyledSection>
  )
}

export default HomeIntroSection
