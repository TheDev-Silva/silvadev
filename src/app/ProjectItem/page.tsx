"use client"
import React, { useState } from 'react';
import { Carousel } from './Carrosel';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { StaticImageData } from 'next/image';

interface ProjectProp {
   id: number;
   name: string;
   description: string;
   link: string;
   images: { id: number; image: StaticImageData | string }[];
   backgroundImage: string
}

interface ProjectsProps {
   project: ProjectProp[];
}

export default function ProjectItem({ project }: ProjectsProps) {

   const [isLoading, setIsLoading] = useState(false)

   const router = useRouter();

   const handleNavigate = (id: number) => {

      setIsLoading(true)
      try {
         setTimeout(() => {
            router.push(`/projectId/${id}`);
         }, 500);
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
         console.log('Erro ao buscar Projeto')
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
         <div className="flex-col w-full justify-center items-center bg-slate-950">
            <h1 className="md:text-3xl text-2xl text-white font-mono font-bold pt-10 text-center ">Projetos já Desenvolvidos</h1>

            <div className="flex w-full justify-center item-center ">

               <div className="border-white w-full relative z-10 pt-[50px] flex flex-col gap-20" >
                  {project.map((item) => (

                     <div key={item.id} className="md:flex relative md:w-full md:justify-between justify-center items-center text-white p-5 rounded-lg mb-5 border-l-neonGreen border-b-[#1e3a8a] shadow-neon" style={{ borderBottomWidth: 4, borderLeftWidth: 4, backgroundColor: '#1e3a8a89', boxShadow: '#1e3a8a', gap: 15 }}>

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
                        <div className="w-[100%] md:w-[70%] flex justify-center rounded-lg overflow-hidden">

                           <Carousel images={item.images} key={item.id} />
                        </div>



                     </div>
                  ))}
                  {/* <div
                     className="relative flex flex-wrap w-full md:justify-between justify-center  items-center bg-balck p-10 "
                     style={{
                        backgroundImage: "url('/computer-monitor-with-world-map-screen-night-3d-rendering.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                     }}
                  >
                    
                     <div
                        className="absolute inset-0 bg-black opacity-85 z-10"
                        style={{ backdropFilter: "blur(4px)" }} // Ajuste o valor para controlar o desfoque
                     ></div>

                     
                     <div className='relative md:w-[380px] md:h-[380px] w-[200px] h-[200px] bg-gradient-to-l from-[#6716cf] to-[#020617] rounded-full overflow-hidden justify-center items-center z-10' style={{ zIndex: 20 }}>
                        <Image
                           src={'/perfil-2-removebg-preview.png'}
                           alt={'foto-perfil'}
                           width={400}
                           height={400}
                           quality={90}
                           className="relative top-[50px] md:w-[400px] md:h-[400px] w-[200px] h-[200px] md:object-contain object-contain "
                        />
                     </div>

                     <div className="relative flex-col md:justify-end justify-center items-end mt-10 z-10">
                        <h1 className='font-mono md:text-4xl text-2xl text-white md:text-right text-center'>No one can</h1>
                        <h1 className='font-mono md:text-4xl text-2xl text-white md:text-right text-center'>Achieve success without</h1>
                        <h1 className='font-mono md:text-4xl text-2xl text-white md:text-right text-center'>Hard work</h1>
                     </div>
                  </div>
                  <h1 className='text-white text-center mb-40 italic'>Criado e Desenvolvido por SilvaDev - Copyright 2024</h1> */}
               </div>
            </div>

         </div>
      </>
   );
}
