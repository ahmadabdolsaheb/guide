/* eslint-disable no-alert, react/jsx-sort-props */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Breadcrumbs from '../templateComponents/Breadcrumbs';
import GroupInfo from '../templateComponents/GroupInfo';
import Layout from '../components/Layout';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.shape({
    meta: PropTypes.objectOf(PropTypes.string)
  })
};

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (document.activeElement.hasAttribute('data-navitem')) {
      this.article.focus();
    }
  }
  render() {
    const {
      data: {
        markdownRemark: {
          html,
          fields: { slug },
          frontmatter: {
            title,
            country,
            state,
            city,
            neighborhood,
            coordinates,
            plusCode,
            socialName,
            socialURL,
            chatName,
            chatURL,
            eventName,
            eventURL,
            leaderName,
            leaderURL,
            oldPhoto,
            coverPhoto
          }
        }
      },
      pageContext: { meta }
    } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>{`${title} | freeCodeCamp Guide`}</title>
          <link
            href={`https://guide.freecodecamp.org${slug}`}
            rel='canonical'
          />
          <meta
            content={`https://guide.freecodecamp.org${slug}`}
            property='og:url'
          />
          <meta content={title} property='og:title' />
          <meta
            content={meta.description ? meta.description : ''}
            property='og:description'
          />
          <meta
            content={meta.description ? meta.description : ''}
            name='description'
          />
          <meta content={meta.featureImage} property='og:image' />
        </Helmet>
        <Breadcrumbs path={slug} />
        {country ? (
          <GroupInfo
            country={country}
            state={state}
            city={city}
            neighborhood={neighborhood}
            coordinates={coordinates}
            plusCode={plusCode}
            socialName={socialName}
            socialURL={socialURL}
            chatName={chatName}
            chatURL={chatURL}
            eventName={eventName}
            eventURL={eventURL}
            leaderName={leaderName}
            leaderURL={leaderURL}
            oldPhoto={oldPhoto}
            coverPhoto={coverPhoto}
          />
        ) : (
          ''
        )}
        <article
          className='article'
          dangerouslySetInnerHTML={{ __html: html }}
          id='article'
          ref={article => {
            this.article = article;
          }}
          tabIndex='-1'
        />
      </Layout>
    );
  }
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export default Article;

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        country
        state
        city
        neighborhood
        coordinates
        plusCode
        socialName
        socialURL
        chatName
        chatURL
        eventName
        eventURL
        leaderName
        leaderURL
        oldPhoto
        coverPhoto
      }
    }
  }
`;
