import React, { useState } from 'react'
import './Product.css'
import { Link ,useLocation} from "react-router-dom";
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import { Publish } from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux"
import { updateProduct } from '../../redux/apiCalls';
import swal from 'sweetalert';


const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state)=>
    state.product.products.find((product)=> product._id === productId)
    )

    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
     console.log(inputs)
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };
    const handleClick = (e) => {
      e.preventDefault();
      
            const product1 = { ...inputs};
            updateProduct(product._id,product1, dispatch);
            swal({
              title: "Product Updated",
              text: "The Product has been successfully Updated.",
              icon: "success",
              button: "Go Back!",
            });
        }
      
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                 
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
              <label>Product Name</label>
            <input name="title"   onChange={handleChange} type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text"  name="desc"  onChange={handleChange} placeholder={product.desc} />
            <label>Price</label>
            <input type="number" name="price"  onChange={handleChange} placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" onChange={handleChange} id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button onClick={handleClick} className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Product