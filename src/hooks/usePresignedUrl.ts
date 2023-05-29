import { useEffect, useState } from 'react';
import axios from 'axios';

import { SERVER_URL } from 'src/constants';

function usePresignedUrl(): { presignedUrl: string; id: number } {
  const [presignedUrl, setPresignedUrl] = useState('');
  const [id, setID] = useState(0);

  async function getPresignedURL() {
    const { id: newID, presignedUrl: newPresignedUrl } = (
      await axios.post(SERVER_URL + '/api/memberImages/presigned_url')
    ).data;

    setPresignedUrl(newPresignedUrl);
    setID(newID);
  }

  useEffect(() => {
    getPresignedURL();
  }, []);

  return { presignedUrl, id };
}

export default usePresignedUrl;
