import { useRouter } from 'next/router';
import { useEffect } from 'react';
const DownloadImages = () => {
  const router = useRouter();
  useEffect(() => {
    const URL =
      'https://docs.google.com/spreadsheets/d/1JpOyrs6VI1hf-uiN4geFrk5xsXfQFYRAMIpd0IbnSXM/export?format=csv&gid=240285591';
    window.location.href = URL;
    router.push('/');
  }, [router]);
  return <> </>;
};
export default DownloadImages;
