// import React from 'react'
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartItemCard from '../components/CartItemCard';
// function CartPage() {
//     const navigate = useNavigate()
//     const { cartItems, totalAmount } = useSelector(state => state.user)
//     return (
//         <div className='min-h-screen bg-[#fff9f6] flex justify-center p-6'>
//             <div className='w-full max-w-[800px]'>
//                 <div className='flex items-center gap-[20px] mb-6 '>
//                     <div className=' z-[10] ' onClick={() => navigate("/")}>
//                         <IoIosArrowRoundBack size={35} className='text-[#ff4d2d]' />
//                     </div>
//                     <h1 className='"text-2xl font-bold  text-start'>Your Cart</h1>
//                 </div>
//                 {cartItems?.length == 0 ? (
//                     <p className='text-gray-500 text-lg text-center'>Your Cart is Empty</p>
//                 ) : (<>
//                     <div className='space-y-4'>
//                         {cartItems?.map((item, index) => (
//                             <CartItemCard data={item} key={index} />
//                         ))}
//                     </div>
//                     <div className='mt-6 bg-white p-4 rounded-xl shadow flex justify-between items-center border'>

//                         <h1 className='text-lg font-semibold'>Total Amount</h1>
//                         <span className='text-xl font-bold text-[#ff4d2d]'>₹{totalAmount}</span>
//                     </div>
//                     <div className='mt-4 flex justify-end' > 
//                         <button className='bg-[#ff4d2d] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#e64526] transition cursor-pointer' onClick={()=>navigate("/checkout")}>Proceed to CheckOut</button>
//                     </div>
//                 </>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default CartPage


























import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItemCard from '../components/CartItemCard';

function CartPage() {

  const navigate = useNavigate()
  const { cartItems, totalAmount } = useSelector(state => state.user)

  return (
    <div className='min-h-screen bg-[#fff5f2] flex justify-center px-4 py-10'>

      <div className='w-full max-w-[820px]'>

        {/* HEADER */}
        <div className='flex items-center gap-4 mb-8'>

          <div
            onClick={() => navigate("/")}
            className='cursor-pointer p-1 rounded-full hover:bg-white shadow-sm'>
            <IoIosArrowRoundBack size={36} className='text-[#E23744]' />
          </div>

          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>
            Your Cart
          </h1>

        </div>

        {/* EMPTY CART */}
        {cartItems?.length === 0 ? (

          <p className='text-gray-500 text-lg text-center mt-20'>
            Your cart is empty 😔
          </p>

        ) : (

          <>
            {/* ITEMS */}
            <div className='space-y-4'>
              {cartItems.map((item, index) => (
                <CartItemCard data={item} key={index} />
              ))}
            </div>

            {/* TOTAL */}
            <div className='mt-8 bg-white p-5 rounded-2xl shadow-md flex justify-between items-center border'>

              <h1 className='text-lg font-semibold text-gray-700'>
                Total Amount
              </h1>

              <span className='text-2xl font-bold text-[#E23744]'>
                ₹{totalAmount}
              </span>

            </div>

            {/* CHECKOUT */}
            <div className='mt-6 flex justify-end'>

              <button
                className='bg-[#E23744] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#c72f3c] transition'
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  )
}

export default CartPage