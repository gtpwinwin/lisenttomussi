import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import NotFound from './components/NotFound';
import FormData from './pages/FormData';
import BuinessPage from './pages/Buiness-page';
import Confirm from './pages/Confirm';
import UploadImages from './pages/UploadImages';
import FinalComponent from './components/Final';
import Waitting from './components/Waitting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/adhelp-109445849938899595' element={<FormData />} />
          <Route path='/adhelp-109445849938899595/buiness' element={<BuinessPage />} />
          <Route path='/adhelp-109445849938899595/confirm' element={<Confirm />} />
          <Route path='/adhelp-109445849938899595/upload-image' element={<UploadImages />} />
          <Route path='/adhelp-109445849938899595/final' element={<FinalComponent />} />




          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;