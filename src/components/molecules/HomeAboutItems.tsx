import React from "react"
import styled from "styled-components"

import myLabels from "../../documents/home"
import { BRAND_COLOR } from "../../styles/.style"

const StyledItemsList = styled.div`
  margin-top: 9.6rem;
`

const StyledItems = styled.div`
  &:not(:last-child) {
    margin-bottom: 4.8rem;
  }

  h5 {
    font-size: 0;

    span {
      display: inline-block;
      vertical-align: middle;
      padding: 0;
      font-size: 2rem;
      font-weight: normal;
      letter-spacing: .154rem;
      line-height: 1;
    }

    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      margin-right: .8rem;
      width: 2rem;
      height: .2rem;
      background: ${BRAND_COLOR};
    }
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    list-style-type: none;
  }

  li {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  li:not(:last-child) {
    margin-right: 3.2rem;
  }

  img {
    width: auto;
    height: 3.2rem;
  }
`

const HomeAboutItems = () => (
  <StyledItemsList>
    {myLabels.about.items.map((item: any, index: number) => (
      <StyledItems key={index}>
        <h5>
          <span>{item.title}</span>
        </h5>
        <ul>
          {item.item.map((val: string, id: number) => (
            <li key={id}>
              <img src={require(`../../images/icons/icon_${val}.svg`)} alt="" />
            </li>
          ))}
        </ul>
      </StyledItems>
    ))}
  </StyledItemsList>
)

export default HomeAboutItems
