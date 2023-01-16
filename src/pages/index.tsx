import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

// Add linter
// Rest of chakra stuff?

// See chakra example website for SEO and other nice components
// https://github.com/chakra-ui/chakra-ui/tree/e98db2cc02e530c980997353dd4f093da9064593/examples/gatsby

export default function IndexPage(props: PageProps) {
  console.log(props)
  return (
    <main>
      <p>This is the index</p>
    </main>
  )
}

export const Head: HeadFC = () => <title>Gemma Wedding 2022</title>
