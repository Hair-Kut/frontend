import { PropsWithChildren, useState } from 'react';

import { HairImageSrcContext } from 'src/contexts/image';

interface Props extends PropsWithChildren {
  initialState: string;
}

function ContextWrapper({ children, initialState }: Props) {
  const [state, setState] = useState(initialState);
  return (
    <HairImageSrcContext.Provider value={{ hairImageSrc: state, setHairImageSrc: setState }}>
      {children}
    </HairImageSrcContext.Provider>
  );
}

export default ContextWrapper;
