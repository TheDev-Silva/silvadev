
import React from 'react';

export default function Contact() {
    return (
        <div className='relative md:flex w-full bg-black items-center md:justify-between justify-center p-10 md:pt-[150px] pt-[200px] px-10 md:px-40 md:h-[100vh] min-h-[100vh]'>
            {/* Círculo decorativo ao fundo */}

            <div
                className='absolute -inset-0 md:w-[200px] md:h-[200px] h-[100px] w-[100px] left-9 top-[30px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] transition-all duration-300'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            >
            </div>
            <div
                className='absolute w-[50px] h-[50px] right-5 bottom-[20px] rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] opacity-90 transition-all duration-300'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            >

            </div>
            <div
                className='absolute md:w-[50px] md:h-[50px] w-[40px] h-[40px] left-5  rounded-full bg-gradient-to-br to-[#6716cf] from-[#000] bottom-[100px] transition-all duration-300'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            >

            </div>
            <div
                className='absolute md:w-[150px] md:h-[150px] w-[80px] h-[80px] rounded-full bg-gradient-to-tr to-[#6716cf] from-[#000] right-10 top-52 bottom-[100px] transition-all duration-300'
            //style={{ top: '10%', right: '0%', transform: 'translate(-50%, -50%)' }} // Centraliza o círculo atrás do conteúdo
            ></div>
            <div className='relative z-10 mb-32 md:mb-0'>
                <h1 className='text-white font-mono text-4xl mb-4'>Contato</h1>
                <p className='text-white font-mono mb-2'>Entre em contato conosco!</p>
                <p className='text-white font-mono mb-2'>Telefone: (84) 99775-9542</p>
                <p className='text-white font-mono mb-2'>E-mail: silvadeveloper2024@gmail.com</p>

            </div>
            {/* Conteúdo principal */}
            <div className='relative z-10 text-center md:w-[400px] max-w-md bg-[#000] p-8 rounded-lg shadow-lg ' style={{ borderWidth: 2, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                <p className='text-white font-mono mb-9'>Mande sua ideia, que a tornaremos realidade!</p>
                <a
                    href="mailto:exemplo@email.com?subject=Minha Ideia de Projeto&body=Olá, estou entrando em contato para compartilhar uma ideia de projeto..."
                    className='w-full py-2 bg-[#6716cf] text-white rounded-md hover:bg-purple-700 transition duration-200 block text-center'
                >
                    <p className='font-mono'>Envie sua Ideia</p>
                </a>
            </div>


        </div>
    );
}
