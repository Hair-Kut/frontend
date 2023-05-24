import { PropsWithChildren, useState } from 'react';

import { ImageSrcContext } from 'src/contexts/imageSrc';

interface Props extends PropsWithChildren {
  initialState: string;
}

function ContextWrapper({ children, initialState }: Props) {
  const [userImageSrc, setUserImageSrc] = useState('');
  const [hairImageSrc, setHairImageSrc] = useState('');
  const [resultImageSrc, setResultImageSrc] = useState('');
  return (
    <ImageSrcContext.Provider
      value={{
        userImageSrc,
        setUserImageSrc,
        hairImageSrc,
        setHairImageSrc,
        resultImageSrc,
        setResultImageSrc,
      }}>
      {children}
    </ImageSrcContext.Provider>
  );
}

export default ContextWrapper;
