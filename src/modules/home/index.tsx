import Layout from '../core/components/page/Layout';
import Hero from './components/organisms/Hero';

function Home() {
  return (
    <Layout pageMeta={{
      title: 'Home Route',
    }}
    >
      <Hero />
    </Layout>
  );
}

export default Home;
