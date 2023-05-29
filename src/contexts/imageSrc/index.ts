import { Dispatch, SetStateAction, createContext } from 'react';

interface ImageSrcType {
  resultImageSrc: string;
  setResultImageSrc: Dispatch<SetStateAction<string>>;
  selectedHair: number;
  setSelectedHair: Dispatch<SetStateAction<number>>;
  userImageSrc: string;
  isImageUploaded: boolean;
}

export const ImageSrcContext = createContext<ImageSrcType>({
  userImageSrc: '',
  resultImageSrc: '',
  setResultImageSrc: () => {},
  isImageUploaded: false,
  selectedHair: -1,
  setSelectedHair: () => {},
});
