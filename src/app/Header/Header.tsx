'use client'
import React, { ReactNode, useState } from 'react'

interface IconProps {
   icon: ReactNode,
   text: ReactNode
}



export default function Header({ icon, text }: IconProps) {


   const [isScrolled ] = useState(false)
   /* const [logoText, setLogoText] = useState(false)





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

   }, []) */


   return (
      <div className={`fixed w-full z-40 md:p-6 p-2 transition-all duration-500 ${isScrolled ? 'h-[130px] backdrop-blur-sm' : 'h-[120px] bg-primary-dark justify-between'
         }`}>
         {/* Camada de fundo com desfoque */}
         <div className={`absolute inset-0 bg-gradient-to-tr from-primary-dark to-[#000] ${isScrolled ? 'opacity-80' : 'opacity-0'
            } transition-opacity duration-500`}></div>

         {/* Conteúdo do Header */}
         <div className="relative flex justify-between items-center w-full h-full p-5">
            <div className='flex items-center min-w-[50px]'>
               {/*  <div className='flex'>
                  <Link href={'/'}>
                     <div className='flex flex-col justify-items-end'>

                        <Image
                           src={!logoText ? '/logo-completa.png' : '/logo-reduzida.png'}
                           alt='logo'
                           width={0}
                           height={0}
                           quality={90}
                           sizes={'100vw'}
                           className={!logoText ? 'w-[180px] drop-shadow-textlg' : 'w-[50px] drop-shadow-textlg'}
                        />

                     </div>
                  </Link>

               </div> */}
               {text && (
                  <div className="flex items-center">
                     {text}
                  </div>
               )}


            </div>
            {icon && (
               <div className="flex items-center">
                  {icon}
               </div>
            )}
         </div>
      </div>
   );
}
