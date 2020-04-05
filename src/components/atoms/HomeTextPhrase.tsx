import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import myLabels from "../../documents/home"
import { BASE_TEXT_COLOR, MULI } from "../../styles/.style"

const StyledIntroText = styled.div`
  position: absolute;
  top: 23.8rem;
  left: 0;
  width: 100%:
`

const StyledIntro = styled.p`
  display: block;
  padding-bottom: 3.2rem;
  font-family: ${MULI};
  font-size: 1.6rem;
  letter-spacing: 0.027rem;
  line-height: 1.4;
  font-weight: bold;
  color: ${BASE_TEXT_COLOR};
`

const StyledIntroPhrase = styled.h2`
  display: inline-block;
  vertical-align: text-bottom;
  font-family: ${MULI};
  font-size: 4.8rem;
  font-weight: bold;
  letter-spacing: 0.16rem;
  line-height: 1.2;
  text-align: left;
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

const HomeTextPhrase = () => {
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
    <StyledIntroText>
      <StyledIntro
        dangerouslySetInnerHTML={{ __html: myLabels.intro.intro }}
      ></StyledIntro>
      <div>
        <StyledIntroPhrase
          ref={paragraphEl}
          className="p-intro_phrase"
        ></StyledIntroPhrase>
        <StyledUnderScore ref={consoleEl}></StyledUnderScore>
      </div>
    </StyledIntroText>
  )
}

export default HomeTextPhrase
