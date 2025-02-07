'use client'
import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import depoiment1 from '../../public/depoiment-1.jpg'
import depoiment2 from '../../public/depoiment-2.jpg'
import depoiment3 from '../../public/depoiment-3.jpg'
import depoiment4 from '../../public/depoiment-4.jpg'

export interface ImageProps {
   id: number,
   image: string
}

export interface DepoimentClientProps {
   images: ImageProps[]
}

export default function DepoimentClient({ images }: DepoimentClientProps) {

   const [image, setImage] = useState<ImageProps | null>(null)

   const scrollContainerRef = useRef<HTMLDivElement>(null)


   const depoimentClients: ImageProps[] = [
      {
         id: 1,
         image: depoiment1.src,
      },
      {
         id: 2,
         image: depoiment2.src,
      },
      {
         id: 3,
         image: depoiment3.src,
      },
      {
         id: 4,
         image: depoiment4.src,
      }
   ]


   useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const scrollSpeed = 2; // Pixels por frame
      const intervalTime = 60; // Intervalo entre movimentos (ms)

      const autoScroll = setInterval(() => {
         scrollContainer.scrollBy({ left: scrollSpeed, behavior: 'smooth' });

         // Reinicia quando chega ao final "duplicado"
         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0; // Volta para o início
         }
      }, intervalTime);

      /* return () => clearInterval(autoScroll); // Limpa o intervalo ao desmontar o componente */
   }, []);


   return (
      <div className="flex-shrink-0 w-full h-auto bg-slate-950 py-10 justify-center items-center">
         <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6">
            Depoimentos de Clientes
         </h1>

         <div className="flex w-full overflow-x-auto gap-5 px-5" style={{

            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth', // Rolagem suave
            marginTop: 100,
         }}
            ref={scrollContainerRef}
         >
            <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style>
            {depoimentClients.map((image) => (
               <div
                  key={image.id}
                  className="border-violet-600 transition-all duration-500"
               >
                  <Image
                     src={image.image}
                     alt={`Depoimento ${image.id}`}
                     width={0}
                     height={0}
                     quality={90}
                     sizes={'100vw'}
                     className="object-contain"
                     style={{
                        minWidth: 420,

                     }}
                  />
               </div>
            ))}
         </div>
         <div className='flex-row rounded-lg mt-32' style={{ alignItems: 'center', marginTop: 50, justifyContent: 'center' }}>
            <p className='text-white'>Ele seus projetos com design desde simples minimalistas a mordernos.</p>
            <div className='flex-row justify-center items-center relative bg-[#6716cf] p-4' style={{ minWidth: 450 }}>
               <div >
                  <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6">
                     Somo Conhecidos por
                  </h1>

               </div>

               <div className='flex-col bg-slate-400 rounded-lg gap-5' style={{ width: 450, justifyContent: 'center', alignItems: 'center' }}>
                  <div className='flex p-4 justify-between'>
                     <CheckIcon size={24} color={'#fff'} />
                     <h1 className='text-white font-mono text-lg'>Desenvolvimento Resposivo</h1>
                  </div>
                  <div className='flex p-4 justify-between'>
                     <CheckIcon size={24} color={'#fff'} />
                     <h1 className='text-white font-mono text-lg'>Integração de Sistemas</h1>
                  </div>
                  <div className='flex p-4 justify-between'>
                     <CheckIcon size={24} color={'#fff'} />
                     <h1 className='text-white font-mono text-lg'>Manutenções e correções de bug's</h1>
                  </div>
                  <Button>Contate-nos</Button>
               </div>
            </div>

         </div>

      </div>
   )
}
