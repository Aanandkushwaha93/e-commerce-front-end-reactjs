import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';
import Page404 from './components/Page404';
import Profile from './components/Profile';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter >
      <Nav />
     <Routes>
       <Route element={<PrivateComponent />}>
       <Route path="/" element={<ProductList />} />
       <Route path="/*" element={<Page404 />} />
       <Route path="/add" element={<AddProduct />} />
       <Route path="/update/:id" element={<UpdateProduct />} />
       <Route path="/logout" element={<h1> Logout Component</h1>} />
       <Route path="/profile" element={<Profile/>} />
       </Route>
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
     <Footer />
    </React.Fragment>
  );
}

export default App;