import Layout from '../core/components/Layout';

function Admin() {
  return (
    <Layout pageMeta={{
      title: 'Admin Route',
    }}
    >
      <main className="max-w-6xl m-auto p-4">
        <p>Admin</p>
      </main>
    </Layout>
  );
}

export default Admin;
