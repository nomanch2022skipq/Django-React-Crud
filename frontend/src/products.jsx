import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ProductsData = (props) => {

    const navigate = useNavigate()
    if (!localStorage.getItem('access_token')) {
      // window.location.href = '/login'
      navigate('/login')
    }

    const base_url = 'http://127.0.0.1:9001/api/products/'
    const [productData, setProductData] = useState([]);
    // const navigate = useNavigate()
    const refresh = () => window.location.reload(true)

    if (!localStorage.getItem('access_token')) {
      window.location.href = '/login'
    }


    useEffect(() => {
        axios({
          method: 'get',
          url: base_url,
          headers: {

            Authorization: 'Bearer ' + localStorage.getItem('access_token')

          }
            
        
        })
          .then(response => {
            setProductData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      const deleteProduct = async (productId) => {
        await axios(
          {
            method: 'delete',
            url: base_url + productId + "/",
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
          }
        )
        .then(response => {
          refresh()
          console.log("Data Deleted");
        })
        .catch(error => {
          console.log(error);
        });
      }

      const editProduct = (productId) => {
        localStorage.setItem('product_id', productId)
        window.location.href = '/updateproduct/' + productId + '/'
      }


    return (   
            
        productData.map((product) => (
        <div className="main_product_div" key={product.id}>
        <ul className="data"  style={{listStyle: "none"}}>
          {/* <li>Id : {product.id}</li> */}
          <li>Name : {product.name}</li>
          <li>Price : {product.price}</li>
          <li>Description : {product.description}</li>
          <button type="button" onClick={() => deleteProduct(product.id)}>Delete</button>
          <button className="editButtom" type="button" onClick={() => editProduct(product.id)}>Edit</button>
        </ul>
        </div>
        

      ))
    );
};

export default ProductsData;