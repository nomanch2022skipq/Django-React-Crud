import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom'
import Header from "./Header";


const ProductsData = (props) => {

    const navigate = useNavigate()
    

    const base_url = 'http://127.0.0.1:9001/api/products/'
    const [productData, setProductData] = useState([]);
    // const navigate = useNavigate()

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
        console.log("Data Deleted");
       navigate('/')
      })
      .catch(error => {
        console.log(error);
      });
    }

    useEffect(  () => {
      if (!localStorage.getItem('access_token')) {
        return navigate('/login')
        
      }
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
      },[]);

      

      const editProduct = (productId) => {
        localStorage.setItem('product_id', productId)
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
