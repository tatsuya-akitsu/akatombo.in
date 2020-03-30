module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "e1476c41-e822-4e49-8675-fa2ac1200d1e",
        serviceId: "akatombo",
        endpoint: "photograph",
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "e1476c41-e822-4e49-8675-fa2ac1200d1e",
        serviceId: "akatombo",
        endpoint: "graphic",
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "e1476c41-e822-4e49-8675-fa2ac1200d1e",
        serviceId: "akatombo",
        endpoint: "illustrator",
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "e1476c41-e822-4e49-8675-fa2ac1200d1e",
        serviceId: "akatombo",
        endpoint: "web",
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans JP`,
            variants: [`100`, `300`, `400`, `500`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`200`, `300`, `400`, `500`, `700`, `800`, `900`],
          },
        ],
      },
    },
  ],
}
