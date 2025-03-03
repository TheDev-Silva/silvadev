import { LoaderIcon } from 'lucide-react';
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const Loading = ({ visible }: any) => {
    return (
        <div className=' fixed flex w-full h-[100vh] bg-primary-dark justify-center items-center gap-4'>

            <h1 className='text-white font-mono'>carregando... </h1>
            <LoaderIcon className='animate-geh size-7 top-1' color='#fff' />
        </div>
    )
}
export default Loading;