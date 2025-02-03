'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BiCommentDots } from 'react-icons/bi'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/navigationContext';
import Initial from '../Initial/page';
import AboutMe from '@/AboutMe/page';




export default function Header() {

   
   const [isScrolled, setIsScrolled] = useState(false)
   const [logoText, setLogoText] = useState(false)
   




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
      <div className={`fixed w-full z-40 md:p-6 p-2 transition-all duration-500 ${isScrolled ? 'h-[130px] backdrop-blur-sm' : 'h-[120px] bg-[#6716cf] justify-between'
         }`}>
         {/* Camada de fundo com desfoque */}
         <div className={`absolute inset-0 bg-gradient-to-tr from-[#6716cf] to-[#000] ${isScrolled ? 'opacity-80' : 'opacity-0'
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
                           className={!logoText ? 'w-[130px] drop-shadow-textlg' : 'w-[50px] drop-shadow-textlg'}
                        />

                     </div>
                  </Link>

               </div>

            </div>
         
            {!logoText ? (
               <Link href="/Contacts" className='flex items-center gap-2 justify-center'>

                  <BiCommentDots size={24} color="#fff" />
                  <span className="font-mono uppercase hover:tracking-widest hover:transition-all text-white font-bold tracking-widest">contatos</span>

               </Link>
            ) : (
               <Link href="/Contacts" className='flex items-center gap-2 justify-center'>

                  <BiCommentDots size={24} color="#fff" />
                  {/* <span className="font-mono uppercase hover:tracking-widest hover:transition-all text-white font-bold tracking-widest">contatos</span> */}

               </Link>
            )}

         </div>
      </div>
   );
}
