import { useEffect, useState } from 'react';

import Frame from 'src/components/Frame';
import ResultImage from 'src/components/ResultImage';

function ResultPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <Frame>
      <ResultImage imageSrc='img/result.png' isLoaded={isLoaded} />
    </Frame>
  );
}

export default ResultPage;
