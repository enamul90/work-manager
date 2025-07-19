"use client"
import React, {useEffect} from 'react'

import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import API from "@/app/utils/axios";

export default function TaskComponent() {
    const [workingLoading, setWorkingLoading] = React.useState(false);
    const [working, setWorking] = React.useState("");

    const [workDayList, setWorkDayList] = React.useState([]);

    const [openWorkingDay, setOpenWorkingDay] = React.useState("");

    const createWorkingHandler = async () => {
        setWorkingLoading(true);

        const data ={
            tittle: working
        }

        try {
            let res = await API.post('/task', data);
            await workDayHandler()
        }

        catch (err) {
            alert(err || "Something went wrong");
        }

        setWorking("")
        setWorkingLoading(false);
    }

    const workDayHandler = async () => {
        try {
            let res = await API.get('/task');
            setWorkDayList(res.data);
        }
        catch (err) {
            alert(err || "Something went wrong");
        }
    }

    useEffect(() => {
        (async () => {
            await workDayHandler();
        })();
    }, []);

    return (
        <div className='max-w-7xl mx-auto mt-3 md:mt-4 px-4'>
            {/* add day */}
            <div className="flex justify-between items-center mb-3 w-full gap-3 p-3 bg-white shadow  hover:shadow-lg transition-shadow rounded-md border border-lightLine">
                <input
                    type="text"
                    value={working}
                    onChange={(e) => setWorking(e.target.value)}
                    className="bg-secondary/8 w-full px-3 py-2 rounded-md outline-0"
                    placeholder="Working Day Name"
                />
                <button onClick={createWorkingHandler} className="btn-primary px-6 py-2 text-sm cursor-pointer flex items-center justify-center gap-4">
                    Add

                    {
                        workingLoading && (
                            <div className={"loader"}></div>
                        )
                    }

                </button>
            </div>

            {/* show day list */}
            {
                workDayList.map((item, index) => (
                    <div key={index} className=" mb-3 w-full gap-3  bg-white shadow  hover:shadow-lg transition-shadow rounded-md border border-lightLine">
                        <div className='md:flex justify-between items-center p-3 border-b border-lightLine space-y-3 md:space-y-0'>
                            <h3 className='text-lg text-lightText-100 font-medium '> {item.tittle}
                                {/*<span className='ms-2 text-base font-semibold text-secondary'>- {item.createdAt}</span>*/}
                                <span className="ms-2 text-base font-semibold text-secondary">
                                     - {new Date(item.createdAt).toLocaleTimeString('en-GB', {
                                    hour12: true,
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    timeZone: 'Asia/Dhaka',
                                })}
                                </span>
                            </h3>

                            <div className='flex items-center gap-3 justify-end'>
                                <button className=" py-2 text-xs  px-3 bg-secondary  cursor-pointer rounded-lg text-white">
                                    Edit day
                                </button>

                                {
                                    item._id === openWorkingDay ?(
                                        <button onClick={()=>setOpenWorkingDay("")} className="bg-primary p-1 text-2xl  cursor-pointer rounded-full text-white">
                                            <IoMdArrowDropup />
                                        </button>
                                    ) :(

                                        <button onClick={()=>setOpenWorkingDay(item._id)} className="bg-primary p-1 text-2xl  cursor-pointer rounded-full text-white">
                                            <IoMdArrowDropdown />
                                        </button>
                                    )
                                }
                            </div>

                        </div>


                        {/* work */}

                        {
                            item._id === openWorkingDay && (
                                <div >
                                    {/*work link  tittle*/}

                                    <div className={'px-4 py-2 flex items-center justify-between border-b border-lightLine '}>
                                        <h1 className={"text-neutral-900 uppercase "}>Work list </h1>

                                        <button className={'bg-black text-white text-xs px-3 py-2 rounded-md cursor-pointer'}>
                                            Add Work
                                        </button>
                                    </div>

                                    {/*work list*/}
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

                                                <div className='space-x-2 flex   '>
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
                            )
                        }

                    </div>
                ))
            }


        </div>
    )
}
