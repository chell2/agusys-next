import { useRouter } from 'next/router';
import { useEffect } from 'react';
const DownloadFarms = () => {
  const router = useRouter();
  useEffect(() => {
    const URL =
      'https://docs.google.com/spreadsheets/d/1kAOVUAsE0LKjmoodjhEhjfOnrSvTav_enIBPprTZ1fA/export?format=csv&gid=0';
    window.location.href = URL;
    router.push('/');
  }, [router]);
  return <> </>;
};
export default DownloadFarms;
