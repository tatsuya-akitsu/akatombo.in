import { css } from "styled-components"
import { MAX_WIDTH } from "./.style"

export const MixinInner = css`
  position: relative;
  margin: 0 auto;
  padding: 0 6.4rem;
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`
