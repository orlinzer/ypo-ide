import { useRouter } from 'next/router';
import { useEffect } from 'react';

const File = () => {
  const router = useRouter();
  const { file } = router.query;

  useEffect(() => {
    router.push(`https://cloud.digitalocean.com/spaces/orlinzer/${file}`);
  }, [router, file]);

  return <p>Redirecting to: {file} </p>
}

export default File;
