import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

function Index() {
  return (
    <Layout>
      <Helmet>
        <title>freeCodeCamp Guide</title>
        <meta
          content='freeCodeCamp study group directory.'
          name='description'
        />
      </Helmet>
      <h2>Join a nearby freeCodeCamp study group.</h2>
      &nbsp;
      <h3>Code together with other people in your city.</h3>
      <h4>Join the study group closest to you or find a place using the
      navigation or the search bar.
      </h4>
      &nbsp;
      <p>
        {"If you want to learn programming but you're not sure where to " +
          'start, check out '}
        <a
          href='https://freecodecamp.org'
          rel='noopener noreferrer'
          target='_blank'
          >
          freeCodeCamp.org
        </a>
        {'. It has a curriculum that starts from zero and helps you learn' +
          ' to code.'}
      </p>
      <p>
      {"Note: If you can't find a study group near you, you can "}
      <a
        href='#'
        rel='noopener noreferrer'
        target='_blank'
        >
        create one.
      </a>
      </p>
      <hr />
      <p>Happy coding!</p>
    </Layout>
  );
}

Index.displayName = 'IndexPage';

export default Index;
