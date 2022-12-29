import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Index } from './pages/Index';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="container mx-auto max-w-2xl content-center bg-black text-center text-5x1 text-white">
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
