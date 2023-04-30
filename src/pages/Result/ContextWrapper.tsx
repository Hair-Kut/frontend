import { PropsWithChildren, useState } from 'react';
import { ResultImageSrcContext } from 'src/contexts/image';

function ContextWrapper({ children }: PropsWithChildren) {
  const [resultImageSrc, setResultImageSrc] = useState('');
  return (
    <ResultImageSrcContext.Provider value={{ resultImageSrc, setResultImageSrc }}>
      {children}
    </ResultImageSrcContext.Provider>
  );
}

export default ContextWrapper;
