import * as React from "react"
import type { PageProps } from "gatsby"
import { Heading } from "@chakra-ui/react"

const IndexRoute = ({ path }: PageProps) => {
  return (
    <main>
      <Heading size='sm'>Path: {path}</Heading>
    </main>
  )
}

export default IndexRoute