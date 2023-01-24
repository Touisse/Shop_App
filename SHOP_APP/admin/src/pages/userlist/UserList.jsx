import React, { useEffect } from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import "./UserList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { deleteUser, getUsers } from '../../redux/apiCalls'

export default function UserList() {
  const dispatch = useDispatch()

    useEffect(()=>{
      getUsers(dispatch)
    },[dispatch])

    const users  =useSelector((state)=> state.user.users)
    const handleDelete = (id) => {
      deleteUser(id ,dispatch)
    };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id+"1"}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}