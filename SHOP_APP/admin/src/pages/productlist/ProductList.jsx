import React, { useEffect } from 'react'
import './ProductList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { deleteProduct, getProducts } from '../../redux/apiCalls';



const ProductList = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      getProducts(dispatch)
    },[dispatch])

    const products  =useSelector((state)=> state.product.products)
    const handleDelete = (id) => {
      deleteProduct(id ,dispatch)
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
          field: "product",
          headerName: "product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListUser">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "inStock", headerName: "inStock", width: 200 },
        { field: "categories", headerName: "Categories", width: 200 },


        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];
  return (
    <div className='ProductList'>
         <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=> row._id}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList