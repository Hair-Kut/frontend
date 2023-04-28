import { ChangeEvent, useState } from 'react';

function ImageUpload(): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [imageSrc, setImageSrc] = useState('');

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const render = new FileReader();

      render.onload = () => {
        setImageSrc(render.result as string);
      };
      render.readAsDataURL(file);
    }
  };

  return [imageSrc, handleUpload];
}

export default ImageUpload;
