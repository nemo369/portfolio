const sourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `projects`,
    path: `${__dirname}/src/projects/`,
  },
}
const sourceFilesystemImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `photos`,
    path: `${__dirname}/src/photos/`,
  },
}

const gatsbyRemarkImages = {
  resolve: `gatsby-remark-images`,
  options: {
    maxWidth: 590,
  },
}

const gatsbyRemarkRelativeImages = {
  resolve: `gatsby-remark-images`,
  options: {
    maxWidth: 750,
    linkImagesToOriginal: false,
  },
}
const gatsbyTransformerRemark = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [gatsbyRemarkRelativeImages, gatsbyRemarkImages],
  },
}

const gatsbyPluginGoogleAnalytic = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    head: true,
    anonymize: true,
    exclude: ["/preview/**", "/do-not-track/me/too/"],
    pageTransitionDelay: 0,
    optimizeId: "UA-147999431-1",
    // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    sampleRate: 5,
    siteSpeedSampleRate: 10,
  },
}
module.exports = {
  siteMetadata: {
    title: `Naaman's Portfolio`,
    titles: [
      "Front-End Developer",
      "Full-Stack Developer",
      "WordPress expert",
      "React Professional",
      "CSS ninja",
    ],
    author: `Naaman Frenkel`,
    description: "Front End Developer",
    socials: [
      {
        name: "github",
        link: "https://github.com/nemo369",
        user: "nemo369",
      },
      {
        name: "twitter",
        link: "https://twitter.com/nafrenkel",
        user: "nafrenkel",
      },
      {
        name: "linkedin",
        link: "https://linkedin.com/naamanf",
        user: "naamanf",
      },
      {
        name: "instagram",
        link: "https://instagram.com/naaman_f",
        user: "naaman_f",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    sourceFilesystemImages,
    sourceFilesystem,
    gatsbyTransformerRemark,
    gatsbyPluginGoogleAnalytic
  ],
}
