import React from 'react'
import frameImg from "../assets/frame.png"
import { Loginfrom } from "./Loginfrom"
import { Signupfrom } from "./Signupfrom"
import { FcGoogle } from "react-icons/fc";

export const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className='flex items-center justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>


            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
                <p className='text-[1.125rem] leading-[1.652rem] mt-4'>
                    <span className='text-white '>{desc1}</span>
                    <br />
                    <span className='text-green-600 italic'>{desc2}</span>
                </p>

                {formType === "signup" ? <Signupfrom setIsLoggedIn={setIsLoggedIn} /> : <Loginfrom setIsLoggedIn={setIsLoggedIn} />}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-[#222c30]'></div>
                    <p className='text-[#222c30] font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] w-full bg-[#222c30]'></div>
                </div>

                <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-white border border-[#222c30] px=[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle />
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div  className="relative w-11/12 max-w-[450px]">
                <img src={frameImg} alt="patten" width={558} height={504} loading='lazy' />
                <img src={image} alt="Studendt" width={558} height={490} loading='lazy'
                className='absolute -top-4 right-4'
                 />
            </div>

        </div>
    )
}
