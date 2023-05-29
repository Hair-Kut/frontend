import { PropsWithChildren, useState } from 'react';

import { ImageSrcContext } from 'src/contexts/imageSrc';

interface Props extends PropsWithChildren {
  initialState: string;
}

function ContextWrapper({ children, initialState }: Props) {
  const [resultImageSrc, setResultImageSrc] = useState('');
  const [selectedHair, setSelectedHair] = useState(-1);

  return (
    <ImageSrcContext.Provider
      value={{
        userImageSrc: '',
        resultImageSrc,
        setResultImageSrc,
        selectedHair,
        setSelectedHair,
        isImageUploaded: false,
      }}>
      {children}
    </ImageSrcContext.Provider>
  );
}

export default ContextWrapper;
