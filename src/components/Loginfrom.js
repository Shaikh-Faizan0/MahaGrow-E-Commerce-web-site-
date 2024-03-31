import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export const Loginfrom = ({ setIsLoggedIn }) => {

    const nevigate = useNavigate();

    const [fromData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event) {
        const accountData = {
                ...fromData
            }
        if (accountData.email === "DemoMail@example.com" && accountData.password === "DemoPass") {
            event.preventDefault();
            setIsLoggedIn(true);
            toast.success("Logged in successfully");
            nevigate("/dashboard");

            console.log("login data: ");
            console.log(accountData);
        }else{
            toast.error("Wrong username or password")
        }


    }

    return (
        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full' >
                <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                    Email Address <sup className='text-red-300'>*</sup>
                    <span className='text-gray-600'>DemoMail@example.com</span>
                </p>
                <input
                    required
                    type="email"
                    name='email'
                    value={fromData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email id'
                    className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                />
            </label>
            <label className='w-full relative'>
                <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                    Password <sup className='text-red-300'>*</sup>
                    <span className='text-gray-600' >DemoPass</span>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    value={fromData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                />
                <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                </span>
                <Link to="#">
                    <p className='text-xs mt-1 text-[#2167ad] max-w-max ml-auto'>
                        Forget Password
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-300 rounded-[8px] font-medium text-[#050a0f] px-[12px] py-[8px] mt-6' >
                Sign In
            </button>

        </form>
    )
}
