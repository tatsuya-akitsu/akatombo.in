import * as React from 'react'
import styled from 'styled-components'
import { MixinInner } from '../../styles/style'
import { RUBIK } from '../../styles/.style'
import myLabels from '../../documents/home'
import portraito from '../../images/home/portrait.jpg'

const StyledSection = styled.div`
  position: relative;
  padding: 6.4rem 0;
`

const StyledYear = styled.p`
  position: absolute;
  top: 50%;
  left: -15%;
  transform: translate(0, -50%);
  font-family: ${RUBIK};
  font-size: 44rem;
  font-weight: bold;
  letter-spacing: 2.87rem;
  line-height: 1;
  color: #F3F4F6;
  width: 100%;
`

const StyledInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${MixinInner}

  span {
    display: block;
    padding-bottom: 2.6rem;
    font-family: ${RUBIK};
    font-size: 1.2rem;
    line-height: 1;
    color: #8798AD;
  }
`

const StyledInfoBox = styled.div`
  margin-right: 12.4rem;
  width: 60%;
`

const StyledName = styled.p`
  padding-bottom: 48px;
  font-family: ${RUBIK};
  font-size: 4.8rem;
  font-weight: 500;
  line-height: 1;
`

const StyledText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
`

const StyledImage = styled.div`
  width: 28rem;
  border-radius: 10px;
  box-shadow: -5px -5px 10px #FFF, 2px 2px 5px #D0D3E4;
  overflow: hidden;

  img {
    width: 100%;
  }
`

const HomeAboutSection: React.FC = () => (
  <StyledSection>
    <StyledYear>{myLabels.about.year}</StyledYear>
    <StyledInner>
      <StyledInfoBox>
        <span>{myLabels.about.position}</span>
        <StyledName>{myLabels.about.name}</StyledName>
        <StyledText dangerouslySetInnerHTML={{ __html: myLabels.about.text }}></StyledText>
      </StyledInfoBox>
      <StyledImage>
        <img src={portraito} alt='' />
      </StyledImage>
    </StyledInner>
  </StyledSection>
)

export default HomeAboutSection
