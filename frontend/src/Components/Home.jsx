import axios from "axios";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom'
import Header from "./Header";
import { useReducer } from "react";
import secureLocalStorage from "react-secure-storage";
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import './Home.css'

const ProductsData = (props) => {

 
    

    const navigate = useNavigate()
    

    const base_url = import.meta.env.VITE_APP_BASE_URL_PRODUCTS
    const [productData, setProductData] = useState([]);
    // const navigate = useNavigate()
    const [num, setNum] = useState(0)
    const [data, setData] = useState([])

    
    useLayoutEffect(() => {
      

      if (!secureLocalStorage.getItem('access_token')) {
        return navigate('/login')
        
      }

      allProducts()
      
      
      },[num]);

      const allProducts = () => {
        axios({
          method: 'get',
          url: base_url,
          headers: {

            Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')

          },
            
        
        })
          .then(response => {
            setProductData(response.data);
          })
          .catch(error => {
            console.log(error);
          });

          axios({
            method: 'get',
            url: 'http://127.0.0.1:9001/api/categories/',
            headers:
            {
                Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')
            }
        }).then(response => {
            // console.log(response.data);
            setData(response.data)
        }
        ).catch(error => {
            console.log(error);
        });
      }
        

      const CategoryViseData = (categoryId) => {
        console.log('CategoryViseData called with categoryId:', categoryId);
      
        setProductData([]);
        axios({
          method: 'get',
          url: 'http://127.0.0.1:9001/api/productsincategory/',
          params: {
            category_id: categoryId
          },
          headers: {
            Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')
          },
          mode : 'cors'
          
        }).then(response => {
          console.log('Response from server:', response.data);
          setProductData(response.data);
          console.log('productData:', productData);
        }).catch(error => {
          console.log('Error in CategoryViseData:', error);
        });
      };

      const readMore = (productId) => {
        axios({
          method: 'get',
          url: base_url + productId + "/",
          headers: {
            Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')
          }
        })
          .then(response => {
            console.log(response.data);
            secureLocalStorage.setItem('recipe_id', productId)
            navigate("/recipe/"+productId+"/", {state: response.data})
          })
          .catch(error => {
            console.log(error);
          });
      }
      

    // const deleteProduct = async (productId) => {
    //   await axios(
    //     {
    //       method: 'delete',
    //       url: base_url + productId + "/",
    //       headers: {
    //         Authorization: 'Bearer ' + secureLocalStorage.getItem('access_token')
    //       }
    //     }
    //   )
    //   .then(response => {
    //     console.log("id " + productId+" deleted");
        
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }

    

      

      // const editProduct = (productId) => {
      //   secureLocalStorage.setItem('product_id', productId)
      //   return navigate('/updateproduct/' + productId + '/')
      // }
      

      const ToastDelete = (product_name) => {
        toast.error("Product " + product_name + " Deleted",
        {
          position: "bottom-right",
        });
      };
  
    return (
      
      <>
      <div className="main_sec">

      <div className="sidebar">
        <div className="side_title">
          <h3>Categories</h3>
        </div>
        <ul>
          <li onClick={allProducts}>All</li>
          {data.map(item => (
            <li key={item.id} onClick={() => CategoryViseData(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>


      </div>

      <div className="rightbar">
        <div className="rightbar_title">
          <h1>Recipes</h1>
        </div>
        <table className="styled-table">
    <thead>
    <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
    </thead>
    <tbody>
          {productData.map((product) => (
            <tr key={product.id} className="product-row">
              <td>{product.name}</td>
              <td>{product.category_name}</td>
              <td>{product.price} Rs</td>
              <td>{product.description.slice(0,12)}</td>
              <td>{product.created_at.slice(0, 10)}</td>
              <td className="action_btn">
              <button
                  className="readMore"
                  type="button"
                  onClick={() => readMore(product.id)}
                >
                  Read More ...
                </button>
              </td>
              {/* <td>
                <button
                  className="deleteButton"
                  type="button"
                  onClick={() => deleteProduct(product.id).then(setNum(num + 1)).then(ToastDelete(product.name))}
                >
                  Delete
                </button>
                
              </td> */}


            </tr>
          ))}
        </tbody>
</table>

      </div>
      </div>

      </>

    );
  };
  

export default ProductsData
