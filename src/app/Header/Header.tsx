'use client'
import React, { useEffect, useState } from 'react'
import { BiCommentDots } from 'react-icons/bi'
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {

   const [isScrolled, setIsScrolled] = useState(false)
   const [logoText, setLogoText] = useState('_The Silva')

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
            setLogoText('{ GC }');
         } else {
            setLogoText('G.' + 'C' + 'ode');
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
      <div className={`fixed w-full z-40 p-10 transition-all duration-500 ${isScrolled ? 'h-[130px] backdrop-blur-sm' : 'h-[120px] bg-[#6716cf99]'
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
                        {/*  <h1 className='flex font-Roseberry md:text-3xl text-xl text-white font-bold text drop-shadow-textsm transition-all duration-300 tracking-widest let'></h1> */}
                        {window.innerWidth >= 768 ? (
                           <Image
                              src={'/logoheader.png'}
                              alt='logo'
                              width={0}
                              height={0}
                              quality={90}
                              sizes={'100vw'}
                              className='w-[130px] drop-shadow-textlg'
                           />
                        ) : <Image
                           src={'/logoheader1.png'}
                           alt='logo'
                           width={0}
                           height={0}
                           quality={90}
                           sizes={'100vw'}
                           className='w-[35px] drop-shadow-textlg'
                        />}
                        {/* <h1 className="font-GreenKing text-2xl text-white font-bold text drop-shadow-textsm text-right m-[-6px] mr-[3px] transition-all duration-300">{logoText === '_The Silva' ? 'Dev' : ''}</h1> */}</div>
                  </Link>

               </div>

            </div>
            {window.innerWidth >= 768 ? (
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
