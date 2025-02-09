'use client'

import { ArrowLeft, ArrowLeftCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const project = [
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
            image: '/imageSecurityKEy/security-1.jpg'
         },
         {
            id: 2,
            image: '/imageSecurityKEy/security-2.jpg'
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

const ProjectId = ({ params }: { params: Promise<{ id: string }> }) => {
   // Resolver a Promise de params
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const { id } = use(params);

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


      <div className="flex flex-col w-full bg-slate-950 lg:h-[100%] md:h-[100vh] justify-between p-10 ">
         <div className="flex-col ">
            <div className="flex gap-10">
               <Link
                  href={'/'}
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
               >
                  <ArrowLeft color="#fff" size={40} />
               </Link>
               <h1 className="text-2xl md:text-4xl font-bold text-white font-mono">{projectData.name}</h1>
            </div>
            <p className="mt-4 text-md text-white font-mono">{projectData.description}</p>
         </div>



         <div className="mt-8">
            <h2 className="text-2xl md:text-xl font-semibold text-white font-mono mb-10">Imagens do Projeto:</h2>
            <div className="w-full flex-wrap flex gap-12 justify-center md:justify-between items-center ">
               {projectData.images.map((image) => (
                  <div key={image.id} onClick={() => setSelectedImage(image.image)} className="cursor-pointer">
                     <Image
                        width={180}
                        height={120}
                        src={image.image}
                        alt={`${projectData.name} - imagem ${image.id}`}
                        className="rounded-lg shadow-lg md:w-[120px] p-2 hover:underline-offset-1"
                     />
                  </div>
               ))}
            </div>
            <div
               className={`mt-10 `}

            >
               <h1>Tecnologias usadas.</h1>
               {projectData.tecnololigas_usadas.map((tec, index) => (
                  <div
                     key={index} // Sempre adicione uma chave única ao map para evitar erros
                     className="w-full flex-col justify-between items-center pb-6"
                  >
                     <div className="flex justify-between border-slate-50 border-y-[1px] py-6">
                        <p className="text-white font-mono text-[12px] md:text-[14px]">Possui AI?: </p>
                        <p className="text-white font-mono text-[12px] md:text-[14px] text-end">{tec.Ai}</p>
                     </div>
                     <div className="flex justify-between border-slate-50 border-b-[1px] py-6">
                        <p className="text-white font-mono text-[12px] md:text-[14px]">Possui Backend?</p>
                        <p className="text-white font-mono text-[12px] md:text-[14px] text-end">{tec.back_end}</p>
                     </div>
                     <div className="flex justify-between border-slate-50 border-b-[1px] py-6">
                        <p className="text-white font-mono text-[12px] md:text-[14px]">Qual o tipo de estilo usado?</p>
                        <p className="text-white font-mono text-[12px] md:text-[14px] text-end">{tec.estilo}</p>
                     </div>
                     <div className="flex justify-between border-slate-50 border-b-[1px] py-6">
                        <p className="text-white font-mono text-[12px] md:text-[14px]">Qual o Framework usado?</p>
                        <p className="text-white font-mono text-[12px] md:text-[14px] text-end">{tec.framework}</p>
                     </div>
                     <div className="flex justify-between border-slate-50 border-b-[1px] py-6">
                        <p className="text-white font-mono text-[12px] md:text-[14px]">Qual Linguagem usada?</p>
                        <p className="text-white font-mono text-[12px] md:text-[14px] text-end">{tec.linguagem}</p>
                     </div>
                  </div>
               ))}
            </div>


         </div>
         {projectData.link && (
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
         )}

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

   );
};

export default ProjectId;


