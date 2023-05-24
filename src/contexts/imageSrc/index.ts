import { Dispatch, SetStateAction, createContext } from 'react';

interface ImageSrcType {
  userImageSrc: string;
  setUserImageSrc: Dispatch<SetStateAction<string>>;
  hairImageSrc: string;
  setHairImageSrc: Dispatch<SetStateAction<string>>;
  resultImageSrc: string;
  setResultImageSrc: Dispatch<SetStateAction<string>>;
}

export const ImageSrcContext = createContext<ImageSrcType>({
  userImageSrc: '',
  setUserImageSrc: () => {},
  hairImageSrc: '',
  setHairImageSrc: () => {},
  resultImageSrc: '',
  setResultImageSrc: () => {},
});
