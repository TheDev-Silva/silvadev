`use client`
import { Copyright } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Footer = () => {

   const [isHovered, setIsHovered] = useState(false);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkScreenSize = () => {
         setIsMobile(window.innerWidth > 786);
      };
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize);

      return () =>
         window.removeEventListener('resize', checkScreenSize)
   }, [])

   useEffect(() => {
      const handleScroll = () => {
         requestAnimationFrame(() => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            setIsAtBottom(scrollPosition >= pageHeight - 10)
         })

      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)

   }, []);

   return (
      <div className=' relative md:flex flex-coll w-full justify-start md:justify-between items-center gap-3 pt-10 mt-10 text-center' style={{ borderTopWidth: 1, borderTopColor: '#c1c1c1', }}>


         <div className='md:flex gap-3 md:justify-center justify-start items-center font-mono'>
            <div className='flex gap-1 items-center justify-center px-2'>

               <h1 className='text-white '>thesilvadev</h1>
               <Copyright color='#fff' size={18} />
            </div>

            <h1 className='text-white'>Todos os direitos reservados.</h1>
         </div>

         {isMobile && window.innerWidth > 786 ? (
            <h1 className={`text-white font-mono text-center relative `}
               style={{ right: 60 }}
            >
               suporte urgente chama no zap!
            </h1>
         ) : (
            null
         )}

      </div>
   )
}
export default Footer;