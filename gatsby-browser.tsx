import * as React from "react"
import type { GatsbyBrowser } from "gatsby"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <div>
      <h1>Wrap Page Element</h1>
      {element}
    </div>
  )
}