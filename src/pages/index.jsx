import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Block1 from 'components/Block1';
import Block2 from 'components/Block2';
import Block3 from 'components/Block3';
import Block4 from 'components/Block4';
import Block5 from 'components/Block5';
import Block6 from 'components/Block6';

import './styles.scss';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Britt &amp; Nick's Wedding</title>
      </Helmet>
      <Container>
        <Block1 />
        <Block3 />
        <Block2 />
        <Block4 />
        <Block6 />
        <Block5 />
      </Container>
    </Layout>
  );
};

export default IndexPage;
