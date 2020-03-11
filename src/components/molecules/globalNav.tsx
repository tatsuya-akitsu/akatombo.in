import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { RUBIK, BASE_TEXT_COLOR } from "../../styles/.style"
import myLabels from "../../documents/common"
import dragonFly from '../../images/dragon_fly.svg'

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 4rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li > a {
    display: block;
  }
  a {
    font-family: ${RUBIK};
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.027rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }
`

const GlobalNav: React.FC = () => (
  <StyledNav>
    <nav>
      <ul>
        {myLabels.nav.map((item, index) => {
          return (
            <li key={index}>
              {!item.isBlank ? (
                <Link to={item.target}>{item.label}</Link>
              ) : (
                <a href={item.target} target="_blank">
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
    <img src={dragonFly} alt=""/>
  </StyledNav>
)

export default GlobalNav
