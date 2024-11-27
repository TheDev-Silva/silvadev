import React from 'react'
import { RiPresentationLine } from 'react-icons/ri'
import { GrShieldSecurity } from 'react-icons/gr'

export default function AboutMais() {
   return (
      <div className='lg:flex-col md:w-full p-[50px] pt-[120px] md:pt-[120px] items-center justify-between md:flex-col relative bg-slate-950 h-full'>

         <div
            style={{
               flexDirection: 'column',
               borderColor: '#6716cf',
               borderBottomLeftRadius: 20,
               backgroundColor: '#6716cf29',
               borderRadius: 30,
               marginTop: 40,
            }}
            className="border-neon shadow-neon "
         >
            <div className='relative bg-[#6716cf29] p-8' style={{ borderRadius: 30 }}>
               <div className='flex justify-between'>
                  <h1 className="w-full text-white md:text-2xl text-lg mb-6 uppercase">Apresentação</h1>
                  <RiPresentationLine size={30} color='#fff' />
               </div>

               <p className="backdrop-blur-sm text-white md:text-base text-sm tracking-tight font-mono ">
                  Sou um desenvolvedor front-end especializado em construção de aplicações web e mobile, com profundo domínio nas tecnologias e frameworks mais modernos.
                  No meu dia a dia, trabalho principalmente com <b className='text-[#6716cf] font-mono italic '>JavaScript</b> para desenvolvimento front-end e back-end, usando <b className='text-[#6716cf] font-mono italic '>Node.js</b> para criar APIs robustas e escaláveis.

                  Para o front-end, minha experiência com <b className='text-[#6716cf] font-mono italic '>React</b> e <b className='text-[#6716cf] font-mono italic '>Next.js</b> me permite desenvolver interfaces eficientes e de alta performance. No desenvolvimento mobile, utilizo <b className='text-[#6716cf] font-mono italic '>React Native e Expo</b> para construir apps que combinam ótima performance e usabilidade.

                  Minha prática inclui o uso do <b className='text-[#6716cf] font-mono italic '>ORM Prisma</b> e <b className='text-[#6716cf] font-mono italic '>Drizzle</b> para manipulação de dados de forma eficaz e confiável, além do <b className='text-[#6716cf] font-mono italic '>Firebase</b> e <b className='text-[#6716cf] font-mono italic '>OAuth</b> para integrações em tempo real e autenticação. Em    estilização, faço uso do Tailwind CSS e componentes de Shadcn para me ajudarem a criar UIs consistentes e elegantes.

                  Estou sempre explorando e aplicando novas tecnologias e ferramentas para entregar soluções que sejam tanto práticas quanto inovadoras, agregando valor real aos projetos que desenvolvo.
               </p>
            </div>

         </div>


         <div
            style={{
               flexDirection: 'column',
               borderColor: '#6716cf',
               borderBottomLeftRadius: 20,
               backgroundColor: '#6716cf29',
               borderRadius: 30,
               marginTop: 40,
            }}
            className="border-neon shadow-neon "
         >

            <div className='relative bg-[#6716cf29] p-8' style={{ borderRadius: 30 }}>
               <div className='flex justify-between'>
                  <h1 className="w-full text-white md:text-xl text-lg uppercase mb-6">Sobre minha Abordagem</h1>
                  <GrShieldSecurity size={30} color="#fff"/>
               </div>

               <p className="backdrop-blur-sm text-white md:text-base text-sm tracking-tight font-mono ">
                  Acredito em uma abordagem prática e orientada à solução, combinando aprendizado contínuo com aplicações reais em projetos, valorizando um <b className='text-[#6716cf] font-mono italic '>código limpo</b> e eficiente e sempre buscando utilizar as <b className='text-[#6716cf] font-mono italic '>melhores</b> ferramentas e <b className='text-[#6716cf] font-mono italic '>frameworks</b> disponíveis, como as citadas acima.
                  Minha prioridade é desenvolver soluções funcionais e <b className='text-[#6716cf] font-mono italic '>escaláveis</b>, com foco em entregar valor e garantir uma ótima
                  experiência para o usuário. Estou sempre aberto a novos desafios e motivado a evoluir, seja aprimorando habilidades ou explorando novas tecnologias.
               </p>
            </div>

         </div>




      </div>
   )
}
