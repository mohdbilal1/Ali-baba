import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsumerElectronics from './pages/ConsumerElectronics';
import ConsumerElectronicsHeadPhones from './pages/ConsumerElectronicsHeadPhones';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />  
          <Route path='/consumer-electronics' element={<ConsumerElectronics />} />  
          <Route path='/consumer-electronics/headphone-pge' element={<ConsumerElectronicsHeadPhones />} /> 
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
