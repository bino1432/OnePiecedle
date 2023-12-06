import './App.css';
import { Route, Routes } from 'react-router-dom';
import Emoji from './Components/Emoji';
import Classic from './Components/Classic';
import Home from './Components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Classic' element={<Classic />} />
        <Route path='/Emoji' element={<Emoji />} />
      </Routes>
    </>
  )
}

export default App