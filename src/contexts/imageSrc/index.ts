import { Dispatch, SetStateAction, createContext } from 'react';

interface ImageSrcType {
  resultImagePathList: string[];
  selectedHair: number;
  setSelectedHair: Dispatch<SetStateAction<number>>;
  userImageSrc: string;
  isImageUploaded: boolean;
}

export const ImageSrcContext = createContext<ImageSrcType>({
  userImageSrc: '',
  resultImagePathList: [],
  isImageUploaded: false,
  selectedHair: -1,
  setSelectedHair: () => {},
});
