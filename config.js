const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://resourcesaga.github.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://img2.quasarzone.com/editor/2020/07/06/4c1331af7d23a68bd1df70c2b675d1cc.png',
    logoLink: 'https://resourcesaga.github.io/',
    title:
      '.',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '<a href="https://github.com/resourceSaga target="_blank rel="noopener"><img src="https://img2.quasarzone.com/editor/2020/07/06/dc8c9d77e2327c1b4b11d83a08aa4155.png" alt="github" /></a>',	
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Reso', link: 'https://resourcesaga.github.io/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://resourcesaga.github.io/'>ResourceSaga </a>",
  },
  siteMetadata: {
    title: 'Seoyul Blog | ResourceSaga',
    description: 'An archive of everything I\'ve done. https://resourcesaga.github.io/ ',
    ogImage: null,
    docsLocation: 'https://resourcesaga.github.io/',
    favicon: 'https://img2.quasarzone.com/editor/2020/07/06/231b2371eda83502d8e99752d8e07709.png',
  },
};

module.exports = config;
