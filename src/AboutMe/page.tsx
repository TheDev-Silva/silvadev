'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

const AboutMe: React.FC = () => {

   const [loading, setLoading] = useState(false)


   const Isloading = () => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
      }, 5000);
   }



   return (

      <div className='flex-col relative h-full items-center justify-between' style={{ flex: 1, flexDirection: 'column', width: '100%', height: '100%', paddingTop: 80, gap: 30, paddingBottom: 30 }}>

         <div
            className='absolute -inset-0 md:w-[200px] md:h-[200px] h-[100px] w-[100px] rounded-full bg-gradient-to-br to-primary-dark from-[#000] transition-all duration-300 blur-md'
            style={{ left: '30%', top: '30%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >
         </div>
         <div
            className='absolute w-[50px] h-[50px] right-5 bottom-[20px] rounded-full bg-gradient-to-br to-primary-dark from-[#000] opacity-90 transition-all duration-300 blur-md'
            style={{ top: '90%', right: '25%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >

         </div>
         <div
            className='absolute w-[80px] h-[80px] right-5 bottom-[35px] rounded-full bg-gradient-to-br to-primary-dark from-[#000] opacity-90 transition-all duration-300 blur-md'
            style={{ top: '50%', right: '25%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >

         </div>
         <div
            className='absolute md:w-[50px] md:h-[50px] w-[40px] h-[40px] left-5  rounded-full bg-gradient-to-br to-primary-dark from-[#000] bottom-[100px] transition-all duration-300 blur-md'
         //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >

         </div>
         <div
            className='absolute md:w-[150px] md:h-[150px] max-h-md w-[80px] h-[80px] rounded-full bg-gradient-to-tr to-primary-dark from-[#000] right-10 top-52 bottom-[100px] transition-all duration-300 blur-md'
         //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         ></div>
         <h1 className="md:text-3xl text-2xl relative text-white font-mono font-bold pt-10 text-center " style={{ paddingTop: 0 }}>Quem sou...</h1>

         <div
            style={{
               flexDirection: 'column',
               marginTop: 40,
               borderColor: '#3b82f6',
               borderWidth: 2,
               borderBottomLeftRadius: 20,
               borderRadius: 30,
               padding: 32,
               backgroundColor: '#3b82f679',



            }}
            className="border-primary-light md:p-8 relative "
         >
            <div className='flex flex-col relative md:p-8 bg-gradient-to-t ' style={{
               borderTopWidth: 1, borderRightWidth: .5, borderColor: '#ffff', borderTopRightRadius: 20, paddingTop: 20, paddingRight: 10, paddingLeft: 0, paddingBottom: 0,
            }}>
               <p className="backdrop-blur-sm text-white md:text-lg text-base font-mono tracking-tight capitalize md:text-[12px]">
                  Bem-vindos ao meu site / portfólio! Eu sou um desenvolvedor front-end com uma ampla experiência em desenvolvimento web e pricipalmente mobile, utilizando tecnologias modernas e frameworks robustos e sempre se mantendo atualizado nas novidades que aparecem a melhorar as aplicações. Meu foco é criar aplicações eficientes, escaláveis e com uma excelente experiência do usuário, bastante fiel a layouts já prontos criando uma replica iniguálavel, além de sempre atualizado com as melhores práticas do mercado.
               </p>



               <div style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 25, }}>
                  <Link href="/AboutMais"

                  >
                     <Button
                        size={'default'}
                        onClick={Isloading}
                        
                     >
                        {loading ? <p style={{textTransform: 'capitalize', letterSpacing: 1}}>carregando...</p> : <p style={{textTransform: 'capitalize'}}>saiba mais</p>}
                     </Button>
                  </Link>





               </div>
            </div>
         </div>
      </div>
   );
}
export default AboutMe;