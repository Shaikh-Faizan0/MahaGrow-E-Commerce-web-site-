import React, { useState } from 'react';
import frameImg from "../assets/frame.png";
import image from "../assets/contact.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // Here you can handle form submission, such as sending the data to a server
        console.log(formData);
        // Clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='flex items-center justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>


            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>Contact Us</h1>
                <p className='text-[1.125rem] leading-[1.652rem] mt-4'>
                    <span className='text-green-600  italic'>Have a question or feedback? Feel free to reach out to us by filling out the form below. We'll get back to you as soon as possible!</span>

                </p>

                <form onSubmit={submitHandler}
                    className='flex flex-col w-full gap-y-4 mt-6'>
                    <label className='w-full' >
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                            Name <sup className='text-red-300'>*</sup>

                        </p>
                        <input
                            required
                            type="name"
                            name='name'
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder='Enter Name'
                            className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                        />
                    </label>
                    <label className='w-full relative'>
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                            Email <sup className='text-red-300'>*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder='Enter Email'
                            className='bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white'
                        />
                    </label>

                    <label className='w-full relative'>
                        <p className='text-white text-[0.875rem] leading-[1.375rem]'>
                            Messgae <sup className='text-red-300'>*</sup>
                        </p>
                        <textarea
                            required
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={changeHandler}
                            placeholder="Your Message"
                            className='h-[100px] bg-[#0d1115] border-black rounded-[0.5rem] text-white w-full p-[12px] shadow-sm shadow-white resize-none'
                        />
                    </label>


                    <button className='bg-yellow-300 rounded-[8px] font-medium text-[#050a0f] px-[12px] py-[8px] mt-6' >
                        Submit
                    </button>

                </form>
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImg} alt="patten" width={558} height={504} loading='lazy' />
                <img src={image} alt="Studendt" width={558} height={490} loading='lazy'
                    className='absolute -top-4 right-4'
                />
            </div>

        </div>
    )
};

export default Contact;
