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
import TailwindLogo from '../images/tailwind-logo.png'
import FirebaseLogo from '../images/firebase-logo.png'
import { useEffect, useRef, useState } from "react";
import { BiCommentDots } from "react-icons/bi";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
import Contact from "./Contacts/page";
import DepoimentClient from "@/depoimentsClient";
import WhatsAppContact from "../whatsappContact/whatsappContact";
import Footer from "@/footer/footer"
import { Menu, X } from "lucide-react";
import ProjectList from "../components/ProjectList";
import { projects } from "@/data/projectData";

interface ImageProps {
   id: number,
   image: string | StaticImageData,
   name: string,
   description: string
}




export default function Home() {


   const initialRef = useRef<HTMLDivElement>(null);
   const aboutMeRef = useRef<HTMLDivElement>(null);
   const tecnologiasRef = useRef<HTMLDivElement>(null);
   const projectsRef = useRef<HTMLDivElement>(null);
   const contactsRef = useRef<HTMLDivElement>(null)
   const depoimentsRef = useRef<HTMLDivElement>(null)

   const [isOpen, setIsOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)
   const [logoText, setLogoText] = useState(false)
   //const sectionRef = useRef<HTMLDivElement>(null)

   // Função para rolar até a seção
   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
         window.scrollTo({
            top: ref.current.offsetTop - 120, // Obtém a posição da seção
            behavior: "smooth", // Rolagem suave
         });
      }
   };

   const navNavigations = [
      { id: 1, name: "Início", href: "Initial", ref: initialRef },
      { id: 2, name: "Sobre", href: "#AboutMe", ref: aboutMeRef },
      { id: 3, name: "Tecnologías", href: "#tecnologias", ref: tecnologiasRef },
      { id: 4, name: "Projetos", href: "#projects", ref: projectsRef },
      { id: 5, name: "Avaliações", href: "#depoiments", ref: depoimentsRef },

   ]



   const tecnology: ImageProps[] = [
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
         image: TailwindLogo,
         description: 'Dizzle é tudo'
      },
      {
         id: 10,
         name: 'Firebase',
         image: FirebaseLogo,
         description: 'Firebase Console é tudo.'
      }

   ]



   useEffect(() => {

      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true)
         } else {
            setIsScrolled(false)
         }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)

   }, [])

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 768) {
            setLogoText(true);
         } else {
            setLogoText(false);
         }
      };

      // Verifica o tamanho inicial da tela
      handleResize();

      // Adiciona o listener de resize
      window.addEventListener('resize', handleResize);

      // Remove o listener ao desmontar o componente
      return () => {
         window.removeEventListener('resize', handleResize);
      };

   }, [])



   return (
      <>
         <div className="flex-wrap w-full z-50 rounded-full bg-green-500 overflow-hidden md:w-[786px] md:overflow-hidden hidden md:block" style={{ position: 'absolute', backgroundColor: '#fff' }}>

            <WhatsAppContact />

         </div>

         <div className={`fixed w-full z-40 ${isOpen === true && 'pb-6'} md:p-6 p-2 transition-all duration-500 ${isScrolled ? ' backdrop-blur-sm' : 'justify-between backdrop-blur-md'
            }`}>

            {/* Camada de fundo com desfoque */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-primary-light to-[#000] ${isScrolled ? 'opacity-80' : 'opacity-0'
               } transition-opacity duration-500`}></div>

            {/* Conteúdo do Header */}
            <div className="relative flex justify-between items-center w-full h-full p-5">
               <div className='flex items-center min-w-[50px]'>
                  <div className='flex'>
                     <Link href={'/'}>
                        <div className='flex flex-col justify-items-end'>

                           <Image
                              src={!logoText ? '/logo-completa.png' : '/logo-reduzida.png'}
                              alt='logo'
                              width={0}
                              height={0}
                              quality={90}
                              sizes={'100vw'}
                              className={!logoText ? 'w-[200px] drop-shadow-textlg' : 'w-[50px] drop-shadow-textlg'}
                           />

                        </div>
                     </Link>

                  </div>

               </div>

               {!logoText && <div className="hidden md:flex space-x-8">
                  {navNavigations.map((nav) => (
                     <a
                        key={nav.id}
                        href={nav.href}

                        onClick={(e) => {
                           e.preventDefault()
                           scrollToSection(nav.ref)
                        }}
                        className="p-2 font-mono text-center text-white cursor-pointer hover:text-sky-200 hover:scale-110 hover:opacity-90 transition-transform duration-300"
                     >
                        {nav.name}
                     </a>
                  ))}

                  <div className='flex items-center gap-2 justify-center cursor-pointer md:w-[200px] bg-primary-light rounded-sm p-2'
                     onClick={() => scrollToSection(contactsRef)}
                  >
                     <BiCommentDots size={24} color="#fff" />
                     {!logoText && <span className="font-mono hover:tracking-widest hover:transition-all text-white font-bold">contatos</span>}

                  </div>
               </div>}
               <button
                  className="md:hidden text-white"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
               </button>



            </div>
            <div
               className={`md:hidden md:mb-4 relative inset-0 transition-all md:p-6 duration-300 ease-in-out ${isOpen
                  ? "max-h-64 opacity-100 "
                  : "max-h-0 opacity-0 pointer-events-none "
                  } `}
            >
               <div className="p-6 space-y-4">
                  {navNavigations.map((navMob) => (


                     <a
                        key={navMob.id}
                        href={navMob.href}
                        onClick={(e) => {
                           e.preventDefault()
                           setIsOpen(false)
                           scrollToSection(navMob.ref)
                        }}
                        className={`block text-white hover:text-primary transition-colors z-10 ${isScrolled ? 'hover:text-black hover:font-bold' : 'hover:text-primary-light hover:font-bold '} cursor-pointer`}
                     >

                        {navMob.name}

                     </a>

                  ))}
                  <div className='flex items-center gap-2 justify-center cursor-pointer md:w-[200px] bg-primary-light rounded-sm p-2 mb-4'
                     onClick={() => [scrollToSection(contactsRef), setIsOpen(false)]}
                  >
                     <BiCommentDots size={24} color="#fff" />
                     <span className="font-mono hover:tracking-widest hover:transition-all text-white font-bold">contatos</span>

                  </div>
               </div>
            </div>
         </div>
         <div className="flex-col w-fulljustify-start items-center bg-slate-950 md:p-[50px] p-[30px]" onClick={() => setIsOpen(false)}>

            <div ref={initialRef}>
               <Initial />
            </div>
            <div ref={aboutMeRef}>
               <AboutMe />
            </div>
            <div ref={tecnologiasRef}>
               <Tecnologias tecnologyItem={tecnology} />
            </div>
            <div ref={projectsRef}>
               <ProjectList project={projects} />

            </div>
            <div ref={depoimentsRef}>
               <DepoimentClient />
            </div>
            <div ref={contactsRef}>
               <Contact />
            </div>
            {/* <Clients /> */}
            <Footer />
         </div>
      </>
   );
}
