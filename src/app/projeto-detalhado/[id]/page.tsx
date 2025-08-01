'use client'
import Header from '@/app/Header/Header';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { projects } from '@/data/projectData';
import WhatsProject from '@/whatsappContact/whatsProject';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState, useRef } from 'react'


export default function ProjectDetails({ params }: { params: { id: string } }) {

   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   const { id } = params;
   const [loading] = useState(false)


   // Buscar os dados do projeto pelo ID

   const projectData = (projects.find((item) => item.id === Number(id)));

   if (!projectData) {
      return (
         <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-red-500">Projeto não encontrado!</h1>
            <p className="text-lg text-gray-300">Verifique o ID e tente novamente.</p>
         </div>
      );
   }



   return (
      <>
         <Header
            text={
               <div className='flex-col'>
                  <h1 className='text-white font-mono text-[20px] uppercase'>{projectData?.name}</h1>
                  <p className='text-white'>detalhes deste projeto</p>
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
         <div className="flex-wrap items-center min-h-screen bg-gray-100 p-10 pt-32"

            style={{
               backgroundImage: `url(${projectData?.backgroundImage})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
            }}>




            <div>
               <p className='text-white'>{projectData?.description}</p>
            </div>
            <div className='p-10 w-full'>
               <Carousel
                  opts={{
                     align: "start",
                     loop: true,

                  }}
                  className="relative lg:w-[550px] "
               >
                  <CarouselContent
                     className="md:w-[50%]"
                  >
                     {projectData.images.map((image, index) => (
                        <CarouselItem key={index} onClick={() => setSelectedImage(image.image)}
                           className=""
                        >
                           <div className="py-4">
                              <Card className="overflow-hidden">
                                 <div className="aspect-video relative bg-slate-200 group">
                                    <Image
                                       width={0}
                                       height={0}
                                       sizes="100vw"
                                       src={image.image}
                                       alt={image.image}
                                       className="w-full h-[70vh] object-contain transition-transform duration-300 group-hover:scale-105"

                                    />
                                    {image.id === 1 && <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                       <h3 className="flex absolute top-[10px] left-[10px] text-center bg-primary-dark bg-opacity-45 backdrop-blur-lg rounded-md p-2 px-4 text-white text-lg font-semibold items-center gap-2">
                                          {projectData.name}
                                       </h3>

                                    </div>

                                    }


                                 </div>
                              </Card>

                           </div>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
                  <div className="bg-white">
                     <div className="flex h-16 w-full absolute bottom-[15px] text-center bg-black bg-opacity-45 backdrop-blur-sm rounded-md p-4 text-md font-semibold items-center gap-2 z-10 justify-center">
                        {loading ?
                           <p>Carregando...</p>

                           : <WhatsProject projectName={projectData.name} text={projectData.name} />}
                     </div>

                  </div>
                  <div className="flex relative w-45 h-45 bottom-0">


                  </div>
               </Carousel>
            </div>
            {selectedImage && (
               <button
                  onClick={() => setSelectedImage(null)}>
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                     <div className="relative">
                        <Image
                           src={selectedImage}
                           alt="Imagem ampliada"
                           width={250}
                           height={250}
                           className="rounded-lg shadow-lg"
                        />

                     </div>
                  </div>
               </button>
            )}
         </div>
      </>
   );
}