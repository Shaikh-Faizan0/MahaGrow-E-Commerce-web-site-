import React from 'react'
import logo from "../assets/logo.png"
import { toast } from 'react-hot-toast'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export const NavBar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const cart = useSelector(state => state.cart);

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <NavLink to="/">
                <div className='flex '>
                    <img src={logo} alt="MahaGrow" loading="lazy" />
                    <h1 className='text-white font-bold text-2xl italic'>MahaGrow</h1>
                </div>
            </NavLink>

            <nav>
                <ul className='flex gap-x-6 text-white '>
                    <li className='hover:text-green-600'>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li className='hover:text-green-600'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='hover:text-green-600'>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                {
                    !isLoggedIn &&
                    <NavLink to="/login" >
                        <button className='bg-[#0d1115] text-white py-[8px] px-[12px] rounded-[8px] border border-[#222c30] hover:text-green-600' >
                            login
                        </button>
                    </NavLink>
                }
                {
                    !isLoggedIn &&
                    <NavLink to="/signup">
                        <button className='bg-[#0d1115] text-white py-[8px] px-[12px] rounded-[8px] border border-[#222c30] hover:text-green-600'>
                            Signup
                        </button>
                    </NavLink>
                }
                {
                    isLoggedIn &&
                    <NavLink to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl text-white" />
                            {
                                cart.length > 0 &&
                                <span
                                    className="absolute -top-1 -right-2 bg-cccc text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white bg-green-600 "
                                >{cart.length}</span>
                            }

                        </div>
                    </NavLink>
                }
                {
                    isLoggedIn &&
                    <NavLink to="/dashboard">
                        <button className='bg-[#0d1115] text-white py-[8px] px-[12px] rounded-[8px] border border-[#222c30] hover:text-green-600'>
                            Dashboard
                        </button>
                    </NavLink>
                }
                {
                    isLoggedIn &&
                    <NavLink to="/">
                        <button className='bg-[#0d1115] text-white py-[8px] px-[12px] rounded-[8px] border border-[#222c30] hover:text-green-600'
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out")
                            }}>
                            Logout
                        </button>
                    </NavLink>
                }

            </div>

        </div>
    )
}
