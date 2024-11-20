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
         <div className="flex space-x-5 animate-scroll mt-10 justify-center items-center" style={{ gap: 10, flexWrap: 'nowrap' }} >

            {/* Mapeamento da lista original */}
            {tecnologyItem.map((item) => (
               <div
                  className="border-violet-600 hover:m-10 transition-all duration-500"
                  key={item.id}
                  style={{
                     borderLeftWidth: .2,
                     borderBottomWidth: .2,
                     borderColor: '#6716cf',
                     borderRadius: 12,
                  }}
               >
                  <div
                     onMouseEnter={() => setSelectItem(item)}
                     onMouseLeave={() => setSelectItem(null)}
                     className="flex-nowrap relative w-full h-100 flex overflow-hidden items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out"
                     style={{
                        transform: selectItem?.id === item.id ? 'translate(10px, -10px)' : 'translate(0, 0)',
                     }}
                  >
                     <Image
                        src={item.image}
                        alt={item.name}
                        width={0}
                        height={0}
                        quality={90}
                        className="object-contain"
                        style={{
                           width: 200,
                        }}
                     />
                  </div>
               </div>



            ))}

         </div>

      </div>
   );
}