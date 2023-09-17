import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import RandomLotPage from './components/pages/RandomLotPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {LotDataContextProvider} from './components/contexts/LotContext';
import { ChatRoomContextProvider } from './components/contexts/ChatRoomContext';
import CounterPage from './components/pages/CounterPage';
import ChatRoom from './components/pages/ChatRoom';
import ChatUI from './components/chatRoomComponents/Chat';


function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <main className='flex-1 bg-gray-100'>
        <Navbar/> 
        <Routes>
          <Route path='/react-super-app' element={<Home/>}></Route>
          <Route path='/react-super-app/about' element={<About/>}></Route>
          <Route path='/react-super-app/counter' element={<CounterPage/>}></Route>
        </Routes>
          <LotDataContextProvider>
            <Routes>
              <Route path="/react-super-app/randomLot" element={<RandomLotPage />} />
            </Routes>
          </LotDataContextProvider>
          <ChatRoomContextProvider>
            <Routes>   
              <Route path="/react-super-app/chatRoom" element={<ChatRoom />} />
              <Route path='/react-super-app/chatRoom/chat' element={<ChatUI/>}></Route>
            </Routes>
          </ChatRoomContextProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;
