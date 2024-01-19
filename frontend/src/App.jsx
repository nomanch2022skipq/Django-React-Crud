import './App.css';
import ProductsData from './Home.jsx';
import Form from './AddProducut.jsx';
import Header from './Header.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Login from './login.jsx';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { Logout } from './Logout.jsx';


function App() {
  return <>

  
  {/* <BrowserRouter> */}
    <Header />  
    <Routes>


      <Route exact path="/" element={<ProductsData />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/updateproduct/:id" element={<UpdateProduct />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route exact path="*" element={<Login />} />
      
    </Routes>
  {/* </BrowserRouter> */}
  </>;
}

export default App;
