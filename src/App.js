import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
//import components 
import GuestNav from './components/GuestNav/GuestNav';
import Home from './pages/Home/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Wish from './pages/Wish/Wish';


//----------------------------------------------------
function App() {
  return (
    <div className='app'>
      <GuestNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Outlet />}>
          <Route path='' element={<Products />} />
          <Route path='/products:id' element={<ProductDetails />} />
        </Route>
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish' element={<Wish />} />
      </Routes>
    </div>

  );
}

export default App;
