import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom'
import Header from "./Header";
import { useReducer } from "react";
import secureLocalStorage from "react-secure-storage";

const ProductsData = (props) => {

  
    

    const navigate = useNavigate()
    

    const base_url = import.meta.env.VITE_APP_BASE_URL_PRODUCTS
    const [productData, setProductData] = useState([]);
    // const navigate = useNavigate()
    

    useEffect(  () => {

      if (!secureLocalStorage.getItem('access_token')) {
        return navigate('/login')
        
      }

      <Header product={productData} />
      
      axios({
          method: 'get',
          url: base_url,
          headers: {

            Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')

          }
            
        
        })
          .then(response => {
            setProductData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      },[]);

    const deleteProduct = async (productId) => {
      await axios(
        {
          method: 'delete',
          url: base_url + productId + "/",
          headers: {
            Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')
          }
        }
      )
      .then(response => {
        console.log("id " + productId+" deleted");
      })
      .catch(error => {
        console.log(error);
      });
    }

    

      

      const editProduct = (productId) => {
        secureLocalStorage.setItem('product_id', productId)
        return navigate('/updateproduct/' + productId + '/')
      }
  
    return (
      
      <div className="dashboard-container">
        
        <h2>Product Dashboard</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.created_at.slice(0, 10)}</td>
                  <td>
                    <button
                      className="deleteButton"
                      type="button"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="editButton"
                      type="button"
                      onClick={() => editProduct(product.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

export default ProductsData
