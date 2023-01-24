
import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
import './WidgetLg.css'
import {format} from "timeago.js"

const WidgetLg = () => {

  const [orders,SetOrders]= useState([])

  useEffect(()=>{
const GetOrders = async()=>{
  try{
const res = await userRequest.get("Orders")
SetOrders(res.data)
  }catch{

  }
};
GetOrders()
  },[])


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='WidgetLg'>
      <span className="widgetLgTitle">Latest Transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
            <img
              src={
                order.userImg ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetLgImg"
            />
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">DH {order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>

    </div>
  )
}

export default WidgetLg