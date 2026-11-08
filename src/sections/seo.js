import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  title, description, image, article,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="theme-color" content="#090B2B" />
      <link rel="preload" href="/fonts/poppins-all-500-normal.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/dm-sans-v11-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Alec Springel" />

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta property="og:image:width" content="1200" />}
      {seo.image && <meta property="og:image:height" content="630" />}
      {seo.image && <meta property="og:image:alt" content="Alec Springel, frontend platform and full-stack engineer" />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
