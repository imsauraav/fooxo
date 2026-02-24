// import React, { useEffect, useState } from 'react'
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosSearch } from "react-icons/io";
// import { FiShoppingCart } from "react-icons/fi";
// import { useDispatch, useSelector } from 'react-redux';
// import { RxCross2 } from "react-icons/rx";
// import axios from 'axios';
// import { serverUrl } from '../App';
// import { setSearchItems, setUserData } from '../redux/userSlice';
// import { FaPlus } from "react-icons/fa6";
// import { TbReceipt2 } from "react-icons/tb";
// import { useNavigate } from 'react-router-dom';
// function Nav() {
//     const { userData, currentCity ,cartItems} = useSelector(state => state.user)
//         const { myShopData} = useSelector(state => state.owner)
//     const [showInfo, setShowInfo] = useState(false)
//     const [showSearch, setShowSearch] = useState(false)
//     const [query,setQuery]=useState("")
//     const dispatch = useDispatch()
//     const navigate=useNavigate()
//     const handleLogOut = async () => {
//         try {
//             const result = await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true })
//             dispatch(setUserData(null))
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const handleSearchItems=async () => {
//       try {
//         const result=await axios.get(`${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`,{withCredentials:true})
//     dispatch(setSearchItems(result.data))
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     useEffect(()=>{
//         if(query){
// handleSearchItems()
//         }else{
//               dispatch(setSearchItems(null))
//         }

//     },[query])
//     return (
//         <div className='w-full h-[80px] flex items-center justify-between md:justify-center gap-[30px] px-[20px] fixed top-0 z-[9999] bg-[#fff9f6] overflow-visible'>

//             {showSearch && userData.role == "user" && <div className='w-[90%] h-[70px]  bg-white shadow-xl rounded-lg items-center gap-[20px] flex fixed top-[80px] left-[5%] md:hidden'>
//                 <div className='flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400'>
//                     <FaLocationDot size={25} className=" text-[#ff4d2d]" />
//                     <div className='w-[80%] truncate text-gray-600'>{currentCity}</div>
//                 </div>
//                 <div className='w-[80%] flex items-center gap-[10px]'>
//                     <IoIosSearch size={25} className='text-[#ff4d2d]' />
//                     <input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full' onChange={(e)=>setQuery(e.target.value)} value={query}/>
//                 </div>
//             </div>}



//             <h1 className='text-3xl font-bold mb-2 text-[#ff4d2d]'>Vingo</h1>
//             {userData.role == "user" && <div className='md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center gap-[20px] hidden md:flex'>
//                 <div className='flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400'>
//                     <FaLocationDot size={25} className=" text-[#ff4d2d]" />
//                     <div className='w-[80%] truncate text-gray-600'>{currentCity}</div>
//                 </div>
//                 <div className='w-[80%] flex items-center gap-[10px]'>
//                     <IoIosSearch size={25} className='text-[#ff4d2d]' />
//                     <input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full' onChange={(e)=>setQuery(e.target.value)} value={query}/>
//                 </div>
//             </div>}

//             <div className='flex items-center gap-4'>
//                 {userData.role == "user" && (showSearch ? <RxCross2 size={25} className='text-[#ff4d2d] md:hidden' onClick={() => setShowSearch(false)} /> : <IoIosSearch size={25} className='text-[#ff4d2d] md:hidden' onClick={() => setShowSearch(true)} />)
//                 }
//                 {userData.role == "owner"? <>
//                  {myShopData && <> <button className='hidden md:flex items-center gap-1 p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]' onClick={()=>navigate("/add-item")}>
//                         <FaPlus size={20} />
//                         <span>Add Food Item</span>
//                     </button>
//                       <button className='md:hidden flex items-center  p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]' onClick={()=>navigate("/add-item")}>
//                         <FaPlus size={20} />
//                     </button></>}
                   
//                     <div className='hidden md:flex items-center gap-2 cursor-pointer relative px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] font-medium' onClick={()=>navigate("/my-orders")}>
//                       <TbReceipt2 size={20}/>
//                       <span>My Orders</span>
                      
//                     </div>
//                      <div className='md:hidden flex items-center gap-2 cursor-pointer relative px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] font-medium' onClick={()=>navigate("/my-orders")}>
//                       <TbReceipt2 size={20}/>
                      
//                     </div>
//                 </>: (
//                     <>
//                  {userData.role=="user" &&    <div className='relative cursor-pointer' onClick={()=>navigate("/cart")}>
//                     <FiShoppingCart size={25} className='text-[#ff4d2d]' />
//                     <span className='absolute right-[-9px] top-[-12px] text-[#ff4d2d]'>{cartItems.length}</span>
//                 </div>}   
           


//                 <button className='hidden md:block px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] text-sm font-medium' onClick={()=>navigate("/my-orders")}>
//                     My Orders
//                 </button>
//                     </>
//                 )}



//                 <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#ff4d2d] text-white text-[18px] shadow-xl font-semibold cursor-pointer' onClick={() => setShowInfo(prev => !prev)}>
//                     {userData?.fullName.slice(0, 1)}
//                 </div>
//                 {showInfo && <div className={`fixed top-[80px] right-[10px] 
//                     ${userData.role=="deliveryBoy"?"md:right-[20%] lg:right-[40%]":"md:right-[10%] lg:right-[25%]"} w-[180px] bg-white shadow-2xl rounded-xl p-[20px] flex flex-col gap-[10px] z-[9999]`}>
//                     <div className='text-[17px] font-semibold'>{userData.fullName}</div>
//                     {userData.role=="user" && <div className='md:hidden text-[#ff4d2d] font-semibold cursor-pointer' onClick={()=>navigate("/my-orders")}>My Orders</div>}
                    
//                     <div className='text-[#ff4d2d] font-semibold cursor-pointer' onClick={handleLogOut}>Log Out</div>
//                 </div>}

//             </div>
//         </div>
//     )
// }


// export default Nav



































































import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { serverUrl } from '../App';
import { setSearchItems, setUserData } from '../redux/userSlice';
import { FaPlus } from "react-icons/fa6";
import { TbReceipt2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function Nav() {

const { userData, currentCity ,cartItems} = useSelector(state => state.user)
const { myShopData} = useSelector(state => state.owner)

const [showInfo, setShowInfo] = useState(false)
const [showSearch, setShowSearch] = useState(false)
const [query,setQuery]=useState("")

const dispatch = useDispatch()
const navigate=useNavigate()

const handleLogOut = async () => {
 await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true })
 dispatch(setUserData(null))
}

const handleSearchItems=async () => {
 const result=await axios.get(`${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`,{withCredentials:true})
 dispatch(setSearchItems(result.data))
}

useEffect(()=>{
 if(query) handleSearchItems()
 else dispatch(setSearchItems(null))
},[query])

return (
<div className='w-full h-[80px] flex items-center justify-between md:justify-center gap-[30px] px-[20px] fixed top-0 z-[9999] bg-[#fff9f6]'>

{/* MOBILE SEARCH BOX */}
{showSearch && userData.role=="user" &&
<div className='w-[90%] h-[70px] bg-white shadow-xl rounded-lg items-center gap-[20px] flex fixed top-[80px] left-[5%] md:hidden'>
<div className='flex items-center w-[30%] gap-[10px] px-[10px] border-r-2 border-gray-400'>
<FaLocationDot size={25} className="text-[#E23744]" />
<div className='truncate text-gray-600'>{currentCity}</div>
</div>
<div className='w-[80%] flex items-center gap-[10px]'>
<IoIosSearch size={25} className='text-[#E23744]' />
<input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full'
onChange={(e)=>setQuery(e.target.value)} value={query}/>
</div>
</div>}

{/* FOoxo LOGO */}
<h1 onClick={()=>navigate("/")} className="group text-[38px] md:text-[42px] font-extrabold italic tracking-tight cursor-pointer select-none flex items-center">
<span className="text-black">F</span>

<span className="relative mx-1 flex items-center">
<span className="text-[#E23744] transition group-hover:text-yellow-400">oo</span>

<div className="absolute left-[-6px] bottom-[6px] w-[10px] h-[10px] bg-pink-300 rounded-full opacity-70 group-hover:bg-yellow-300"></div>
<div className="absolute right-[-6px] bottom-[6px] w-[10px] h-[10px] bg-pink-300 rounded-full opacity-70 group-hover:bg-yellow-300"></div>

<div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[26px] h-[14px] border-b-[4px] border-[#E23744] rounded-b-full transition group-hover:border-yellow-400"></div>
</span>

<span className="text-black">x</span>
<span className="text-black">o</span>
</h1>

{/* DESKTOP SEARCH */}
{userData.role=="user" &&
<div className='md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center gap-[20px] hidden md:flex'>
<div className='flex items-center w-[30%] gap-[10px] px-[10px] border-r-2 border-gray-400'>
<FaLocationDot size={25} className="text-[#E23744]" />
<div className='truncate text-gray-600'>{currentCity}</div>
</div>
<div className='w-[80%] flex items-center gap-[10px]'>
<IoIosSearch size={25} className='text-[#E23744]' />
<input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full'
onChange={(e)=>setQuery(e.target.value)} value={query}/>
</div>
</div>}

<div className='flex items-center gap-4'>

{/* MOBILE SEARCH ICON */}
{userData.role=="user" && (
showSearch ?
<RxCross2 size={25} className='text-[#E23744] md:hidden cursor-pointer' onClick={()=>setShowSearch(false)}/> :
<IoIosSearch size={25} className='text-[#E23744] md:hidden cursor-pointer' onClick={()=>setShowSearch(true)}/>
)}

{/* USER CART */}
{userData.role=="user" &&
<div className='relative cursor-pointer' onClick={()=>navigate("/cart")}>
<FiShoppingCart size={25} className='text-[#E23744]' />
<span className='absolute right-[-9px] top-[-12px] text-[#E23744]'>{cartItems.length}</span>
</div>}

{/* OWNER BUTTONS */}
{userData.role=="owner" && <>
{myShopData && <>
<button className='hidden md:flex items-center gap-1 p-2 rounded-full bg-[#E23744]/10 text-[#E23744]' onClick={()=>navigate("/add-item")}>
<FaPlus size={20}/> <span>Add Food Item</span>
</button>

<button className='md:hidden flex p-2 rounded-full bg-[#E23744]/10 text-[#E23744]' onClick={()=>navigate("/add-item")}>
<FaPlus size={20}/>
</button>
</>}

<div className='hidden md:flex items-center gap-2 px-3 py-1 rounded-lg bg-[#E23744]/10 text-[#E23744]' onClick={()=>navigate("/my-orders")}>
<TbReceipt2 size={20}/> <span>My Orders</span>
</div>

<div className='md:hidden flex items-center gap-2 px-3 py-1 rounded-lg bg-[#E23744]/10 text-[#E23744]' onClick={()=>navigate("/my-orders")}>
<TbReceipt2 size={20}/>
</div>
</>}

{/* USER MY ORDERS DESKTOP */}
{userData.role=="user" &&
<button className='hidden md:block px-3 py-1 rounded-lg bg-[#E23744]/10 text-[#E23744]' onClick={()=>navigate("/my-orders")}>
My Orders
</button>}

{/* PROFILE */}
<div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#E23744] text-white text-[18px] shadow-xl font-semibold cursor-pointer'
onClick={()=>setShowInfo(prev=>!prev)}>
{userData?.fullName.slice(0,1)}
</div>

{showInfo &&
<div className='fixed top-[80px] right-[10px] md:right-[10%] lg:right-[25%] w-[180px] bg-white shadow-2xl rounded-xl p-[20px] flex flex-col gap-[10px]'>
<div className='text-[17px] font-semibold'>{userData.fullName}</div>

{userData.role=="user" &&
<div className='md:hidden text-[#E23744] font-semibold cursor-pointer' onClick={()=>navigate("/my-orders")}>
My Orders
</div>}

<div className='text-[#E23744] font-semibold cursor-pointer' onClick={handleLogOut}>Log Out</div>
</div>}

</div>
</div>
)
}

export default Nav





























// import React, { useEffect, useState } from 'react'
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosSearch } from "react-icons/io";
// import { FiShoppingCart } from "react-icons/fi";
// import { useDispatch, useSelector } from 'react-redux';
// import { RxCross2 } from "react-icons/rx";
// import axios from 'axios';
// import { serverUrl } from '../App';
// import { setSearchItems, setUserData } from '../redux/userSlice';
// import { FaPlus } from "react-icons/fa6";
// import { TbReceipt2 } from "react-icons/tb";
// import { useNavigate } from 'react-router-dom';

// function Nav() {

//   const { userData, currentCity, cartItems } = useSelector(state => state.user)
//   const { myShopData } = useSelector(state => state.owner)

//   const [showInfo, setShowInfo] = useState(false)
//   const [showSearch, setShowSearch] = useState(false)
//   const [query, setQuery] = useState("")

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleLogOut = async () => {
//     try {
//       await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true })
//       dispatch(setUserData(null))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const handleSearchItems = async () => {
//     try {
//       const result = await axios.get(
//         `${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`,
//         { withCredentials: true }
//       )
//       dispatch(setSearchItems(result.data))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     if (query) handleSearchItems()
//     else dispatch(setSearchItems(null))
//   }, [query])

//   return (
//     <div className='w-full h-[80px] flex items-center justify-between md:justify-center gap-[30px] px-[20px] fixed top-0 z-[9999] bg-[#fff5f2] shadow-sm'>

//       {/* LOGO — ZOMATO STYLE FEEL */}
//       <h1
//         onClick={() => navigate("/")}
//         className='text-[34px] font-extrabold tracking-tight leading-none cursor-pointer select-none flex items-center'
//       >
//         <span className='text-black'>F</span>
//         <span className='text-[#E23744]'>oo</span>
//         <span className='text-black'>x</span>
//         <span className='text-black'>o</span>
//       </h1>

//       {/* DESKTOP SEARCH */}
//       {userData.role == "user" && (
//         <div className='md:w-[60%] lg:w-[40%] h-[60px] bg-white shadow-lg rounded-xl items-center gap-[20px] hidden md:flex px-4'>
//           <div className='flex items-center w-[30%] gap-[10px] border-r border-gray-300 pr-3'>
//             <FaLocationDot size={20} className=" text-[#E23744]" />
//             <div className='truncate text-gray-600 text-sm'>{currentCity}</div>
//           </div>
//           <div className='flex items-center gap-[10px] w-full'>
//             <IoIosSearch size={20} className='text-[#E23744]' />
//             <input
//               type="text"
//               placeholder='Search delicious food...'
//               className='text-gray-700 outline-0 w-full'
//               onChange={(e) => setQuery(e.target.value)}
//               value={query}
//             />
//           </div>
//         </div>
//       )}

//       <div className='flex items-center gap-4'>

//         {userData.role == "user" && (
//           <div className='relative cursor-pointer' onClick={() => navigate("/cart")}>
//             <FiShoppingCart size={25} className='text-[#E23744]' />
//             <span className='absolute -top-2 -right-2 text-xs bg-[#E23744] text-white rounded-full px-1'>
//               {cartItems.length}
//             </span>
//           </div>
//         )}

//         <button
//           className='hidden md:block px-3 py-1 rounded-lg bg-[#E23744]/10 text-[#E23744] text-sm font-medium'
//           onClick={() => navigate("/my-orders")}>
//           My Orders
//         </button>

//         <div
//           className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#E23744] text-white text-[18px] shadow-lg font-semibold cursor-pointer'
//           onClick={() => setShowInfo(prev => !prev)}
//         >
//           {userData?.fullName.slice(0, 1)}
//         </div>

//         {showInfo && (
//           <div className='fixed top-[80px] right-[10px] md:right-[10%] lg:right-[25%] w-[180px] bg-white shadow-2xl rounded-xl p-[20px] flex flex-col gap-[10px] z-[9999]'>
//             <div className='text-[17px] font-semibold'>{userData.fullName}</div>
//             <div
//               className='text-[#E23744] font-semibold cursor-pointer'
//               onClick={handleLogOut}>
//               Log Out
//             </div>
//           </div>
//         )}

//       </div>

//     </div>
//   )
// }

// export default Nav




























































































