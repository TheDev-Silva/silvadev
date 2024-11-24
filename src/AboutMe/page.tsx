import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
   return (
      <div className='flex-col relative p-[50px]  items-center justify-between' style={{ flex: 1, flexDirection: 'column', width: '100%', height: '100%', paddingTop: 80, gap: 30 }}>

         <div
            className='absolute -inset-0 md:w-[200px] md:h-[200px] h-[100px] w-[100px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] transition-all duration-300 blur-md'
         style={{ left: '30%', top: '30%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >
         </div>
         <div
            className='absolute w-[50px] h-[50px] right-5 bottom-[20px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] opacity-90 transition-all duration-300 blur-md'
         style={{ top: '90%', right: '25%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >

         </div>
         <div
            className='absolute w-[80px] h-[80px] right-5 bottom-[35px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] opacity-90 transition-all duration-300 blur-md'
         style={{ top: '50%', right: '25%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >

         </div>
         <div
            className='absolute md:w-[50px] md:h-[50px] w-[40px] h-[40px] left-5  rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] bottom-[100px] transition-all duration-300 blur-md'
         //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         >

         </div>
         <div
            className='absolute md:w-[150px] md:h-[150px] max-h-md w-[80px] h-[80px] rounded-full bg-gradient-to-tr to-[#6716cf] from-[#000] right-10 top-52 bottom-[100px] transition-all duration-300 blur-md'
         //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
         ></div>
         <h1 className="text-5xl text-white font-mono font-bold pt-10 text-center uppercase" style={{ paddingTop: 0 }}>Quem sou...</h1>

         <div
            style={{
               flexDirection: 'column',
               /* borderLeftWidth: 4,
               borderBottomWidth: 4, */
               borderColor: '#6716cf',
               borderCollapse: 'collapse',
               paddingLeft: 70,
               paddingBottom: 70,
               marginTop: 40,
               borderBottomLeftRadius: 20,
               backgroundColor: '#6716cf29',
               borderRadius: 30
            }}
            className="border-neon shadow-neon"
         >
            <div className='flex flex-col relative' style={{
               borderTopWidth: 4, borderRightWidth: 4, borderColor: '#6716cf', paddingRight: 60,
               paddingTop: 70, borderTopRightRadius: 20 
            }}>
               <p className="backdrop-blur-sm text-white md:text-xl text-base font-mono tracking-tight capitalize">
                  Bem-vindos ao meu portfólio! Sou um desenvolvedor com uma ampla experiência em desenvolvimento
                  web e mobile, utilizando tecnologias modernas e frameworks robustos e sempre se mantendo atualizado nas novidades que aparecem a melhorar as aplicações. Meu foco é criar aplicações
                  eficientes, escaláveis e com uma excelente experiência do usuário, sempre atualizado com as melhores práticas do mercado.
               </p>



               <div style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 25, }}>
                  <Link href="/AboutMais"

                  >
                     <button

                        style={{
                           minWidth: 150,
                           padding: 10,
                           justifyContent: 'center',
                           color: '#ffffff',
                           backgroundColor: '#6716cf',
                           borderRadius: 5,
                           textTransform: 'uppercase',
                           fontWeight: '500'

                        }}
                     >
                        saiba mais
                     </button>
                  </Link>





               </div>
            </div>
         </div>
      </div>
   );
}
