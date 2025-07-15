'use client';

import { useState, } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NaveBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const [user, setUser] = useState({
        username: 'JohnDoe',
        photo: "", // Replace with actual photo URL in a real app
    });
    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold text-primary">
                                MyApp
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            <div className="flex items-center space-x-3">

                                < div
                                    onClick={() => router.push('/profile')}
                                    className='cursor-pointer'
                                >
                                    {user.photo ? (
                                        <Image
                                            src={user.photo}
                                            alt="Profile"
                                            width={32}
                                            height={32}
                                            className="rounded-full object-cover border-2 border-primary"
                                        />
                                    ) : (
                                        <div 
                                        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-primary border-2 border-primary">
                                            {user.username[0].toUpperCase()}
                                        </div>
                                    )}
                                </ div>

                                <span className="text-gray-700 font-medium">{user.username}</span>

                                <button
                                    className="bg-primary px-3 py-2 text-sm text-darkText-100 font-medium rounded-md ms-5 cursor-pointer"
                                    onClick={()=>router.push("/auth/login")}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="sm:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-primary focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-3 flex flex-wrap  items-center justify-between space-y-3">
                            <div className="flex items-center space-x-3 mb-0">
                                {user.photo ? (
                                    <Image
                                        src={user.photo}
                                        alt="Profile"
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover border-2 border-primary]"
                                    />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-2 border-primary">
                                        {user.username[0].toUpperCase()}
                                    </div>
                                )}
                                <span className="text-gray-700 font-medium">{user.username}</span>
                            </div>
                            <button
                                className="bg-primary px-3 py-2 text-sm text-left text-darkText-100 rounded-md font-medium w-fit"
                                onClick={()=>router.push("/auth/login")}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
