// import axios from 'axios';
// import React from 'react'
// import { MdPhone } from "react-icons/md";
// import { serverUrl } from '../App';
// import { useDispatch } from 'react-redux';
// import { updateOrderStatus } from '../redux/userSlice';
// import { useState } from 'react';
// import { useEffect } from 'react';
// function OwnerOrderCard({ data }) {
//     const [availableBoys,setAvailableBoys]=useState([])
// const dispatch=useDispatch()
//     const handleUpdateStatus=async (orderId,shopId,status) => {
//         try {
//             const result=await axios.post(`${serverUrl}/api/order/update-status/${orderId}/${shopId}`,{status},{withCredentials:true})
//              dispatch(updateOrderStatus({orderId,shopId,status}))
//              setAvailableBoys(result.data.availableBoys)
//              console.log(result.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }


  
//     return (
//         <div className='bg-white rounded-lg shadow p-4 space-y-4'>
//             <div>
//                 <h2 className='text-lg font-semibold text-gray-800'>{data.user.fullName}</h2>
//                 <p className='text-sm text-gray-500'>{data.user.email}</p>
//                 <p className='flex items-center gap-2 text-sm text-gray-600 mt-1'><MdPhone /><span>{data.user.mobile}</span></p>
//                 {data.paymentMethod=="online"?<p className='gap-2 text-sm text-gray-600'>payment: {data.payment?"true":"false"}</p>:<p className='gap-2 text-sm text-gray-600'>Payment Method: {data.paymentMethod}</p>}
                
//             </div>

//             <div className='flex items-start flex-col gap-2 text-gray-600 text-sm'>
//                 <p>{data?.deliveryAddress?.text}</p>
//                 <p className='text-xs text-gray-500'>Lat: {data?.deliveryAddress.latitude} , Lon {data?.deliveryAddress.longitude}</p>
//             </div>

//             <div className='flex space-x-4 overflow-x-auto pb-2'>
//                 {data.shopOrders.shopOrderItems.map((item, index) => (
//                     <div key={index} className='flex-shrink-0 w-40 border rounded-lg p-2 bg-white"'>
//                         <img src={item.item.image} alt="" className='w-full h-24 object-cover rounded' />
//                         <p className='text-sm font-semibold mt-1'>{item.name}</p>
//                         <p className='text-xs text-gray-500'>Qty: {item.quantity} x ₹{item.price}</p>
//                     </div>
//                 ))}
//             </div>

// <div className='flex justify-between items-center mt-auto pt-3 border-t border-gray-100'>
// <span className='text-sm'>status: <span className='font-semibold capitalize text-[#ff4d2d]'>{data.shopOrders.status}</span>
// </span>

// <select  className='rounded-md border px-3 py-1 text-sm focus:outline-none focus:ring-2 border-[#ff4d2d] text-[#ff4d2d]' onChange={(e)=>handleUpdateStatus(data._id,data.shopOrders.shop._id,e.target.value)}>
//     <option value="">Change</option>
// <option value="pending">Pending</option>
// <option value="preparing">Preparing</option>
// <option value="out of delivery">Out Of Delivery</option>
// </select>

// </div>

// {data.shopOrders.status=="out of delivery" && 
// <div className="mt-3 p-2 border rounded-lg text-sm bg-orange-50 gap-4">
//     {data.shopOrders.assignedDeliveryBoy?<p>Assigned Delivery Boy:</p>:<p>Available Delivery Boys:</p>}
//    {availableBoys?.length>0?(
//      availableBoys.map((b,index)=>(
//         <div className='text-gray-800'>{b.fullName}-{b.mobile}</div>
//      ))
//    ):data.shopOrders.assignedDeliveryBoy?<div>{data.shopOrders.assignedDeliveryBoy.fullName}-{data.shopOrders.assignedDeliveryBoy.mobile}</div>:<div>Waiting for delivery boy to accept</div>}
// </div>}

// <div className='text-right font-bold text-gray-800 text-sm'>
//  Total: ₹{data.shopOrders.subtotal}
// </div>
//         </div>
//     )
// }

// export default OwnerOrderCard


















































