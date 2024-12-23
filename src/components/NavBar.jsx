import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsDropDownOpen(true)
    }

    const handleMouseLeave = () => {
        // Set a timeout to close the dropdown
        timeoutRef.current = setTimeout(() => {
            setIsDropDownOpen(false)
        }, 300)  // 300ms delay to allow moving to dropdown
    }

    const handleDropdownMouseEnter = () => {
        // Clear the timeout if mouse enters dropdown
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsDropDownOpen(true)
    }

    const handleDropdownItemClick = () => {
        setIsDropDownOpen(false)
    }

    useEffect(() => {
        // Cleanup timeout on component unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-black opacity-50 py-2 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px6 lg:px-8 flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <img src={Logo} alt="Company Logo" className='w-10 h-10' />
                </div>

                <div className='hidden md:flex space-x-16'>  
                    <a href="#" className='hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400'>Home</a>
                    
                    <div 
                        ref={dropdownRef}
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center space-x-1 hover:text-yellow-400">
                            <span>About</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2} 
                                stroke="currentColor" 
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {isDropDownOpen && (
                            <div 
                                className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" 
                                   onClick={handleDropdownItemClick} 
                                   className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Speaker
                                </a>
                                <a href="#" 
                                   onClick={handleDropdownItemClick} 
                                   className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Entrepreneur
                                </a>
                                <Link 
                                    to="/author" 
                                    onClick={handleDropdownItemClick} 
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Author
                                </Link>
                                <a href="#" 
                                   onClick={handleDropdownItemClick} 
                                   className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Trainer
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="hover:text-yellow-400">Shop</a>
                    <a href="#" className="hover:text-yellow-400">Gallery</a>
                    <a href="#" className="hover:text-yellow-400">Blog</a>
                    <a href="#" className="hover:text-yellow-400">Cart(0)</a>
                </div>

                <div>
                    <button className='hidden md:flex px-3 py-2 text-yellow-400 text-lg border-yellow-400 border-2 rounded-md'>Contact me</button>
                </div>
                
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-yellow-400 focus:outline-none"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-80">
                    <a href="#" className="block px-4 py-2 text-yellow-400 hover:bg-gray-700">Home</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Shop</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Gallery</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Blog</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Cart(0)</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact me</a>
                </div>
            )}
        </nav>
    )
}