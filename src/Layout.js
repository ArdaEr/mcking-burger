import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**import { Wrapper } from './Container.styles';**/


const Layout = ({ className, children }) => {

  return <div className={className}>  <Router>{children}</Router></div>;
};

export default Layout;