import axios from 'axios'
import React, { useState } from 'react'
import { MdPhone } from "react-icons/md"
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { updateOrderStatus } from '../redux/userSlice'

function OwnerOrderCard({ data }) {

const [availableBoys,setAvailableBoys]=useState([])
const dispatch=useDispatch()

const handleUpdateStatus=async (orderId,shopId,status)=>{
try{
const result=await axios.post(
`${serverUrl}/api/order/update-status/${orderId}/${shopId}`,
{status},
{withCredentials:true}
)

dispatch(updateOrderStatus({orderId,shopId,status}))
setAvailableBoys(result.data.availableBoys)

}catch(err){
console.log(err)
}
}

return (

<div className='bg-white rounded-2xl shadow hover:shadow-xl transition p-5 space-y-4 border'>

{/* CUSTOMER HEADER */}
<div className='flex justify-between border-b pb-3'>

<div>
<h2 className='text-lg font-semibold text-gray-800'>{data.user.fullName}</h2>
<p className='text-sm text-gray-500'>{data.user.email}</p>

<p className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
<MdPhone/> {data.user.mobile}
</p>
</div>

<div className='text-right space-y-1'>
<span className='text-xs px-3 py-1 rounded-full bg-orange-100 text-[#E23744] font-medium capitalize'>
{data.shopOrders.status}
</span>

<p className='text-xs text-gray-500'>
{data.paymentMethod==="online"
? `Payment : ${data.payment?"Paid":"Pending"}`
: `Payment : ${data.paymentMethod}`}
</p>
</div>

</div>

{/* ADDRESS */}
<div className='bg-gray-50 rounded-xl p-3 text-sm text-gray-600'>
<p>{data.deliveryAddress?.text}</p>
<p className='text-xs text-gray-400 mt-1'>
Lat: {data.deliveryAddress.latitude} , Lon: {data.deliveryAddress.longitude}
</p>
</div>

{/* ITEMS */}
<div className='flex gap-4 overflow-x-auto pb-2'>

{data.shopOrders.shopOrderItems.map((item,index)=>(
<div key={index}
className='min-w-[150px] bg-white border rounded-xl p-3 shadow-sm hover:shadow-md transition'>

<img src={item.item.image}
className='w-full h-24 object-cover rounded-lg'/>

<p className='text-sm font-semibold mt-2 truncate'>{item.name}</p>

<p className='text-xs text-gray-500'>
Qty: {item.quantity} × ₹{item.price}
</p>

</div>
))}

</div>

{/* STATUS ACTION */}
<div className='flex justify-between items-center border-t pt-3'>

<span className='text-sm'>
Status :
<span className='font-semibold capitalize text-[#E23744] ml-1'>
{data.shopOrders.status}
</span>
</span>

<select
className='rounded-full border px-4 py-1 text-sm focus:outline-none border-[#E23744] text-[#E23744]'
onChange={(e)=>handleUpdateStatus(data._id,data.shopOrders.shop._id,e.target.value)}
>

<option value="">Change</option>
<option value="pending">Pending</option>
<option value="preparing">Preparing</option>
<option value="out of delivery">Out Of Delivery</option>

</select>

</div>

{/* DELIVERY BOY */}
{data.shopOrders.status==="out of delivery" &&

<div className='bg-orange-50 rounded-xl p-3 text-sm space-y-1'>

{data.shopOrders.assignedDeliveryBoy
? <p className='font-medium'>Assigned Delivery Boy</p>
: <p className='font-medium'>Available Delivery Boys</p>
}

{availableBoys?.length>0
? availableBoys.map((b,i)=>(
<div key={i} className='text-gray-700'>
{b.fullName} - {b.mobile}
</div>
))
: data.shopOrders.assignedDeliveryBoy
? <div>{data.shopOrders.assignedDeliveryBoy.fullName} - {data.shopOrders.assignedDeliveryBoy.mobile}</div>
: <div>Waiting for delivery boy to accept</div>
}

</div>
}

{/* TOTAL */}
<div className='text-right font-bold text-gray-900 text-sm pt-2'>
Total : ₹{data.shopOrders.subtotal}
</div>

</div>
)
}

export default OwnerOrderCard