module.exports = {
  siteMetadata: {
    title: 'Alec Springel',
    description: 'Portfolio and client portal for software and web development services',
    url: 'https://alecspringel.com',
    image: '/meta-img.jpg',
    author: '@alecspringel',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alec Springel',
        short_name: 'Alec Springel',
        description: 'Portfolio and client portal for software and web development services',
        start_url: '/',
        background_color: '#090B2B',
        theme_color: '#090B2B',
        display: 'browser',
        icon: 'src/images/manifest/512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.DEPLOY_ENV === 'prod' ? 'alecspringel.com-v2' : 'alecspringel.com-v2-dev',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-2Q4G38S8CQ', // Google Analytics
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT-NKZ8Z3W',
          anonymize_ip: false,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
