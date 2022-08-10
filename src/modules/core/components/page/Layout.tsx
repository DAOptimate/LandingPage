import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import LayoutContainer from '../atom/LayoutContainer';
import Header from '../organism/Header';
import Navigation from '../organism/Sidebar';

interface IProps {
  children: ReactNode;
  pageMeta: {
    title: string;
  };
}

function Layout({ children, pageMeta: { title } }: IProps) {
  return (
    <LayoutContainer>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navigation />
      <main className="grow">
        <Header />
        {children}
      </main>
    </LayoutContainer>

  );
}

export default Layout;
