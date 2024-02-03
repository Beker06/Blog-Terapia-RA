import React from 'react'
import Section from '../Section'
import { useFuturaDosModal, useFuturaTresModal, useFuturaUnoModal } from '@/hooks/modals/useFuturasModal'
import FuturaUno from '../Modals/Futuras/FuturaUno';
import FuturaDos from '../Modals/Futuras/FuturaDos';
import FuturaTres from '../Modals/Futuras/FuturaTres';

const Futuras = () => {

    const uno = useFuturaUnoModal();
    const dos =  useFuturaDosModal();
    const tres =  useFuturaTresModal();

  return (
    <Section id="Futuras" color='white'>
        <div className='flex w-full mt-[8%] justify-center'>
            <div className='flex flex-col text-white w-[70%] text-justify md:text-lg text-sm mx-[10%]'>
                <h1 className='uppercase md:text-2xl text-lg md:mb-6 mb-2'>Investigaciones Futuras</h1>
                <p>
                    La VR podría ser el núcleo de un nuevo campo de investigación transdisciplinar -la 
                    medicina incorporada-, cuyo objetivo principal es el uso de la realidad virtual 
                    para alterar la matriz corporal con el fin de mejorar la salud y el bienestar de 
                    las personas. En concreto, el uso de la VR podría alterar la matriz corporal de 
                    tres maneras diferentes:
                </p>
                <div className = 'flex flex-col md:mt-3 mt-1 w-full text-white md:text-lg text-sm'>
                    <div className='flex mt-4 border-2 cursor-pointer border-white w-full md:px-6 px-4 md:py-4 py-2 rounded transition hover:scale-[1.02]' 
                        onClick={uno.onOpen}>
                        <span>Sustituyendo los contenidos corporales multisensoriales por otros sintéticos</span>
                    </div>
                    <div className='flex mt-4 border-2 cursor-pointer border-white w-full md:px-6 px-4 md:py-4 py-2 rounded transition hover:scale-[1.02]'
                        onClick={dos.onOpen}>
                        <span>Estructurando los contenidos corporales multisensoriales a través de la conciencia y la reorganización (mindful embodiment)</span>
                    </div>
                    <div className='flex mt-4 border-2 cursor-pointer border-white w-full md:px-6 px-4 md:py-4 py-2 rounded transition hover:scale-[1.02]'
                        onClick={tres.onOpen}>
                        <span>Aumentando los contenidos corporales multisensoriales mediante la alteración/ampliación de sus límites (augmented embodiment)</span>
                    </div>
                </div>
            </div>
        </div>
        <FuturaUno/>
        <FuturaDos/>
        <FuturaTres/>
    </Section>
  )
}

export default Futuras