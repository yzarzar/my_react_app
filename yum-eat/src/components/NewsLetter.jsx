import React from 'react'

export default function NewsLetter() {
    return (
        <>
            <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
                <div className="grid mx-auto lg:grid-cols-3">
                    <div className="my-4 lg:col-span-2">
                        <h1>Need advice on how to improve your flow?</h1>
                        <p>Sign up to join our newsletter and stay up to date.</p>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                            <input 
                            placeholder='email'
                            className='flex w-full p-3 text-black rounded-md '
                            type="email" />
                            <button className='bg-[#00df9a] text-white 
                            rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none py-3'>
                                Notify Me !
                            </button>
                        </div>
                        <p>We are concerned about security of your data, Read("")
                            <span className='text-[#00df9a]'> Privacy Policy</span>
                        </p>
                    </div>
                    <hr className='my-8 bg-gray-700 border-1' />
                </div>
            </div>
        </>
      )    
}
