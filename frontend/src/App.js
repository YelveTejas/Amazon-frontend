import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/Newnav';
import Maincomponet from './components/home/Maincomponet';
import Footer from './components/footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Signin from './components/signup_signin/Signin';
import Signup from './components/signup_signin/Signup';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
function App() {
  return (
    <>
    <Navbar/>
    <Newnav/>
    <Routes>
      <Route path='/' element={<Maincomponet/>}></Route>4
      <Route path='/login' element={<Signin/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/getproducts/:id' element={<Cart/>}></Route>
      <Route path='/buynow'element={<Buynow/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
