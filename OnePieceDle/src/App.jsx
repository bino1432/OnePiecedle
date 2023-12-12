import './App.css';
import { Route, Routes } from 'react-router-dom';
import Fala from './Components/Fala';
import Classic from './Components/Classic';
import Home from './Components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Classic' element={<Classic />} />
        <Route path='/Fala' element={<Fala />} />
      </Routes>
    </>
  )
}

export default App