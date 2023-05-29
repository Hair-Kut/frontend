import { ChangeEvent, useState } from 'react';
import axios from 'axios';

import { SERVER_URL } from 'src/constants';

function useImageUpload(
  id: number,
  presignedUrl: string,
): {
  imageSrc: string;
  isImageUploaded: boolean;
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
} {
  const [imageSrc, setImageSrc] = useState('');
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const render = new FileReader();

      render.onload = () => {
        setImageSrc(render.result as string);
      };
      render.readAsDataURL(file);

      const blob = file.slice(0, file.size, 'image/png');
      const newFile = new File([blob], 'image.jpg', { type: 'image/jpg' });
      const { status } = await axios.put(presignedUrl, newFile);
      setIsImageUploaded(status === 200);
    }
  };

  return { imageSrc, isImageUploaded, handleUpload };
}

export default useImageUpload;
