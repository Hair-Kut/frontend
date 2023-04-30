import { Dispatch, SetStateAction, createContext } from 'react';

interface UserImageSrcType {
  userImageSrc: string;
  setUserImageSrc: Dispatch<SetStateAction<string>>;
}

interface HairImageSrcType {
  hairImageSrc: string;
  setHairImageSrc: Dispatch<SetStateAction<string>>;
}

interface ResultImageSrcType {
  resultImageSrc: string;
  setResultImageSrc: Dispatch<SetStateAction<string>>;
}

export const UserImageSrcContext = createContext<UserImageSrcType>({
  userImageSrc: '',
  setUserImageSrc: () => {},
});
export const HairImageSrcContext = createContext<HairImageSrcType>({
  hairImageSrc: '',
  setHairImageSrc: () => {},
});

export const ResultImageSrcContext = createContext<ResultImageSrcType>({
  resultImageSrc: '',
  setResultImageSrc: () => {},
});
