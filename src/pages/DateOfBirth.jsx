import React from 'react'
import { Link } from 'react-router'
import FooterPage from '../components/FooterPage'
const DateOfBirth = () => {
    return (
        <div>
            <div className='border boder-[#737373] w-[350px]  mx-auto  mt-3 h-[520px]'>
                {/* Image and text */}
                <div>
                    <img src="src/assets/Images/BirthdayCake.webp" alt="" />
                    <h1 className='text-[14px] text-black font-semibold text-center '>Add your date of birth</h1>
                </div>
                <div>
                    <h1 className='text-[14px] text-black font-normal text-center mt-5'>This won't be part of your public profile.</h1>
                    <h1 className='text-[14px] text-center text-[#0095F6]'>Why do I need to provide my date of birth?</h1>
                </div>
                {/* Months and day and year */}
                <div className="flex justify-center gap-3 mt-4 items-center ">
                    {/* Month */}
                    <select className="border border-gray-300 p-2 rounded-sm w-[92px] outline-none text-[#737373] h-[36px] text-[14px]">
                        <option value="">January</option>
                    </select>

                    {/* Day */}
                    <select className="border border-gray-300 p-2 rounded-sm text-[#737373] h-[36px] w-[53px] text-[14px] outline-none">
                        <option value="">31</option></select>

                    {/* Year */}
                    <select className="border border-gray-300 p-2  rounded-sm text-[#737373] h-[36px] w-[70px] text-[14px] outline-none" >
                        <option value="">2025</option>
                    </select>
                </div>
                {/* Text */}
                <div>
                    <h1 className='text-[12px] text-[#737373] text-center mt-2'>You need to enter the date you were born on</h1>
                    <h1 className='text-[12px] text-[#737373] text-center mt-5 w-[292px] mx-auto'>Use your own date of birth, even if this account is for a business, pet or something else</h1>
                </div>
                {/* Button */}
                {/* Button */}
                <div>

                <Link to="/verification" className='flex justify-center items-center'>
                    <button className='w-full max-w-[290px]   mt-4 h-8 bg-[#53bdeb] text-white text-[15px] font-[600] rounded-lg hover:bg-[#1877F2] '> Next</button></Link>
                </div>
                <div>
                    <Link to="/signup" className='text-[14px] flex justify-center items-center mt-3 text-[#0095F6]  font-semibold '>Go back</Link>
                </div>

            </div>
            <div className='md:border md:boder-[#737373] w-[350px] mx-auto  mt-3 h-20'>
                            <div className=' gap-1 mt-5 '>
                                <h1 className='text-center text-[15px] font-normal'>Have an account?</h1>
                                <Link to="/login" className='flex items-center justify-center text-[#0095F6] font-semibold '>Log in</Link>
                         
                            </div>
                        </div>
                        <div>
                                    <h1 className='text-center mt-5 font-normal text-[15px]'>Get the app.</h1>
                                </div>
                                <div className='flex justify-center items-center gap-4 mt-4'>
                                    <div className='w-36 h-10'>
                                        <img src="src/assets/Images/GooglePlay.png" alt="" />
                                    </div>
                                    <div className='w-28 h-10'>
                                        <img src="src/assets/Images/Microsoft.png" alt="" />
                                    </div>
                                </div>
                                     <div>
                                                <FooterPage/>
                                                </div>
        </div>

    )
}

export default DateOfBirth
