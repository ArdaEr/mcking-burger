import React, { useContext } from 'react';
import McKing from './Screen/McKing';
import OrderList from './Screen/Orderlist';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <McKing />,
    title: 'Home Page',
    isLink: true
  },
  {
    path: '/order',
    component: () => <OrderList />,
    title: 'Order Page'
  },
]  