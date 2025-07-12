'use client';

import { useState, useEffect, useCallback, } from 'react';
import Image from 'next/image';

import { MdEditDocument } from "react-icons/md";

import { useRouter } from 'next/navigation';
import NaveBar from '@/component/NaveBar';


export default function Page() {

    const router = useRouter();

    // Simulated user data (in a real app, fetch from backend)
    const [user, setUser] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        photo: null,
    });
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        photo: null,
    });
    const [photoPreview, setPhotoPreview] = useState(user.photo);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username && formData.email) {
            // Simulate updating user data
            setUser({
                username: formData.username,
                email: formData.email,
                photo: formData.photo || user.photo,
            });
            alert('Profile updated successfully! (This is a demo)');
            setEditMode(false);
            if (!formData.photo) {
                setPhotoPreview(user.photo);
            }
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
        // Reset form data to current user data when entering edit mode
        if (!editMode) {
            setFormData({
                username: user.username,
                email: user.email,
                photo: null,
            });
            setPhotoPreview(user.photo);
        }
    };


    return (
        <div >

            <NaveBar />

            <div className="bg-white p-8 rounded-lg shadow w-full max-w-md mx-auto mt-5">
                <div className='flex items-center justify-between mb-6'>

                    <h2 className="text-2xl font-bold text-center text-lightText-100">Your Profile</h2>


                    <div className='flex gap-3'>
                        {
                            !editMode && (
                                <button
                                    onClick={toggleEditMode}
                                    className="w-fit text-secondary cursor-pointer flex gap-2 items-center "
                                >
                                    < MdEditDocument className='text-lg' />
                                    <span className='font-medium'>   Edit</span>
                                 
                                </button>
                            )
                        }

                    </div>
                </div>

                {!editMode ? (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            {photoPreview ? (
                                <Image
                                    src={photoPreview}
                                    alt="Profile preview"
                                    width={100}
                                    height={100}
                                    className="rounded-full object-cover mx-auto border-2 border-primary"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-lightText-100 border-2 border-primary">
                                    No Photo
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Username</p>
                            <p className="mt-1 text-gray-900">{user.username}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Email</p>
                            <p className="mt-1 text-gray-900">{user.email}</p>
                        </div>

                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                                className="mt-1 w-full px-4 py-2 border border-lightLine outline-0 rounded-md"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="mt-1 w-full px-4 py-2 border border-lightLine outline-0 rounded-md"
                                placeholder="Enter your email"
                            />
                        </div>


                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={toggleEditMode}
                                className="flex-1 bg-secondary text-white font-semibold rounded-md py-2 px-4 hover:bg-gray-600 cursor-pointer w-full"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="w-full flex-1 bg-primary cursor-pointer py-2 rounded-md text-darkText-100 font-medium"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}