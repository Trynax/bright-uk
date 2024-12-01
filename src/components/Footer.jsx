import React from 'react'
import Logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className='bg-[#141105] flex flex-col items-center gap-4 py-14 '>
        <img className='w-20' src={Logo} alt="Bright Logo" />
        <div className='text-white flex flex-col md:flex-row gap-14'>
            <a  className='text-center' href="#">Home</a>
            <a  className='text-center' href="#">About</a>
            <a  className='text-center' href="#">Services</a>
            <a  className='text-center' href="#">Get in Touch</a>
            <a  className='text-center' href="#">FAQs</a>
        </div>
        <div className='mb-12 text-white text-center flex gap-3'>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <hr className='w-[100%] h-[1px] bg-white'/>
            <p className='text-white'>Copyright © Bright UK 2024. All Rights Reserved.</p>
    </footer>
  )
}
