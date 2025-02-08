'use client'
import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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

      return () => clearInterval(autoScroll); // Limpa o intervalo ao desmontar o componente */
   }, []);


   return (
      <div className="flex-shrink-0 w-full h-auto bg-slate-950 py-10 justify-center items-center mt-10 pt-[50px]">
         <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6">
            Depoimentos de Clientes
         </h1>

         <div className="flex w-full overflow-x-auto gap-5 px-5" style={{

            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth', // Rolagem suave
            marginTop: 50,
         }}
            ref={scrollContainerRef}
            
         >
            <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style>
            {[...depoimentClients, ...depoimentClients].map((image, index) => (
               <div
                  key={index}
                  className="border-violet-600 transition-all duration-500"
                  
               >
                  <Image
                     src={image.image}
                     alt={`Depoimento ${image.id}`}
                     width={0}
                     height={0}
                     quality={90}
                     sizes={'100vw'}
                     className="object-cover"
                     style={{
                        minWidth: 350,

                     }}
                  />
               </div>
            ))}
         </div>
         <div className='relative md:flex w-full items-center md:justify-between justify-center' style={{ marginTop: 100, marginBottom: 100 }}>
            <div className='w-full' style={{ width: '100%' }}>
               <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6">
                  "Porque escolher nosso time?
               </h1>
               <p className='text-white'>Transformamos suas ideias em soluções digitais práticas e impactantes, com criatividade, eficiência e um suporte que você pode confiar.</p>

            </div>

            <div className='flex-row justify-center items-center md:mt-0 mt-10 ' style={{ width: '100%', backgroundColor: '#fff' }}>

               <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6 " style={{ backgroundColor: '#6716cf', padding: 30 }}>
                  Somo Conhecidos por
               </h1>
               <div className='flex-col p-5 ' style={{ gap: 10 }}>
                  <div className='flex gap-4 rounded-md' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#6716cf'} />
                     <h1 className='text-[#6716cf] font-mono text-lg'>Desenvolvimento Resposivo</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#6716cf'} />
                     <h1 className='text-[#6716cf] font-mono text-lg'>Integração de Sistemas</h1>
                  </div>
                  <div className='flex gap-4' style={{ paddingTop: 10, paddingBottom: 10 }}>
                     <CheckIcon size={24} color={'#6716cf'} />
                     <h1 className='text-[#6716cf] font-mono text-lg'>Manutenções e correções de bug's</h1>
                  </div>
                  <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                     <Button className='mt-8' style={{ padding: 20 }}>Contate-nos</Button>
                  </Link>
               </div>
            </div>

         </div>
         <div className='flex-col w-full justify-center items-center'>
            <h1 className="text-2xl md:text-3xl text-white font-mono font-bold text-center mb-6 ">Perguntas Frequentes</h1>
            <div className='flex-col'>
               <div className='flex-col'>
                  <h1 className='text-white font-mono'>Como começamos?</h1>
                  <p className='text-white font-mono'>Começamos a dois anos atrás buscando e captando projetos pequenos ainda como freelancer.</p>
               </div>
            </div>
         </div>

      </div>
   )
}
