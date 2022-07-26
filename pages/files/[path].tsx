import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FilesPage = () => {
  const router = useRouter();
  const { path } = router.query;

  useEffect(() => {
    router.push(`https://cloud.digitalocean.com/spaces/orlinzer/${path}`);
  }, [router, path]);

  return <p>Redirecting to: {path} </p>
}

export default FilesPage;
