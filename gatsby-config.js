module.exports = {
  siteMetadata: {
    title: 'Ali App',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '82wfhxeerbnr',
        accessToken: '811bdf6bae72aacb86629b26ab3aa2fe2a27de14945e624c3c7f60eac895f196'
      }
    }
  ],
}
