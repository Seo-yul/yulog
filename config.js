import GITHUBImage from './images/github.png';
import EMAILImage from './images/email.png';
import CHARALOGOImage from './images/chara-logo.png';
import FAVICONImage from './images/favicon.png';
import KAKAOImage from './images/kakao.png';
import NICKNAMEImage from './images/nickname.png';

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://resourcesaga.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '${CHARALOGOImage}',
    logoLink: 'https://resourcesaga.github.io',
    title:
      '<img class="img-responsive" src="${NICKNAMEImage}" alt="ResourceSaga" />',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
               <a href="https://github.com/resourceSaga" target="_blank" rel="noopener noreferrer">
		<div>
                 <img src="${GITHUBImage}" alt="github" />
		</div>
               </a>
             </li>&nbsp;
	     <li>
              <a href="mailto:doctorlinux@kakao.com" target="_blank" rel="noopener noreferrer">
	       <div>
                <img src="${EMAILImage}" alt="email" />
	       </div>              
	      </a>
             </li>&nbsp;
             <li>
             <a href="https://open.kakao.com/o/s4FP6hmc" target="_blank" rel="noopener noreferrer">
              <div>
               <img src="${KAKAOImage}" alt="kakao" />
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
    forcedNavOrder: [// add trailing slash if enabled above
      '/resourcesaga',
      '/KBI-Financial-DT-Test',
      '/Nodejs',
      '/Portfolio',      
    ],
    collapsedNav: [// add trailing slash if enabled above      
      '/KBI-Financial-DT-Test',
      '/Nodejs',      
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
    favicon: '{FAVICONImage}',
  },
};

module.exports = config;
