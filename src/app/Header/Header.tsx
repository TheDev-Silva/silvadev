'use client'
import React, { useEffect, useState } from 'react'
import { BiCommentDots } from 'react-icons/bi'
import Link from 'next/link';


export default function Header() {

   const [isScrolled, setIsScrolled] = useState(false)

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
                  <h1 className='font-mono text-2xl text-white font-bold text drop-shadow-textsm' >_The Silva Dev</h1>
                  </Link>
                  
               </div>
              
            </div>
            <Link href="/Contacts" className='flex items-center gap-2 justify-center'>

               <BiCommentDots size={24} color="#fff" />
               <span className="font-mono uppercase hover:tracking-widest hover:transition-all text-white">contatos</span>

            </Link>
         </div>
      </div>
   );
}
