import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./App.css"
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import ProductList from './pages/productlist/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import ChartLine from './pages/chartline/ChartLine';
import ChartArea  from './pages/chartarea/ChartArea';
import ChartPie from './pages/chartpie/ChartPie';
import ChartBar from './pages/chartbar/ChartBar'

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  
  return (
   
        <BrowserRouter>
         <Routes>
         <Route path="/login" element= {<Login />}/>
         </Routes>
         {admin && (
          <>
        <Topbar/>
        <div className='container'>
        <Sidebar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/line" element={<ChartLine />} />
        <Route path="/area" element={<ChartArea />} />
        <Route path="/pie" element={<ChartPie />} />
        <Route path="/bar" element={<ChartBar />} />
        </Routes>
        </div>
        </>
        )}
        </BrowserRouter>
        
  );
}

export default App;