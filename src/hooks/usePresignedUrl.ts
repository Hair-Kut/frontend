import { useEffect, useState } from 'react';

import { postPresignedUrl } from 'src/api';

function usePresignedUrl(): { presignedUrl: string; id: number } {
  const [presignedUrl, setPresignedUrl] = useState('');
  const [id, setID] = useState(0);

  async function getPresignedURL() {
    const { id: newID, presignedUrl: newPresignedUrl } = await postPresignedUrl();

    setPresignedUrl(newPresignedUrl);
    setID(newID);
  }

  useEffect(() => {
    getPresignedURL();
  }, []);

  return { presignedUrl, id };
}

export default usePresignedUrl;
