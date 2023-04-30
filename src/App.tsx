import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'src/pages/Home';
import ResultPage from 'src/pages/Result';

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
