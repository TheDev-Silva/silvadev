'use client'

import Header from "@/app/Header/Header";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import WhatsProject from "@/whatsappContact/whatsProject";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const project = [
   {
      id: 1,
      name: 'Security Key',
      description: 'O Security Key é um aplicativo de gerenciamento de senhas projetado para oferecer segurança e simplicidade. Com ele, você precisa memorizar (guardar) apenas uma única senha mestra, e o app se encarrega de armazenar de maneira segura todas as suas senhas importantes, como as de redes sociais (Facebook, Instagram), cartões, contas de sites, aplicativos e muito mais. Esse sistema de armazenamento permite que você tenha fácil acesso a todas as suas senhas, mantendo-as protegidas com criptografia robusta e acessíveis apenas com a senha mestra. Com o Security Key, sua segurança e conveniência estão em primeiro lugar.',
      link: 'sem endereco',
      tecnololigas_usadas: [
         {

            framework: 'React Native Expo',
            estilo: 'StyleSheet Inline',
            linguagem: 'Javascript',
            back_end: 'Não',
            Ai: 'Não'
         }
      ],
      images: [
         {
            id: 1,
            image: '/imageSecurityKEy/security-1.jpg',
         },
         {
            id: 2,
            image: '/imageSecurityKEy/security-2.jpg',
         },
         {
            id: 3,
            image: '/imageSecurityKEy/security-3.jpg'
         },
         {
            id: 4,
            image: '/imageSecurityKEy/security-4.jpg'
         },
         {
            id: 5,
            image: '/imageSecurityKEy/security-5.jpg'
         },
         {
            id: 6,
            image: '/imageSecurityKEy/security-6.jpg'
         }
      ],
      backgroundImage: '/imageSecurityKEy/bg-keystone.png'

   },
   {
      id: 2,
      name: 'The Burger Rock',
      description: 'O The Burger Rock é uma hamburgueria que combina o estilo metaleiro com uma experiência gastronômica única. Localizada em Curitiba, oferece hambúrgueres artesanais variados, como o "Artesanal de Bacon" e o "Levíssimo Burger", além de bebidas e acompanhamentos. O ambiente e o atendimento remetem ao estilo rock, proporcionando uma experiência temática e descontraída para os fãs de boa música e hambúrgueres. Acesse o site para conferir o cardápio completo e fazer seu pedido: The Burger Rock.',
      link: 'https://the-burger-rock.vercel.app/',
      tecnololigas_usadas: [
         {

            framework: 'HTML',
            estilo: 'CSS',
            linguagem: 'Javascript',
            back_end: 'Não',
            Ai: 'Não'
         }
      ],
      images: [
         {
            id: 1,
            image: '/imageTheBurgerRock/burger-1.png'
         },
         {
            id: 2,
            image: '/imageTheBurgerRock/burger-2.png'
         },
         {
            id: 3,
            image: '/imageTheBurgerRock/burger-3.png'
         },
         {
            id: 4,
            image: '/imageTheBurgerRock/burger-4.png'
         },
         {
            id: 5,
            image: '/imageTheBurgerRock/burger-5.png'
         },
         {
            id: 6,
            image: '/imageTheBurgerRock/burger-6.png'
         }
      ],
      backgroundImage: '/imageTheBurgerRock/bg-rock-burger.png'

   },
   {
      id: 3,
      name: 'The Dieta',
      description: 'O The Dieta é um aplicativo de dicas de nutrição personalizado que ajuda os usuários a atingir seus objetivos de saúde, como emagrecimento, hipertrofia ou ganho de massa muscular. Ao fornecer dados como nome, peso, altura, idade e meta, a inteligência artificial gera uma dieta equilibrada para a semana, acompanhada de sugestões de exercícios. O app também apresenta gráficos de progresso para monitoramento de ganho ou perda de peso, além de recomendações de suplementos, tornando o processo de acompanhamento mais fácil e eficiente.',
      link: 'url indisponível',
      tecnololigas_usadas: [
         {

            framework: 'React Native Expo',
            estilo: 'StyleSheet Inline',
            linguagem: 'Javascript/typescript',
            back_end: 'Sim',
            Ai: 'Gemini'

         }
      ],
      images: [
         {
            id: 1,
            image: '/imageTheDieta/dieta-1.jpg'
         },
         {
            id: 2,
            image: '/imageTheDieta/dieta-2.jpg'
         },
         {
            id: 3,
            image: '/imageTheDieta/dieta-3.jpg'
         },
         {
            id: 4,
            image: '/imageTheDieta/dieta-4.jpg'
         },
         {
            id: 5,
            image: '/imageTheDieta/dieta-5.jpg'
         },
         {
            id: 6,
            image: '/imageTheDieta/dieta-6.jpg'
         }
      ],
      backgroundImage: '/imageTheDieta/bg-the-dieta.png'

   },
   {
      id: 4,
      name: 'Love & Coffe',
      description: 'O Love & Coffee é um aplicativo simples e prático para amantes de café. Com ele, você pode escolher entre uma variedade de cafés, como macchiato, expresso tradicional, americano e com leite. O processo é fácil: basta selecionar seu café preferido, personalizar sua escolha, e pagar diretamente pelo app. Ideal para quem busca rapidez, conveniência e um ótimo café, tudo na palma da mão.',
      link: 'url indisponível',
      tecnololigas_usadas: [
         {

            framework: 'React Native Expo',
            estilo: 'StyleSheet Inline',
            linguagem: 'Javascript',
            back_end: 'Não',
            Ai: 'Não'
         }
      ],
      images: [
         {
            id: 1,
            image: '/imageLoveCoffe/love-1.jpg'
         },
         {
            id: 2,
            image: '/imageLoveCoffe/love-2.jpg'
         },
         {
            id: 3,
            image: '/imageLoveCoffe/love-3.jpg'
         },
         {
            id: 4,
            image: '/imageLoveCoffe/love-4.jpg'
         },
         {
            id: 5,
            image: '/imageLoveCoffe/love-5.jpg'
         },
         {
            id: 6,
            image: '/imageLoveCoffe/love-6.jpg'
         }
      ],
      backgroundImage: '/imageLoveCoffe/bg-love-coffe.png'
   }
]

