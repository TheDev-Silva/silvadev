'use client'
import React, { ReactNode, useState } from 'react'

interface IconProps {
   icon: ReactNode,
   text: ReactNode
}



export default function Header({ icon, text }: IconProps) {
   const [isScrolled] = useState(false)

   return (
      <div className={`fixed w-full z-40 md:p-6 p-2 transition-all duration-500 ${isScrolled ? 'h-[130px] backdrop-blur-sm' : 'h-[120px] bg-primary-dark justify-between'
         }`}>
         {/* Camada de fundo com desfoque */}
         <div className={`absolute inset-0 bg-gradient-to-tr from-primary-dark to-[#000] ${isScrolled ? 'opacity-80' : 'opacity-0'
            } transition-opacity duration-500`}></div>

         {/* Conteúdo do Header */}
         <div className="relative flex justify-between items-center h-full p-6">
            <div className='flex items-center min-w-[50px]'>
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
