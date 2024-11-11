import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Carousel } from './Carrosel';

interface ProjectProp {
   id: number;
   name: string;
   description: string;
   link: string;
   images: { id: number; image: StaticImageData | string }[];
}

interface ProjectsProps {
   project: ProjectProp[];
}

export default function ProjectItem({ project }: ProjectsProps) {


   const [showImage, setShowImage] = useState<string | null>(null)



   return (
      <div className="flex-col w-full justify-center items-center bg-black">
         <h1 className="md:text-3xl text-3xl text-white font-mono font-bold pt-10 text-center ">Projetos já Desenvolvidos</h1>
         <div className="flex w-full justify-center item-center bg-black">
            <div className="border-white w-full flex-col p-[50px]">
               {project.map((item) => (

                  <div key={item.id} className="md:flex w-full md:h-[480px] bg-gradient-to-tr to-[#6716cf] from-[#0009] md:justify-between justify-center items-center text-white p-5 gap-4 rounded-lg mb-5">
                     <div className='flex-col md:w-[45%] p-4'>
                        <h1 className='font-mono uppercase md:text-4xl text-2xl pb-10 tracking-widest'>{item.name}</h1>
                        <p className='font-mono md:text-base text-sm'>{item.description}</p>

                        <Link href={item.link}>
                           <button>
                              <h1 className='font-mono underline'>clique e veja esse</h1>
                           </button>
                        </Link>
                     </div>
                     <div className="w-[100%] md:w-[70%] flex justify-center rounded-lg overflow-hidden">

                        <Carousel images={item.images} key={item.id} />
                     </div>



                  </div>
               ))}
               <div
                  className="relative md:flex flex-wrap md:justify-between justify-center w-full items-center bg-transparent"
                  style={{
                     backgroundImage: "url('/computer-monitor-with-world-map-screen-night-3d-rendering.jpg')",
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     position: "relative",
                  }}
               >
                  {/* Sobreposição para aplicar opacidade */}
                  <div
                     className="absolute inset-0 bg-black opacity-80 z-10"
                     style={{ backdropFilter: "blur(4px)" }} // Ajuste o valor para controlar o desfoque
                  ></div>

                  {/* Conteúdo principal */}
                  <div className='relative flex md:h-[380px] md:w-[380px] w-[380px] h-[380px] bg-gradient-to-l from-[#6716cf] to-[#020617] rounded-full overflow-hidden justify-center items-center z-10' style={{ zIndex: 20 }}>
                     <Image
                        src={'/perfil-2-removebg-preview.png'}
                        alt={'foto-perfil'}
                        width={400}
                        height={400}
                        quality={90}
                        className="relative top-[50px] md:w-[400px] md:h-[400px] w-[360px] h-[360px] md:object-contain object-contain "
                     />
                  </div>

                  <div className="relative flex-col md:justify-end justify-center items-end mt-10 z-10">
                     <h1 className='font-mono md:text-4xl text-2xl text-white md:text-right text-center'>No one can</h1>
                     <h1 className='font-mono md:text-4xl text-2xl text-white md:text-right text-center'>Achieve success without</h1>
                     <h1 className='font-mono md:text-4xl text-2xl text-white md:text-right text-center'>Hard work</h1>
                  </div>
               </div>
               <h1 className='text-white text-center mt-40 italic'>Criado e Desenvolvido por SilvaDev - Copyright 2024</h1>
            </div>
         </div>
               
      </div>
   );
}
