'use client'

import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState, useRef } from 'react'
import { Carousel } from '../ProjectItem/Carrosel';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
/* import { project } from '../projectId/[id]/page'; */
import { StaticImageData } from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';
import Header from '../Header/Header';


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


/* export const project = [
   {
      id: 1,
      name: 'Security Key',
      description: 'O Security Key é um aplicativo de gerenciamento de senhas projetado para oferecer segurança e simplicidade. Com ele, você precisa memorizar apenas uma senha mestra, e o app se encarrega de armazenar de maneira segura todas as suas senhas importantes, como as de redes sociais (Facebook, Instagram), cartões, contas de sites, aplicativos e muito mais. Esse sistema de armazenamento permite que você tenha fácil acesso a todas as suas senhas, mantendo-as protegidas com criptografia robusta e acessíveis apenas com a senha mestra. Com o Security Key, sua segurança e conveniência estão em primeiro lugar.',
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
 */
export default function AllProjects({ project }: ProjectsProps) {

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
         <Header icon={
            <Link href={'/'}>
               <div className="text-white p-2 rounded-full hover:bg-white/10 transition">
              <ArrowLeftIcon size={24} />
            </div>
            </Link>
         } />
         <div className="flex-col w-full justify-center items-center bg-slate-950 p-10" style={{ paddingTop: 160 }}>




            <h1 className='text-2xl text-slate-50 font-mono text-center'>Outros Projetos</h1>

            <div className="grid-cols-2 w-full justify-center item-center ">

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

                           <Link key={item.id} href={`/ProjectId/${item.id}`}>
                              <Button onClick={() => [handleNavigate(item.id), handleIsloading()]} size={'lg'}
                                 className='flex w-full text-white hover:bg-primary-dark bg-primary-light transition-all duration-300 p-3 rounded-sm text-center items-center justify-center gap-3 mt-5'
                              >
                                 {isLoading ? <p className='uppercase text-white'>carregando...</p> : <p className='uppercase text-white'>veja mais</p>}
                              </Button>

                           </Link>
                        </div>
                        <div className="w-[100%] md:w-[70%] flex justify-center rounded-lg overflow-hidden">

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