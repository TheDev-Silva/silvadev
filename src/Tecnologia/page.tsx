'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface TectProps {
   id: number;
   name: string;
   description: string,
   image: string | StaticImageData;
}

interface TecnologiasProp {
   tecnologyItem: TectProps[];
}

export default function Tecnologias({ tecnologyItem }: TecnologiasProp) {
   const [selectItem, setSelectItem] = useState<TectProps | null>(null)



   return (
      <div className='lg:flex flex-col md:w-full md:h-[100vw] p-[50px] items-center justify-between md:flex relative bg-slate-950' >
         {/* Contêiner flexível para scroll infinito */}
         <h1 className="md:text-3xl text-2xl text-white font-mono font-bold pt-10 text-center uppercase" >Tecnologias dominantes</h1>
         <div className="flex space-x-5 animate-scroll m-10 justify-center items-center" style={{ gap: 10, flexWrap: 'wrap' }} >

            {/* Mapeamento da lista original */}
            {tecnologyItem.map((item) => (
               <div key={item.id}
                  onMouseEnter={() => setSelectItem(item)}
                  onMouseLeave={() => setSelectItem(null)}
                  className="relative w-40 h-40 flex overflow-hidden items-center justify-center cursor-pointer"
               >
                  <Image
                     src={item.image}
                     alt={item.name}
                     width={0}
                     height={0}
                     quality={90}
                     className="object-contain hover:top-2"
                     style={{ width: 150 }}
                  />
                  {selectItem?.id === item.id && <div className='flex flex-col w-full h-full absolute bg-[#6716cf]   translate-x-5 duration-300 items-center justify-center' style={{ padding: 10, borderRadius: 10, opacity: .8, borderWidth: 2, borderColor: '#fff' }} onClick={() => setSelectItem(null)} >
                     <h1 className='text-white drop-shadow-textmd font-bold'>{selectItem.name}</h1>
                     <p className='text-sm font-mono text-center text-white text-ellipsis overflow-hidden'>{selectItem?.description}</p>
                  </div>}


               </div>

            ))}

         </div>

      </div>
   );
}