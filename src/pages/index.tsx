import Head from 'next/head';
import Drawer from '../components/drawermenu';
import Navbar from '../components/navbar';

export const siteTitle = 'agusys';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
      </Head>
      <Navbar />
      <Drawer />
    </>
  );
}
