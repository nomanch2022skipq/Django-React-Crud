import './App.css';
import ProductsData from './Home.jsx';
import Form from './AddProducut.jsx';
import Header from './Header.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Login from './login.jsx';
import { Route , Routes } from 'react-router-dom';
import { Logout } from './Logout.jsx';
import Register from './Register.jsx';




function App() {
  return <div>

    <Header />  
    <Routes>

      <Route exact path="/" element={<ProductsData />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/updateproduct/:id" element={<UpdateProduct />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route exact path="/register" element={<Register />} />

      
      <Route exact path="*" element={<Login />} />

      
    </Routes>
  </div>;
}

export default App;
