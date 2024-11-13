'use client'
import AboutMe from "@/AboutMe/page";
import Tecnologias from "@/Tecnologia/page";
import Initial from "./Initial/page";

import JavascriptLogo from '../images/javascript-logo-1.png'
import NodeLogo from '../images/Node.js-Logo.wine.png'
import CSSLogo from '../images/css.logo.png'
import ReactLogo from '../images/react.logo.png'
import ShadcnLogo from '../images/shadcn.logo.png'
import NextJSLogo from '../images/nextjs.logo.png'
import PrismaLogo from '../images/prisma.logo.png'
import RNELogo from '../images/RNE.logo.png'
import DrizzleLogo from '../images/drizlle-logo.png'
import TailwindLogo from '../images/tailwind-logo.png'
import FirebaseLogo from '../images/firebase-logo.png'
import ProjectItem from "./ProjectItem/page";

import Burger1 from '../../public/imageTheBurgerRock/burger-1.png'





export default function Home() {



   const tecnology = [
      {
         id: 1,
         name: 'Javascript',
         image: JavascriptLogo,
         description: `É uma linguagem de programação de alto nível que é usada para adicionar interatividade e dinamicidade.`
      },
      {
         id: 2,
         name: 'Node',
         image: NodeLogo,
         description: 'Uma linguagem de programação bastante usada para criar apis  robustas.'
      },
      {
         id: 3,
         name: 'CSS',
         image: CSSLogo,
         description: 'Folhas de estilo, usado para dar vida a página.'
      },
      {
         id: 4,
         name: 'React',
         image: ReactLogo,
         description: 'React é tudo'
      },
      {
         id: 5,
         name: 'Shadcn UI',
         image: ShadcnLogo,
         description: 'Shadcn é tudo'
      },
      {
         id: 6,
         name: 'Next.JS',
         image: NextJSLogo,
         description: 'Next.JS é tudo'
      },
      {
         id: 7,
         name: 'Prisma',
         image: PrismaLogo,
         description: 'Prisma é tudo'
      },
      {
         id: 8,
         name: 'RNE',
         image: RNELogo,
         description: 'React Native Expo é tudo'
      },
      {
         id: 9,
         name: 'Drizzle',
         image: 'DrizzleLogo',
         description: 'Dizzle é tudo'
      },
      {
         id: 10,
         name: 'Tailwind',
         image: TailwindLogo,
         description: 'Tailwind é tudo.'
      },
      {
         id: 11,
         name: 'Firebase',
         image: FirebaseLogo,
         description: 'Firebase Console é tudo.'
      }

   ]

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
         ]

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
         ]

      },
      {
         id: 3,
         name: 'The Dieta',
         description: 'O The Dieta é um aplicativo de nutrição personalizado que ajuda os usuários a atingir seus objetivos de saúde, como emagrecimento, hipertrofia ou ganho de massa. Ao fornecer dados como nome, peso, altura, idade e meta, a inteligência artificial gera uma dieta equilibrada para a semana, acompanhada de sugestões de exercícios. O app também apresenta gráficos de progresso para monitoramento de ganho ou perda de peso, além de recomendações de suplementos, tornando o processo de acompanhamento mais fácil e eficiente.',
         link: '',
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
         ]

      },
      {
         id: 4,
         name: 'Love & Coffe',
         description: 'O Love & Coffee é um aplicativo simples e prático para amantes de café. Com ele, você pode escolher entre uma variedade de cafés, como macchiato, expresso tradicional, americano e com leite. O processo é fácil: basta selecionar seu café preferido, personalizar sua escolha, e pagar diretamente pelo app. Ideal para quem busca rapidez, conveniência e um ótimo café, tudo na palma da mão.',
         link: '',
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
         ]

      }
   ]


   return (
      <div className="flex-col md:w-full justify-start items-center bg-[#000] ">
         <Initial />
         <AboutMe />

         <Tecnologias tecnologyItem={tecnology} />
         <ProjectItem project={project} />

      </div>
   );
}
