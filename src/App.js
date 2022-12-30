import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Index } from './pages/Index';
import { Home } from './pages/Home';
import { Cart } from './pages/cart';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="container mx-auto max-w-2xl content-center bg-black text-center text-5x1 text-white">
      <Link className='text-2xl m-4' to='/home'>Home</Link>
      <Link className='text-2xl m-4' to='/cart'>Cart</Link>
      <hr />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
