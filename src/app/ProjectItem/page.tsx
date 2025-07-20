"use client"
import React, { useState } from 'react';
import { Carousel } from './Carrosel';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

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
            <h1 className="md:text-3xl text-2xl text-white font-mono font-bold pt-10 text-center ">Projetos Desenvolvidos</h1>

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
               </div>
            </div>

            
               <Button className='bg-[#3b82f6] hover:bg-[#3b82f699]'>
                  <Link href={'/AllProjects'} className='p-4 gap-4 flex items-center'>
                     <h1 className='text-blue-50'>Mais Projetos</h1>
                     <ArrowRightIcon size={24} />
                  </Link>
               </Button>

           


         </div>
      </>
   );
}
