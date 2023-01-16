import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

export default function IndexPage(props: PageProps) {
  console.log(props)
  return (
    <main>
      <p>This is the index</p>
    </main>
  )
}

export const Head: HeadFC = () => <title>Gemma Wedding 2022</title>
