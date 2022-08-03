import Layout from '../core/components/page/Layout';

function Home() {
  return (
    <Layout pageMeta={{
      title: 'Home Route',
    }}
    >
      <main className="max-w-6xl m-auto p-4">
        <p>Home</p>
      </main>
    </Layout>
  );
}

export default Home;
