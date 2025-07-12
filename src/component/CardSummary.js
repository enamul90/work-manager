import React from 'react'

export default function CardSummary({ data }) {
  return (
    <>
         {data?.map((item, index) => {

                return (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 hover:shadow-lg transition-shadow w-full cursor-pointer border border-lightLine"
                    >
                        <div className="p-3 rounded-full bg-secondary text-white">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-600">{item.title}</h3>
                            <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                        </div>
                    </div>
                );
            })}
    </>
  )
}
