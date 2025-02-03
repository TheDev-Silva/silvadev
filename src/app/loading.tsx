import React from 'react'

const Loading = ({ visible, time }: any) => {
    return (
        <div className='flex w-full h-[100vw] opacity-60 bg-[#000] justify-center items-center'>
            <h1>{time} Loading</h1>
        </div>
    )
}
export default Loading;