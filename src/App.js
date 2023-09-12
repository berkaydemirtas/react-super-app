import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import RandomLotPage from './components/pages/RandomLotPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {LotDataContextProvider} from './components/contexts/LotContext';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
        <main className='flex-1 bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
          <LotDataContextProvider>
            <Routes>
              <Route path="/randomLot" element={<RandomLotPage />} />
            </Routes>
          </LotDataContextProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;
