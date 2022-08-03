import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../organism/Header';

interface IProps {
    children: ReactNode,
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
