import Image from 'next/image'
import React from 'react'

export default function Initial() {
  return (
    <div className='lg:flex md:w-full md:h-full p-[50px] pt-[180px] items-center justify-between md:flex relative bg-slate-950'>

      <div className='w-[100%] mb-10 z-10'>
        <h1 className='text-white md:text-4xl text-2xl font-mono'>Olá, meu</h1>
        <h1 className='text-white md:text-4xl text-2xl font-mono'>nome é <b className='md:text-5xl text-3xl  text-[#6716cf]'>Silva.</b></h1>

        <div className='flex flex-col items-start mt-10 gap-2 md:items-center md:justify-flex-start'>
          <p className='text-white md:text-2xl text-lg font-mono'>Sou um <b className='md:text-2xl text-lg font-bold text-white tracking-wider'>desenvolvedor criativo </b> e 
            <b className='md:text-2xl text-lg font-bold text-white gap-2 '> independente</b> de curitiba-PR, região sul do Brasil.</p>

        </div>
      </div>

      <div className='flex w-full md:justify-end justify-center items-center relative'>
        {/* Contêiner com formato de círculo e overflow oculto */}
        <div className='flex md:h-[380px] md:w-[380px] w-[380px] h-[380px] bg-gradient-to-l from-[#6716cf] to-[#020617] rounded-full overflow-hidden justify-center items-center ' style={{ zIndex: 1, boxShadow: '10px 10px 100px #6716cf99' }}>
          <Image
            src={'/perfil-1-removebg-preview (1).png'}
            alt={'foto-perfil'}
            width={0}
            height={0}
            sizes={'100vw'}
            quality={90}
            className='relative top-[50px] w-[400px] h-[400px] md:h-[400px] md:w-[400px] md:object-contain object-contain opacity-90'
          />
        </div>
      </div>

    </div>
  )
}
