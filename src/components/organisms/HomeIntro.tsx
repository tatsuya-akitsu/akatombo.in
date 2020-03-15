import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { BASE_TEXT_COLOR, KARLA, MAX_WIDTH } from "../../styles/.style"
import myLabels from "../../documents/home"
import HeaderThumbnail from "../atoms/thumbnail"

const StyledSection = styled.div`
  position: relative;
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

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${MAX_WIDTH}px;

  > div:nth-of-type(1) {
    width: 60%;

    span {
      display: block;
      padding-bottom: 3.2rem;
      font-size: 1.4rem;
      letter-spacing: 0.043rem;
      line-height: 1.4;
      font-weight: bold;
      color: ${BASE_TEXT_COLOR};
    }

    h2 {
      display: inline-block;
      vertical-align: text-bottom;
      font-size: 6rem;
      letter-spacing: 0.16rem;
      line-height: 1.2;
      text-align: left;
    }
  }

  > div:nth-of-type(2) {
    width: 40%;

    img {
      display: block;
      width: 100%;
    }
  }
`

const StyledUnderScore = styled.div`
  display: inline-block;
  vertical-align: text-bottom;
  position: relative;
  top: -0.14rem;
  left: 1rem;
  width: 4.8rem;
  height: 7.2rem;
  border-bottom: 3px solid ${BASE_TEXT_COLOR};
`

const HomeIntroSection: React.FC = () => {
  const paragraphEl = useRef<HTMLParagraphElement>(null)
  const consoleEl = useRef<HTMLParagraphElement>(null)

  const textEffect = (phrase: Array<any>, colors: Array<String>) => {
    if (colors === undefined) colors = [BASE_TEXT_COLOR]
    let visible = true
    let letterCount = 1
    let x = 1
    let waiting = false

    if (paragraphEl && paragraphEl.current) {
      paragraphEl.current.setAttribute("style", `color: ${colors[0]}`)
    }

    window.setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true
        if (paragraphEl && paragraphEl.current) {
          paragraphEl.current.innerHTML = phrase[0].substring(0, letterCount)
        }
        window.setTimeout(() => {
          const usedColor: any = colors.shift()
          colors.push(usedColor)
          const usedPhrase: any = phrase.shift()
          phrase.push(usedPhrase)
          x = 1
          if (paragraphEl && paragraphEl.current) {
            paragraphEl.current.innerHTML = phrase[0].substring(0, letterCount)
          }
          letterCount += x
          waiting = false
        }, 1000)
      } else if (letterCount === phrase[0].length + 1 && !waiting) {
        waiting = true
        window.setTimeout(() => {
          x = -1
          letterCount += x
          waiting = false
        }, 1000)
      } else if (!waiting) {
        if (paragraphEl && paragraphEl.current) {
          paragraphEl.current.innerHTML = phrase[0].substring(0, letterCount)
        }
        letterCount += x
      }
    }, 120)

    window.setInterval(() => {
      if (visible) {
        if (consoleEl && consoleEl.current) {
          consoleEl.current.setAttribute("style", "opacity: 0")
          visible = false
        }
      } else {
        if (consoleEl && consoleEl.current) {
          consoleEl.current.setAttribute("style", "opacity: 1")
          visible = true
        }
      }
    }, 400)
  }

  useEffect(() => {
    textEffect(myLabels.intro.phrase, [BASE_TEXT_COLOR])
  }, [])

  return (
    <StyledSection>
      <StyledInner>
        <div>
          <span
            dangerouslySetInnerHTML={{ __html: myLabels.intro.intro }}
          ></span>
          <div>
            <h2 ref={paragraphEl} className="p-intro_phrase"></h2>
            <StyledUnderScore ref={consoleEl}></StyledUnderScore>
          </div>
        </div>
        <div>
          <HeaderThumbnail />
        </div>
      </StyledInner>
    </StyledSection>
  )
}

export default HomeIntroSection
