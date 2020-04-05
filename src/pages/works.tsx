import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorksPage from "../components/organisms/WorksPage"

const SecondPage = () => (
  <Layout>
    <SEO title="Works" />
    <WorksPage></WorksPage>
  </Layout>
)

export default SecondPage
