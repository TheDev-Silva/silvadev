'use client'

import Header from "@/app/Header/Header";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/data/projectData";
import WhatsProject from "@/whatsappContact/whatsProject";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectId = ({ params }: { params: { id: string, slug: string } }) => {
   // Resolver a Promise de params
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const id = params.slug.split('-')[0];

   const [loading] = useState(false)


   // Buscar os dados do projeto pelo ID

   const projectData = projects.find((item) => item.id === Number(id));

   // Caso o projeto não exista
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
               <div>
                  <h1 className='text-white font-mono md:text-[20px] text-md uppercase'>{projectData.name}</h1>
                  <p className='text-white font-mono md:text-[16px] text-[14px]'>detalhes deste projeto</p>
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
         <div className="flex flex-wrap bg-slate-950 w-full md:h-full "
            style={{
               backgroundImage: `url(${projectData?.backgroundImage})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'repeat'
            }}
         >
            <div className="flex pt-[140px] md:px-16 p-4 text-center">
               <p className="mt-4 md:text-sm text-[16px] text-white font-mono">{projectData.description}</p>
            </div>

            <div className="flex justify-around w-full bg-black">

               <div className="md:p-10 p-0 flex-wrap md:grid md:grid-cols-2 gap-12 justify-center md:justify-center items-center mx-8 mb-2 ">
                  <Carousel
                     opts={{
                        align: "start",
                        loop: false,

                     }}
                     className="flex relative items-center"
                  >
                     <CarouselContent
                        className=""
                     >
                        {projectData.images.map((image, index) => (
                           <CarouselItem key={index} onClick={() => setSelectedImage(image.image)}
                              className=""
                           >
                              <div className="">
                                 <Card className="overflow-hidden h-full">
                                    <div className="aspect-video relative bg-slate-200 group">
                                       <Image
                                          width={0}
                                          height={0}
                                          sizes="100vw"
                                          src={image.image}
                                          alt={image.image}
                                          className="w-full h-[70vh] object-contain transition-transform duration-300 group-hover:scale-105"

                                       />
                                       {image.id === 1 && <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex ">

                                          <div className="bg-white">
                                             <div className="flex md:w-full relative bottom-[20px] text-center text-md font-semibold items-center z-10 justify-center">
                                                {loading ?
                                                   <p>Carregando...</p>

                                                   : <WhatsProject projectName={projectData.name} text={projectData.name} />}
                                             </div>

                                          </div>

                                       </div>

                                       }


                                    </div>
                                 </Card>

                              </div>
                           </CarouselItem>
                        ))}
                     </CarouselContent>
                     <CarouselPrevious className="absolute left-4 -bootom-10 -translate-y-1/2 bg-primary-dark_opacity text-white p-6" size={'lg'} />
                     <CarouselNext className="absolute right-4 -bootom-10 -translate-y-1/2 bg-primary-dark_opacity text-white p-6" size={'lg'} />

                    {/*  <div className="bg-white">
                        <div className="flex h-16 md:w-full absolute bottom-[15px] text-center text-md font-semibold items-center z-10 justify-center">
                           {loading ?
                              <p>Carregando...</p>

                              : <WhatsProject projectName={projectData.name} text={projectData.name} />}
                        </div>

                     </div> */}

                  </Carousel>

                  <div
                     className={`w-full flex flex-col justify-between items-center bg-primary-light rounded-lg mt-10 md:mt-0`}

                  >

                     {projectData.tecnololigas_usadas?.map((tec, index) => (
                        <div
                           key={index} // Sempre adicione uma chave única ao map para evitar erros
                           className="relative w-full flex-col justify-center items-center bg-gradient-to-br from-primary-dark backdrop-blur-md bg-opacity-45 md:px-6 px-2 py-4 rounded-lg h-[70vh] "
                        >
                           <div className="flex justify-between py-3 md:py-6">
                              <p className="text-white font-mono font-bold text-[14px] md:text-sm">AI :</p>
                              <p className="text-white font-mono text-[14px] md:text-sm text-end">{tec.Ai}</p>
                           </div>

                           <div className="flex justify-between border-slate-50 border-y-[1px] py-3 md:py-6">
                              <p className="text-white font-mono font-bold text-[14px] md:text-sm">Backend :</p>
                              <p className="text-white font-mono text-[14px] md:text-sm text-end">{tec.back_end}</p>
                           </div>

                           <div className="flex justify-between border-slate-50 border-b-[1px] py-3 md:py-6">
                              <p className="text-white font-mono font-bold text-[14px] md:text-sm">Estilo :</p>
                              <p className="text-white font-mono text-[14px] md:text-sm text-end">{tec.estilo}</p>
                           </div>

                           <div className="flex justify-between border-slate-50 border-b-[1px] py-3 md:py-6">
                              <p className="text-white font-mono font-bold text-[14px] md:text-sm">Framework :</p>
                              <p className="text-white font-mono text-[14px] md:text-sm text-end">{tec.framework}</p>
                           </div>

                           <div className="flex justify-between border-slate-50 border-b-[1px] py-3 md:py-6">
                              <p className="text-white font-mono font-bold text-[14px] md:text-sm">Linguagem:</p>
                              <p className="text-white font-mono text-[14px] md:text-sm text-end md:truncate">{tec.linguagem}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>



            </div>

            {/* Modal */}
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
};

export default ProjectId;


