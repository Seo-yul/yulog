import React from 'react';

const CommunityAuthor = ({ name, imageUrl, githubUrl, description }) => {
  return (
    <>
      <h2 className="communitySection">About the community author</h2>
      <div className="authorSection">
        <div className="authorImg">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="authorDetails">
          <div className="authorName">
            <strong>{name}</strong>
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://yoon-seo.github.io/images/icon/github.png"
                  alt="Github Icon"
                  aria-label="Github"
                />
              </a>
            ) : null}
	        <a href="mailto:doctorlinux@kakao.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://yoon-seo.github.io/images/icon/email.png"
                  alt="Mail Icon"
                  aria-label="Mail"
                />
              </a>
          </div>
          <div className="authorDesc">{description}</div>
        </div>
      </div>
    </>
  );
};

export default CommunityAuthor;
