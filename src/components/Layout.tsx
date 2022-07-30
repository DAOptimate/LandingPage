import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

interface IProps {
    children: React.ReactNode,
    pageMeta: {
        title: string
    }
}

function Layout({ children, pageMeta: { title } }: IProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
    </>
  );
}

export default Layout;
