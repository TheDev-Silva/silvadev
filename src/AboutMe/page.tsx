import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
   return (
      <div className='flex-col p-[50px]  items-center justify-between bg-slate-50' style={{ flex: 1, flexDirection: 'column', width: '100%', backgroundColor: '#000', height: '100%', paddingTop: 80, gap: 30 }}>

         <h1 className="text-5xl text-white font-mono font-bold pt-10 text-center uppercase" style={{ paddingTop: 30 }}>Quem sou...</h1>

         <div
            style={{
               flexDirection: 'column',
               borderRadius: 5,
               borderWidth: 1,
               borderColor: '#ffffff',
               padding: 30,
               marginTop: 40

            }}
            className="bg-gradient-to-tr from-violet-950 to-slate-500"
         >
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
   );
}
