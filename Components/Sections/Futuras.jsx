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
            <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>
                <h1 className='uppercase text-2xl mb-6'>Investigaciones Futuras</h1>
                <p>
                    La VR podría ser el núcleo de un nuevo campo de investigación transdisciplinar -la 
                    medicina incorporada-, cuyo objetivo principal es el uso de la realidad virtual 
                    para alterar la matriz corporal con el fin de mejorar la salud y el bienestar de 
                    las personas. En concreto, el uso de la VR podría alterar la matriz corporal de 
                    tres maneras diferentes:
                </p>
                <div className = 'flex flex-col mt-3 w-full text-white text-lg'>
                    <div className='flex mt-4 border-2 cursor-pointer border-white w-full px-6 py-4 rounded transition hover:scale-[1.02]' 
                        onClick={uno.onOpen}>
                        <span>Sustituyendo los contenidos corporales multisensoriales por otros sintéticos</span>
                    </div>
                    <div className='flex mt-4 border-2 cursor-pointer border-white w-full px-6 py-4 rounded transition hover:scale-[1.02]'
                        onClick={dos.onOpen}>
                        <span>Estructurando los contenidos corporales multisensoriales a través de la conciencia y la reorganización (mindful embodiment)</span>
                    </div>
                    <div className='flex mt-4 border-2 cursor-pointer border-white w-full px-6 py-4 rounded transition hover:scale-[1.02]'
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