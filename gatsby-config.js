module.exports = {
  siteMetadata: {
    title: `Katie's Awesome Blog`,
    name: `Katie Anderson`,
    siteUrl: `https://andekat.com/blog`,
    description: `Tips, tricks, tools, security, and discussions about our digital lives`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/AndeKat101`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/andekat`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        basePath: "/blog",
        authorsPage: true,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Katie Anderson`,
        short_name: `Katie`,
        start_url: `/blog`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
