
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const project = [
   {
      id: 1,
      name: 'Security Key',
      description: 'O Security Key é um aplicativo de gerenciamento de senhas projetado para oferecer segurança e simplicidade. Com ele, você precisa memorizar apenas uma senha mestra, e o app se encarrega de armazenar de maneira segura todas as suas senhas importantes, como as de redes sociais (Facebook, Instagram), cartões, contas de sites, aplicativos e muito mais. Esse sistema de armazenamento permite que você tenha fácil acesso a todas as suas senhas, mantendo-as protegidas com criptografia robusta e acessíveis apenas com a senha mestra. Com o Security Key, sua segurança e conveniência estão em primeiro lugar.',
      link: 'sem endereco',
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
      description: 'O The Dieta é um aplicativo de dicas nutrição personalizado que ajuda os usuários a atingir seus objetivos de saúde, como emagrecimento, hipertrofia ou ganho de massa muscular. Ao fornecer dados como nome, peso, altura, idade e meta, a inteligência artificial gera uma dieta equilibrada para a semana, acompanhada de sugestões de exercícios. O app também apresenta gráficos de progresso para monitoramento de ganho ou perda de peso, além de recomendações de suplementos, tornando o processo de acompanhamento mais fácil e eficiente.',
      link: 'https://the-burger-rock.vercel.app/',
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
      link: 'https://the-burger-rock.vercel.app/',
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
   const { id } = use(params);

   // Buscar os dados do projeto pelo ID
   const projectData = project.find((item) => item.id === parseInt(id, 10));

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
      <div className="flex flex-col w-full p-8 pt-[150px] bg-slate-950 ">
         <h1 className="text-4xl font-bold text-white">{projectData.name}</h1>
         <p className="mt-4 text-lg text-gray-300">{projectData.description}</p>

         <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white">Imagens:</h2>
            <div className="flex flex-wrap gap-12 mt-4 justify-center items-center w-full">
               {projectData.images.map((image) => (
                  <Image
                     key={image.id}
                     width={0}
                     height={0}
                     sizes={'100vh'}
                     quality={90}
                     src={image.image}
                     alt={`${projectData.name} - Imagem ${image.id}`}
                     className="rounded-lg shadow-lg w-[380px]"
                  />
               ))}
            </div>
         </div>

         {projectData.link && (
            <div className="flex w-full mt-8 justify-between pl-5 pr-5">
               <Link
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
               >
                  Acesse o projeto
               </Link>
               <Link
                  href={'/'}
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
               >
                  voltar
               </Link>
            </div>
         )}
      </div>
   );
};

export default ProjectId;


