import { Copyright } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
        <div className='md:flex flex-coll w-full justify-center md:justify-between items-center gap-3 pt-10 mt-10 text-center' style={{ borderTopWidth: 1, borderTopColor: '#c1c1c1' }}>
            <div className='md:flex gap-3 md:justify-center justify-start items-center font-mono'>
                <div className='flex gap-3 items-center justify-center'>
                    <h1 className='text-white '>silvadev</h1>
                    <Copyright color='#fff' />
                </div>

                <h1 className='text-white '>Todos os direitos reservados.</h1>
            </div>

            <h1 className='text-white font-mono'>suporte urgente chama no zap!</h1>

        </div>
    )
}
export default Footer;