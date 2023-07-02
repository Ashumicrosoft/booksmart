import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import MiddleWare from './components/MiddleWare'
import Poetry from './components/pages/Poetry';
import History from './components/pages/History';
import Science from './components/pages/Science';
import Novel from './components/pages/Novel';
import PhotoGraphy from './components/pages/PhotoGraphy';
import BioGraphy from './components/pages/BioGraphy';
import Painting from './components/pages/Painting';
import Comics from './components/pages/Comics';
import Politics from './components/pages/Politics';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Cart from './cart/Cart';
import OrderSummery from './cart/OrderSummery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <MiddleWare />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/poetry' element={<Poetry />} />
          <Route path='/history' element={<History />} />
          <Route path='/science' element={<Science />} />
          <Route path='/novel' element={<Novel />} />
          <Route path='/photography' element={<PhotoGraphy />} />
          <Route path='/biography' element={<BioGraphy />} />
          <Route path='/painting' element={<Painting />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/politics' element={<Politics />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/ordersummary' element={<OrderSummery />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
