import Head from 'next/head';
import Drawer from '../components/drawermenu';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>あぐしす</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
      </Head>
      <Navbar />
      <Drawer />
    </>
  );
};
export default Home;
