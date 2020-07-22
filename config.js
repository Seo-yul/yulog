const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://resourcesaga.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://yoon-seo.github.io/images/profile-character/chara-logo.png',
    logoLink: 'https://resourcesaga.github.io',
    title:
      '<img class="img-responsive" src="https://yoon-seo.github.io/images/logo/nickname.png" alt="ResourceSaga" />',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
               <a href="https://github.com/resourceSaga" target="_blank" rel="noopener noreferrer">
		<div>
                 <img src="https://yoon-seo.github.io/images/icon/github.png" alt="github" />
		</div>
               </a>
             </li>&nbsp;
	     <li>
              <a href="mailto:doctorlinux@kakao.com" target="_blank" rel="noopener noreferrer">
	       <div>
                <img src="https://yoon-seo.github.io/images/icon/email.png" alt="email" />
	       </div>              
	      </a>
             </li>&nbsp;
             <li>
             <a href="https://open.kakao.com/o/s4FP6hmc" target="_blank" rel="noopener noreferrer">
              <div>
               <img src="https://yoon-seo.github.io/images/icon/kakao.png" alt="kakao" />
              </div>
             </a>
             </li>`,	
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
      '/Portfolio',
      '/Portfolio/Academy-Point',
      '/Portfolio/Bongja-Bob',
      '/KBI-Financial-DT-Test',
    ],
    collapsedNav: [
      '/Portfolio', // add trailing slash if enabled above
      '/KBI-Financial-DT-Test',
    ],
    links: [{ text: 'Blog', link: 'https://yulsay.tistory.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://resourcesaga.github.io/'>Seoyul</a>",
  },
  siteMetadata: {
    title: 'Seoyul Blog | ResourceSaga',
    description: 'An archive of everything I\'ve done. https://resourcesaga.github.io/ ',
    ogImage: null,
    docsLocation: 'https://github.com/resourceSaga/ResourceSaga.github.io',
    favicon: 'https://yoon-seo.github.io/images/profile-character/favicon.png',
  },
};

module.exports = config;
