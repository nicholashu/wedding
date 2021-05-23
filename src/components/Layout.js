import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Layout = ({ children, pageName }) => {

  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className}}></Helmet>
        <main>{ children }</main>
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;