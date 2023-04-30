import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'src/pages/Home';
import ResultPage from 'src/pages/Result';

import '../public/img/hair-kut.svg';
import '../public/img/hair1.svg';
import '../public/img/hair2.svg';
import '../public/img/hair3.svg';
import '../public/img/hair4.svg';
import '../public/img/hair5.svg';
import '../public/img/hair6.svg';
import '../public/img/hair7.svg';
import '../public/img/hair8.svg';
import '../public/img/hair9.svg';
import '../public/img/hair10.svg';
import '../public/img/hair11.svg';
import '../public/img/image.png';
import '../public/img/logo.png';
import '../public/img/result.png';
import '../public/img/selected-hair.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
