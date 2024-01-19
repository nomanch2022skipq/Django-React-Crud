import './App.css';
import ProductsData from './products.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Login from './login.jsx';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { Logout } from './Logout.jsx';


function App() {
  return <>

  <Header />
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsData />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/updateproduct/:id" element={<UpdateProduct />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route exact path="*" element={<Login />} />
      
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
