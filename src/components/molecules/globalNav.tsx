import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BASE_TEXT_COLOR, EASE_IN_OUT_QUART } from "../../styles/.style"
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
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.027rem;
    line-height: 1;
    color: ${BASE_TEXT_COLOR};
  }

  a::before,
  a::after {
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

  a::before {
    width: 100%;
    background: #d4b079;
  }

  a::after {
    width: 0%;
    background: #f03434;
  }

  a:hover {
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
