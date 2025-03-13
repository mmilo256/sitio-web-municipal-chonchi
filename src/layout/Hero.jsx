import React from 'react'
import image from '../assets/foto.webp'
import Container from './Container'
import Button from '../components/Button'

const Hero = () => {
    return (
        <div className='relative h-[40rem]'>
            <img className='absolute inset-0 w-full h-full object-cover object-bottom' src={image} alt="" />
            <div className='absolute flex flex-col bg-gray-900/60 justify-center inset-0 items-start'>
                <Container>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2'>
                            <h2 className='text-white font-black text-6xl mb-4'>¡AQUÍ ES DONDE VA EL TÍTULO DEL BANNER!</h2>
                            <p className='text-white/90 mb-8 font-semibold text-xl'>Y en esta parte va una breve descripción de lo que trata este banner destacado. Y en esta parte va una breve descripción de lo que trata este banner destacado.</p>
                            <Button text='Más información' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero