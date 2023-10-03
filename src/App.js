import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsumerElectronics from './pages/ConsumerElectronics';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />  
          <Route path='/consumer-electronics' element={<ConsumerElectronics />} />  
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
