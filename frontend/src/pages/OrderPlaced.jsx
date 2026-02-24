// import React from 'react'
// import { FaCircleCheck } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// function OrderPlaced() {
//     const navigate=useNavigate()
//   return (
//     <div className='min-h-screen bg-[#fff9f6] flex flex-col justify-center items-center px-4 text-center relative overflow-hidden'>
//       <FaCircleCheck className='text-green-500 text-6xl mb-4'/>
//       <h1 className='text-3xl font-bold text-gray-800 mb-2'>Order Placed!
//       </h1>
//       <p className='text-gray-600 max-w-md mb-6'>Thank you for your purchase. Your order is being prepared.  
//         You can track your order status in the "My Orders" section.
//      </p>
//      <button className='bg-[#ff4d2d] hover:bg-[#e64526] text-white px-6 py-3 rounded-lg text-lg font-medium transition' onClick={()=>navigate("/my-orders")}>Back to my orders</button>
//     </div>
//   )
// }

// export default OrderPlaced






























import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function OrderPlaced() {

  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-[#fff5f2] flex flex-col justify-center items-center px-4 text-center'>

      {/* SUCCESS ICON */}
      <FaCircleCheck className='text-green-500 text-7xl mb-5 drop-shadow-md' />

      {/* HEADING */}
      <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3'>
        Order Confirmed! 🎉
      </h1>

      {/* MESSAGE */}
      <p className='text-gray-600 max-w-md mb-8 leading-relaxed'>
        Your delicious food is on the way 🍽️ <br />
        Our kitchen is preparing your order right now.
        You can track everything anytime from <span className='font-semibold'>My Orders</span>.
      </p>

      {/* BUTTON */}
      <button
        className='bg-[#E23744] hover:bg-[#c72f3c] text-white px-8 py-3 rounded-xl text-lg font-semibold transition shadow'
        onClick={() => navigate("/my-orders")}
      >
        Go to My Orders
      </button>

    </div>
  )
}

export default OrderPlaced
