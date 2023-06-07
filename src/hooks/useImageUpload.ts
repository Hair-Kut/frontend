import { ChangeEvent, useState } from 'react';

import { postPresignedUrl, putImageToS3 } from 'src/api';

function useImageUpload(): {
  id: number;
  imageSrc: string;
  isImageUploaded: boolean;
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
} {
  const [presignedUrl, setPresignedUrl] = useState('');
  const [id, setID] = useState(0);
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
      const { id: newID, presignedUrl: newPresignedUrl } = await postPresignedUrl();
      const status = await putImageToS3(newPresignedUrl, newFile);
      setPresignedUrl(newPresignedUrl);
      setID(newID);
      setIsImageUploaded(status === 200);
    }
  };

  return { id, imageSrc, isImageUploaded, handleUpload };
}

export default useImageUpload;
