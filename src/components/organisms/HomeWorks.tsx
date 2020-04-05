import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BASE_TEXT_COLOR, EASE_IN_OUT_QUART } from "../../styles/.style"
import { MixinInner } from "../../styles/style"

import myLabels from "../../documents/home"
import WorkItem from "../atoms/WorkItem"

const StyledSection = styled.div`
  width: 100%;

  > div {
    ${MixinInner};
    margin-left: 0;
    margin-right: auto;
  }
`

const StyledContent = styled.div`
  column-count: 3;
  column-gap: 6.4rem;
  margin-top: 8.2rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-block;
  position: relative;
  padding: 1.6rem 2.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.16rem;
  color: ${BASE_TEXT_COLOR};

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
`

const HomeWorksSection = ({ data }: any) => {
  return (
    <StyledSection>
      <div>
        <StyledContent>
          {data.all.map((item: any, index: number) => (
            <WorkItem key={index} data={item.node}></WorkItem>
          ))}
        </StyledContent>
        <StyledLink to="/works">{myLabels.button}</StyledLink>
      </div>
    </StyledSection>
  )
}

export default HomeWorksSection
