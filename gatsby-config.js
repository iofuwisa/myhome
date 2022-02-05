const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `myhome`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey:  process.env.API_KEY,
        serviceId: 'wvou24ovo9',
        apis: [{
          endpoint: 'article'
        }],
      }
    },
  ]
}