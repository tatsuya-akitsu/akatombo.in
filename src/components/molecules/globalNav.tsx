import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { RUBIK, BASE_TEXT_COLOR } from "../../styles/.style"
import myLabels from "../../documents/common"
import dragonFly from "../../images/dragon_fly.svg"

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

  li {
    position: relative;
    padding: 0 1.6rem;
  }

  li > a {
    display: block;
  }
  a {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding: 0 1.6rem;
    font-family: ${RUBIK};
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.027rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }

  li:not(:nth-last-of-type(1))::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    display: inline-block;
    vertical-align: middle;
    width: 2.4rem;
    height: 0.2rem;
    border-radius: 1px;
    background: ${BASE_TEXT_COLOR};
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
                <a href={item.target} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
    <img src={dragonFly} alt="" />
  </StyledNav>
)

export default GlobalNav
