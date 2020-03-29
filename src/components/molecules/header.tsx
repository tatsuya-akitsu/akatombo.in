import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MixinInner } from "../../styles/style"
import GlobalNav from "./globalNav"
import logo from "../../images/logo.svg"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 3.2rem 0;
  width: 100%;
  z-index: 10000;
`
const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MixinInner}

  > a {
    font-size: 0;
  }
`

const StyledLogo = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 1.2rem;
  width: 23.6rem;

  > img {
    display: block;
    width: 100%;
  }
`

const Header: React.FC = () => (
  <StyledHeader>
    <StyledInner>
      <Link to="/">
        <StyledLogo>
          <img src={logo} alt="" />
        </StyledLogo>
      </Link>
      <GlobalNav />
    </StyledInner>
  </StyledHeader>
)

export default Header
