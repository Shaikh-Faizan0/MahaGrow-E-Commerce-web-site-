import React from 'react';
import aboutImg from "../assets/about.jpg"

const About = () => {
    return (
        <section className="bg-gray-100 w-full min-h-max flex justify-center items-center py-16">
            <div className="container mx-auto px-4 w-11/12">
                <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <img src={aboutImg} alt="About Us" className="w-full md:w-3/4 rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-gray-800 mb-4">
                            Welcome to our e-commerce store! We are passionate about providing high-quality products to our customers at affordable prices.
                        </p>
                        <p className="text-lg text-gray-800 mb-4">
                            At our store, you'll find a wide range of electronics, including smartphones, laptops, and smart home devices. We also offer a variety of clothing options for men, women, and kids, ranging from casual wear to formal attire.
                        </p>
                        <p className="text-lg text-gray-800 mb-4">
                            Customer satisfaction is our top priority, and we strive to offer exceptional service along with top-notch products. Feel free to explore our website and shop with confidence!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
