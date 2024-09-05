import { FaApple, FaGoogle } from 'react-icons/fa6';
import Img from '../../assets/login.png';
import Logo from '../../assets/logowithname.png';
import { Link } from 'react-router-dom';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
const SignUp = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex items-center min-h-screen py-5 lg:py-0">
            <div className="flex justify-center items-center bg-white flex-1">
                <div className='bg-gray-100 p-5 rounded-md space-y-2 md:space-y-5'>
                    <div className='text-center space-y-3'>
                        <h4 className='text-sm md:text-lg font-medium'>Welcome To</h4>
                        <h1 className='text-2xl md:text-3xl font-bold text-black'>Furni<span className='text-blue-500'>Flex</span></h1>
                        <p className='text-xs md:text-sm'>Signup for purchase your desire products</p>
                    </div>
                    <form className='space-y-5'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                            <div className="relative w-full">
                                <input className="peer h-[50px] border-2 border-gray-400 bg-white px-2 pt-4 text-black focus:outline-none rounded-md w-full" type="text" name='firstName' placeholder="" />
                                <label className="absolute left-2 top-0.5 text-xs text-black duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-black" >
                                    First name
                                </label>
                            </div>
                            <div className="relative w-full">
                                <input className="peer h-[50px] border-2 border-gray-400 bg-white px-2 pt-4 text-black focus:outline-none rounded-md w-full" type="text" name='lastName' placeholder="" />
                                <label className="absolute left-2 top-0.5 text-xs text-black duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-black" >
                                    Last Name (optional)
                                </label>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <input className="peer h-[50px] w-full border-2 border-gray-400 bg-white px-2 pt-4 text-black focus:outline-none rounded-md" type="email" name='email' placeholder="" />
                            <label className="absolute left-2 top-0.5 text-xs text-black duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-black" >
                                Email
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input className="peer h-[50px] w-full border-2 border-gray-400 bg-white px-2 pt-4 text-black focus:outline-none rounded-md" type={`${toggle ? 'text' : 'password'}`} name='password' placeholder="" />
                            <label className="absolute left-2 top-0.5 text-xs text-black duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-black" >
                                Password
                            </label>
                            <div onClick={() => setToggle(!toggle)} className='absolute top-3 right-5'>
                                {
                                    toggle ? <FaEye size={20} /> : <FaRegEyeSlash size={20} />
                                }
                            </div>
                        </div>
                        <div className='space-x-2 font-medium text-xs'>
                            <input type="checkbox" />
                            <label>I agree to the Terms & Policy</label>
                        </div>
                        <button className='py-1 md:py-3 w-full bg-black rounded-md text-white text-xs md:text-sm hover:bg-gray-600 duration-300'>Sign Up</button>
                    </form>
                    <div className='flex items-center'>
                        <div className='flex-1 h-px sm:w-16 bg-gray-400'></div>
                        <p className='px-3 text-sm text-black font-bold'>
                            Or
                        </p>
                        <div className='flex-1 h-px sm:w-16 bg-gray-400'></div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5 text-black font-medium'>
                        <button className='py-1 md:py-3 text-xs md:text-sm border border-gray-400 rounded-md w-full flex justify-center items-center gap-3 hover:bg-black hover:text-white hover:border-black duration-300'>
                            <FaGoogle size={20} />  Sign in with Google
                        </button>
                        <button className='py-1 md:py-3 text-xs md:text-sm border border-gray-400 rounded-md w-full flex justify-center items-center gap-3 hover:bg-black hover:text-white hover:border-black duration-300'>
                            <FaApple size={20} />  Sign in with Apple
                        </button>
                    </div>
                    <div className='text-center text-xs md:text-sm font-medium'>
                        Have an account?  <Link to='/signIn' className='text-blue-400 font-bold'>Sign In</Link>
                    </div>
                </div>
            </div>
            <div className="flex-1 min-h-screen lg:flex items-center justify-center hidden" style={{
                backgroundImage: `url('${Img}')`,
            }}>
                <div className='flex flex-col items-center justify-center max-w-lg text-center gap-3'>
                    <Link to='/'>
                        <img src={Logo} alt="" />
                    </Link>
                    <p className='text-xs md:text-sm text-white '>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;