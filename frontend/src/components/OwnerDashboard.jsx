// import React from 'react'
// import Nav from './NaV.JSX'
// import { useSelector } from 'react-redux'
// import { FaUtensils } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// import { FaPen } from "react-icons/fa";
// import OwnerItemCard from './ownerItemCard';
// function OwnerDashboard() {
//   const { myShopData } = useSelector(state => state.owner)
//   const navigate = useNavigate()

  
//   return (
//     <div className='w-full min-h-screen bg-[#fff9f6] flex flex-col items-center'>
//       <Nav />
//       {!myShopData &&
//         <div className='flex justify-center items-center p-4 sm:p-6'>
//           <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
//             <div className='flex flex-col items-center text-center'>
//               <FaUtensils className='text-[#ff4d2d] w-16 h-16 sm:w-20 sm:h-20 mb-4' />
//               <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>Add Your Restaurant</h2>
//               <p className='text-gray-600 mb-4 text-sm sm:text-base'>Join our food delivery platform and reach thousands of hungry customers every day.
//               </p>
//               <button className='bg-[#ff4d2d] text-white px-5 sm:px-6 py-2 rounded-full font-medium shadow-md hover:bg-orange-600 transition-colors duration-200' onClick={() => navigate("/create-edit-shop")}>
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       }

//       {myShopData &&
//         <div className='w-full flex flex-col items-center gap-6 px-4 sm:px-6'>
//           <h1 className='text-2xl sm:text-3xl text-gray-900 flex items-center gap-3 mt-8 text-center'><FaUtensils className='text-[#ff4d2d] w-14 h-14 ' />Welcome to {myShopData.name}</h1>

//           <div className='bg-white shadow-lg rounded-xl overflow-hidden border border-orange-100 hover:shadow-2xl transition-all duration-300 w-full max-w-3xl relative'>
//             <div className='absolute top-4 right-4 bg-[#ff4d2d] text-white p-2 rounded-full shadow-md hover:bg-orange-600 transition-colors cursor-pointer' onClick={()=>navigate("/create-edit-shop")}>
// <FaPen size={20}/>
//             </div>
//              <img src={myShopData.image} alt={myShopData.name} className='w-full h-48 sm:h-64 object-cover'/>
//              <div className='p-4 sm:p-6'>
//               <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>{myShopData.name}</h1>
//               <p className='text-gray-500 '>{myShopData.city},{myShopData.state}</p>
//               <p className='text-gray-500 mb-4'>{myShopData.address}</p>
//             </div>
//           </div>

//           {myShopData.items.length==0 && 
//             <div className='flex justify-center items-center p-4 sm:p-6'>
//           <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
//             <div className='flex flex-col items-center text-center'>
//               <FaUtensils className='text-[#ff4d2d] w-16 h-16 sm:w-20 sm:h-20 mb-4' />
//               <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>Add Your Food Item</h2>
//               <p className='text-gray-600 mb-4 text-sm sm:text-base'>Share your delicious creations with our customers by adding them to the menu.
//               </p>
//               <button className='bg-[#ff4d2d] text-white px-5 sm:px-6 py-2 rounded-full font-medium shadow-md hover:bg-orange-600 transition-colors duration-200' onClick={() => navigate("/add-item")}>
//               Add Food
//               </button>
//             </div>
//           </div>
//         </div>
//             }

//             {myShopData.items.length>0 && <div className='flex flex-col items-center gap-4 w-full max-w-3xl '>
//               {myShopData.items.map((item,index)=>(
//                 <OwnerItemCard data={item} key={index}/>
//               ))}
//               </div>}
            
//         </div>}



//     </div>
//   )
// }

// export default OwnerDashboard

























import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import OwnerItemCard from './ownerItemCard';

function OwnerDashboard() {

  const { myShopData } = useSelector(state => state.owner)
  const navigate = useNavigate()

  return (
    <div className='w-full min-h-screen bg-[#fff5f2] flex flex-col items-center'>
      <Nav />

      {/* If shop not created */}
      {!myShopData &&
        <div className='flex justify-center items-center p-4 sm:p-6 mt-10'>
          <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-100'>
            <div className='flex flex-col items-center text-center'>
              <FaUtensils className='text-[#E23744] w-16 h-16 mb-4' />
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>
                Add Your Restaurant
              </h2>
              <p className='text-gray-600 mb-4 text-sm sm:text-base'>
                Join our platform and start selling today.
              </p>
              <button
                className='bg-[#E23744] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-[#c72f3c] transition'
                onClick={() => navigate("/create-edit-shop")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      }

      {/* If shop exists */}
      {myShopData &&
        <div className='w-full flex flex-col items-center gap-6 px-4 sm:px-6'>

          {/* Shop Header */}
          <h1 className='text-2xl sm:text-3xl text-gray-900 flex items-center gap-3 mt-8 text-center'>
            <FaUtensils className='text-[#E23744] w-12 h-12' />
            Welcome, {myShopData.name}
          </h1>

          {/* Shop Card */}
          <div className='bg-white shadow-lg rounded-xl overflow-hidden border border-red-100 w-full max-w-3xl relative'>

            <div
              className='absolute top-4 right-4 bg-[#E23744] text-white p-2 rounded-full shadow cursor-pointer hover:bg-[#c72f3c]'
              onClick={() => navigate("/create-edit-shop")}
            >
              <FaPen size={18} />
            </div>

            <img
              src={myShopData.image}
              alt={myShopData.name}
              className='w-full h-48 sm:h-64 object-cover'
            />

            <div className='p-4 sm:p-6'>
              <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>
                {myShopData.name}
              </h1>
              <p className='text-gray-500'>
                {myShopData.city}, {myShopData.state}
              </p>
              <p className='text-gray-500'>
                {myShopData.address}
              </p>
            </div>
          </div>

          {/* ALWAYS SHOW ADD FOOD BUTTON */}
          <div className='flex justify-center items-center w-full max-w-3xl'>
            <button
              className='w-full bg-[#E23744] text-white py-3 rounded-xl font-semibold shadow hover:bg-[#c72f3c] transition'
              onClick={() => navigate("/add-item")}
            >
              + Add Food Item
            </button>
          </div>

          {/* Items List */}
          {myShopData.items.length > 0 &&
            <div className='flex flex-col items-center gap-4 w-full max-w-3xl'>
              {myShopData.items.map((item, index) => (
                <OwnerItemCard data={item} key={index} />
              ))}
            </div>
          }

        </div>
      }
    </div>
  )
}

export default OwnerDashboard