const ProjectId = ({ params }: { params: { id: string } }) => {
   // Resolver a Promise de params
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const { id } = params;

   const [loading] = useState(false)


   // Buscar os dados do projeto pelo ID

   const projectData = (project.find((item) => item.id === Number(id)));

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
                  <h1 className='text-white font-mono text-[20px] uppercase'>{projectData.name}</h1>
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
         <div className="flex flex-col w-full bg-slate-950 md:h-full justify-between p-5">
            <div className="flex-col pt-[120px]">
              {/*  <div className="flex gap-10 items-center  text-center">
                  <Link
                     href={'/'}
                     rel="noopener noreferrer"
                     className="text-blue-400 underline"
                  >
                     <ArrowLeft color="#fff" className="md:w-[40px] w-6" />
                  </Link>
                  <h1 className="text-xl md:text-3xl font-bold text-white font-mono">{projectData.name}</h1>
               </div> */}
               <p className="mt-4 md:text-sm text-[16px] text-white font-mono">{projectData.description}</p>
            </div>


            <h1 className="text-white font-mono uppercase mb-4 text-center text-xl md:text-2xl mt-8">Tecnologias usadas neste projeto</h1>
            <div className="flex justify-around ">

               <div className="p-2 w-full flex-wrap md:grid md:grid-cols-2 gap-12 justify-center md:justify-center items-center mx-8">
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

                  <div
                     className={`w-full flex flex-col justify-between items-center bg-primary-light rounded-lg`}

                  >

                     {projectData.tecnololigas_usadas.map((tec, index) => (
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
            {/*  {projectData.link && (
            <div className="flex w-full mt-10 text-white">
               <Link
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"

               >
                  <h1 className="text-white font-mono text-lg md:text-xl">
                     Acesse o projeto
                  </h1>

               </Link>

            </div>
         )} */}

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


