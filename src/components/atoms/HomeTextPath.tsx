import React from "react"
import styled from "styled-components"

import myLabels from "../../documents/home"

const StyledTextPath = styled.div`
  position: absolute;
  left: 50%;
  bottom: 12.4rem;
  transform: translate(-50%, 0);
  width: ${window.innerWidth}px;

  > div {
    width: 100%;
  }
  svg {
    width: 100%;
  }

  > div:nth-child(1) {
    margin-left: 14%;
  }
  > div:nth-child(2) {
    margin-left: -2%;
  }
`

const HomeTextPath = () => (
  <StyledTextPath>
    <div>
      <svg viewBox="0 0 0 1480 156" xmlns="http://www.w3.org/2000/svg">
        <path id="pathReact">
          <animate
            attributeName="d"
            from="m0,110 h0"
            to="m0,110 h1100"
            dur="6.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
        <text
          fontSize="96px"
          fontWeight="bold"
          fontFamily="Muli"
          letterSpacing="0.797"
          fill="#262626"
        >
          <textPath xlinkHref="#pathReact">
            {myLabels.intro.labels.react}
          </textPath>
        </text>
      </svg>
    </div>
    <div>
      <svg viewBox="0 0 1220 156" xmlns="http://www.w3.org/2000/svg">
        <path id="pathVue">
          <animate
            attributeName="d"
            from="m0,110 h0"
            to="m0,110 h1100"
            dur="6.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
        <text
          fontSize="96px"
          fontWeight="bold"
          fontFamily="Muli"
          letterSpacing="0.797"
          fill="#262626"
        >
          <textPath xlinkHref="#pathVue">{myLabels.intro.labels.vue}</textPath>
        </text>
      </svg>
    </div>
  </StyledTextPath>
)

export default HomeTextPath
