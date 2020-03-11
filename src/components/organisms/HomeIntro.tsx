import * as React from 'react'
import styled from 'styled-components'
import { MixinInner } from '../../styles/style'
import { BASE_TEXT_COLOR, BASE_WHITE_COLOR, KARLA } from '../../styles/.style'
import myLabels from '../../documents/home'
import thumbnail from '../../images/home/header_thumbnail.svg'

const StyledSection = styled.div`
  width: 100%;
  height: ${window.innerHeight}px;

  p {
    position: absolute;
    padding-top: 24rem;
    font-family: ${KARLA};
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    line-height: 1.6;
    text-align: center;
    width: 100%;
    height: ${window.innerHeight}px;
  }
`

const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 620px;

  img {
    display: block;
    margin: 0 auto;
    width: 60%;
  }
`

const HomeIntroSection: React.FC = () => (
  <StyledSection>
    {/* <StyledWhiteText dangerouslySetInnerHTML={{ __html: myLabels.intro.text }}></StyledWhiteText>
    <StyledBlackText dangerouslySetInnerHTML={{ __html: myLabels.intro.text }}></StyledBlackText> */}
    <StyledBox>
      <img src={thumbnail} alt="" />
    </StyledBox>
  </StyledSection>
)

export default HomeIntroSection
