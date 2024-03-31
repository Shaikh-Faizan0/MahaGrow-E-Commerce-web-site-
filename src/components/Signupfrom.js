import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Signupfrom = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType ,setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("password do not match")
        }
        else {
            setIsLoggedIn(true);
            toast.success("Account Created")
            navigate("/dashboard");
        }

        const accountData = {
            ...formData,
        }

        const finalData ={
            ...accountData,
            accountType
        }

        console.log("printing final data");
        console.log(finalData);

    }

    return (
        <div>
            {/*student-Instructor tab */}
            <div className='flex bg-[#0d1115] p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button 
                className={`${accountType === "student" ? "bg-[#050a0f] text-white" : "bg-transparent text-[#75879b]"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("student")}
                >
                Student
                </button>
                <button 
                 className={`${accountType === "instructor" ? "bg-[#050a0f] text-white" : "bg-transparent text-[#75879b]"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}
                >
                Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >

                {/*first name and last name*/}
                <div className='flex gap-x-4 mt-4'>
                    <label className='w-full' >
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                            First Name <sup className='text-red-300'>*</sup>
                        </p>
                        <input type="text"
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                        />
                    </label>

                    <label className='w-full' >
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                            Last Name <sup className='text-red-300'>*</sup>
                        </p>
                        <input type="text"
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter last Name'
                            value={formData.lastName}
                            className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white' />
                    </label>
                </div>

                {/*Email Add*/}
                <div className='mt-4'>
                <label className='w-full mt-4'>
                    <p className='text-white text-[0.875rem] leading-[1.375rem]'>Email Address <sup className='text-red-300'>*</sup></p>
                    <input
                        required
                        type="email"
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                    />
                </label>
                </div>
                

                {/*create password and confirm password*/}
                <div className='flex gap-x-4 mt-4'>
                    <label className='w-full relative'>
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>Create Password <sup className='text-red-300'>*</sup></p>
                        <input type={showPassword ? ('text') : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='w-full relative' >
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>Confirm Password <sup className='text-red-300'>*</sup></p>
                        <input type={showConfirmPassword ? ('text') : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white' />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-300 w-full rounded-[8px] font-medium text-[#050a0f] px-[12px] py-[8px] mt-6' >
                    create Account
                </button>
            </form>

        </div>
    )
}
