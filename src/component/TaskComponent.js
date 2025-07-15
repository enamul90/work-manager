"use client"
import React from 'react'

import { IoMdArrowDropdown } from "react-icons/io";

export default function TaskComponent() {

    return (
        <div className='max-w-7xl mx-auto mt-3 md:mt-4 px-4'>
            {/* add day */}
            <div className="flex justify-between items-center mb-3 w-full gap-3 p-3 bg-white shadow  hover:shadow-lg transition-shadow rounded-md border border-lightLine">
                <input
                    type="text"

                    className="bg-secondary/8 w-full px-3 py-2 rounded-md outline-0"
                    placeholder="Working Day Name"
                />
                <button className="btn-primary px-6 py-2 text-sm cursor-pointer">
                    Add
                </button>
            </div>

            {/* show day list */}
            <div className=" mb-3 w-full gap-3  bg-white shadow  hover:shadow-lg transition-shadow rounded-md border border-lightLine">

                <div className='md:flex justify-between items-center p-3 border-b border-lightLine space-y-3 md:space-y-0'>
                    <h3 className='text-lg text-lightText-100 font-medium '>20/8/2024 || শনিবার
                        <span className='ms-2 text-base font-semibold text-secondary'>- 10 pm</span>

                    </h3>

                    <div className='flex items-center gap-3 justify-end'>
                        <button className=" py-2 text-xs  px-3 bg-secondary  cursor-pointer rounded-lg text-white">
                            Add Work
                        </button>

                        <button className="bg-primary p-1 text-2xl  cursor-pointer rounded-full text-white">
                            <IoMdArrowDropdown />
                        </button>
                    </div>

                </div>


                {/* work */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                    <div className='p-3 border border-lightLine rounded-md'>
                        {/* work tittle */}
                        <div className='mb-4 flex justify-between items-center '>
                            <h4 className='text-lightText-100 font-medium  uppercase'>UVIOM Work </h4>

                            <div className=' space-x-2'>
                                <button className='text-xs  px-2 py-1 text-white bg-neutral-900 rounded cursor-pointer shadow'>Edit Work</button>
                                <button className='text-xs  px-2 py-1 text-white bg-primary rounded cursor-pointer shadow'>Add Task</button>
                            </div>

                        </div>


                        {/* task list */}
                        <div className='flex flex-wrap gap-3'>
                            <div className='flex gap-3 '>
                                <h4 className='text-lightText-75 font-medium'>Profile Design  Update </h4>
                                <h4 className='text-lightText-75 font-medium'>||</h4>
                                <h4 className='text-lightText-75 font-medium me-2 '>2H </h4>
                            </div>


                            <div className=' space-x-2'>
                                <button className=' text-xs font-medium border border-secondary text-secondary px-2 py-1 rounded-md  cursor-pointer'>
                                    Edit
                                </button>
                                <button className=' text-xs font-medium  border border-secondary bg-secondary px-2 py-1 rounded-md text-white cursor-pointer'>
                                    Activity
                                </button>
                            </div>

                            <div className='space-x-2 flex hidden  '>
                                <input
                                    placeholder='Time - H'
                                    className='w-16 outline-0 border border-lightLine px-2 rounded text-xs'
                                />
                                <input
                                    placeholder='Done - %'
                                    className='w-18 outline-0 border border-lightLine px-2 rounded text-xs'
                                />

                                <button className=' w-full text-xs font-medium bg-secondary px-2 py-1 rounded-md text-white cursor-pointer'>
                                    update
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>






        </div>
    )
}
