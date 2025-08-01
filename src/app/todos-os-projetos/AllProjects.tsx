'use client'

import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import Header from '../Header/Header';
//import { StaticImageData } from 'next/image';
import { Carousel } from '@/components/ProjectList/Carrosel';
import { projects } from '../page';



export default function AllProjects() {

   const [isLoading, setIsLoading] = useState(false)

   const router = useRouter();

   const handleNavigate = (id: number) => {

      setIsLoading(true)
      try {
         setTimeout(() => {
            router.push(`/projectId/${id}`);
         }, 500);

      } catch (error) {
         console.log('Erro ao buscar Projeto', error)
      } finally {
         setIsLoading(false)
      }


   };
   const handleIsloading = () => {
      setIsLoading(true)
      setTimeout(() => {
         setIsLoading(false)
      }, 5000);
   }
   return (

      <>
         <Header
            text={
               <div className=''>
                  <h1 className='text-white font-mono text-[20px]'>Mais Projetos</h1>
               </div>
            }

            icon={
               <Link href={'/'}>
                  <div className="text-white p-2 rounded-full hover:bg-white/10 transition">
                     <ArrowLeftIcon size={24} />
                  </div>
               </Link>
            }

         />
         <div className={`grid-cols-2 w-full justify-center h-full items-center bg-slate-950 p-10`} style={{ paddingTop: 120 }}>


            <div className="flex w-full justify-center item-center ">

               <div className="border-white w-full relative z-10 pt-[50px] flex flex-col gap-20 " >
                  {projects.map((item) => (

                     <div key={item.id}
                        className="md:flex relative md:w-full md:justify-between justify-center items-center text-white p-5 rounded-lg mb-5 border-l-neonGreen border-b-[#1e3a8a] shadow-neon"
                        style={
                           {
                              borderBottomWidth: 4,
                              borderLeftWidth: 4,
                              backgroundImage: `url(${item.backgroundImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              boxShadow: '#1e3a8a',
                              gap: 15
                           }}>

                        <div
                           className='absolute z-0 -inset-0 md:w-[200px] md:h-[200px] h-[100px] w-[100px] left-9 top-[30px] rounded-full bg-gradient-to-br to-primary-light from-[#000] transition-all duration-300 blur-md'
                        //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
                        >
                        </div>
                        <div
                           className='absolute w-[50px] h-[50px] right-5 bottom-[20px] rounded-full bg-gradient-to-br to-primary-light from-[#000] opacity-90 transition-all duration-300 blur-md'
                        //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
                        >

                        </div>
                        <div
                           className='absolute md:w-[50px] md:h-[50px] w-[40px] h-[40px] left-5  rounded-full bg-gradient-to-br to-primary-light from-[#000] bottom-[100px] transition-all duration-300 blur-md'
                        //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
                        >

                        </div>
                        <div
                           className='absolute md:w-[150px] md:h-[150px] max-h-md w-[80px] h-[80px] rounded-full bg-gradient-to-tr to-primary-dark from-[#000] right-10 top-52 bottom-[100px] transition-all duration-300 blur-md'
                        //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
                        ></div>


                        <div className='flex-col relative md:w-[45%] p-4 justify-between'>
                           <h1 className='font-mono capitalize md:text-4xl text-2xl pb-5 tracking-wider'>{item.name}</h1>
                           <p className='font-mono md:text-base text-[14px]'>{item.description.slice(0, 100)}...</p>

                           {/* <Link key={item.id} href={`/ProjectId/${item.id}`}> */}
                           <Button onClick={() => [handleNavigate(item.id), handleIsloading()]} size={'lg'}
                              className='flex w-full text-white hover:bg-primary-dark bg-primary-light transition-all duration-300 p-3 rounded-sm text-center items-center justify-center gap-3 mt-5'
                           >
                              {isLoading ? <p className='uppercase text-white'>carregando...</p> : <p className='uppercase text-white'>veja mais</p>}
                           </Button>

                           {/* </Link> */}
                        </div>
                        <div className="w-[100%] md:w-[50%] flex justify-center rounded-lg overflow-hidden">

                           <Carousel images={item.images} key={item.id} />
                        </div>



                     </div>
                  ))}
               </div>

            </div>

         </div>
      </>

   );
}