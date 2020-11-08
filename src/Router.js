import React, { useContext } from 'react';

import Layout from './Layout';



import SessionContext from './components/Context/SessionContext';
import McKing from './Screen/McKing';
import OrderList from './Screen/Orderlist';

const Router = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <Layout className="layout">
      {!isAuthenticated && <McKing />}
      {isAuthenticated && <OrderList />}
    </Layout>
  );
};

export default Router;