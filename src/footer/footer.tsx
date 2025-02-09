import { Copyright } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
        <div className='flex w-full md:justify-center justify-between items-center gap-3 pt-10 mt-10 text-center' style={{ borderTopWidth: 1, borderTopColor: '#c1c1c1'}}>
            <div className='flex gap-3 md:justify-center justify-start items-center font-mono'>
                <h1 className='text-white '>silvadev</h1>
                <Copyright color='#fff' />
                <h1 className='text-white '>Todos os direitos recervados.</h1>
            </div>
            
                <h1 className='text-white font-mono'>suporte urgente chama no zap!</h1>
            
        </div>
    )
}
export default Footer;