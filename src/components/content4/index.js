import React from 'react'
import CardImageAndOverlayText from '../cards/cardImageAndOverlayText'
import { RiWhatsappLine } from 'react-icons/ri'
import p_limpatubo from '../../assets/images/p_limpatubo.jpeg'
import p_dhein from '../../assets/images/p_dhein.jpeg'
import p_autosul from '../../assets/images/p_autosul.jpeg'
import p_massoterapia from '../../assets/images/p_massoterapia.jpeg'

import rodape from '../../assets/images/rodape.png'

import { Container, ImageDivBackground64 } from '../misc.js'

export default () => {
  const _Cards = [
    {
      imageSrc: p_limpatubo,
      title: 'Limpa Tubo - Dedetizadora e Desentupidora',
      url: 'https://www.instagram.com/limpa.tubo/?hl=pt-br',
      content:
        'Gerenciamento de redes sociais, criação de identidade visual e vídeos. ',
    },
    {
      imageSrc: p_dhein,
      title: 'Dhein Corretora de Seguros',
      url: 'https://www.instagram.com/dheinseguros/?hl=pt-br',
      content:
        'Criação de identidade visual, planejamento de mídia e conteúdo.',
    },
    {
      imageSrc: p_autosul,
      title: 'Autosul - Centro de Reparação Automotiva ',
      url: 'https://www.instagram.com/autosul_ivoti/?hl=pt-br',
      content:
        'Criação e gerenciamento de redes sociais, identidade visual, planejamento de mídia e conteúdo.',
    },
    {
      imageSrc: p_massoterapia,
      title: 'Massoterapia Schaefer',
      url: 'https://www.instagram.com/massoterapiaschaefer/?hl=pt-br',
      content:
        'Gerenciamento de redes sociais, identidade visual, planejamento de mídia e criação de conteúdo.',
    },
  ]

  return (
    <>
      <Container id="portfolio" className="p-0 m-0 mt-10">
        <div className="flex flex-col justify-center text-center divide-y divide-gray-400 ">
          <h1 className="text-4xl font-panton font-bold uppercase leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
            Portfólio
          </h1>
          <p className="mt-6 mb-12 pt-12 text-lg font-bold text-gray-700 dark:text-gray-400">
            Alguns de nossos trabalhos recentes
          </p>
        </div>

        <div className="flex flex-wrap overflow-hidden">
          {_Cards.map((card, index) => (
            <div key={index} className="w-full  md:w-1/2  overflow-hidden ">
              <CardImageAndOverlayText
                index={index}
                imageSrc={card.imageSrc}
                title={card.title}
                content={card.content}
                url={card.url}
              ></CardImageAndOverlayText>
            </div>
          ))}
        </div>

        <div
          id="contato"
          className=" mt-16 flex flex-col justify-center text-center divide-y divide-gray-400 "
        >
          <h1 className="text-4xl font-panton font-bold uppercase leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
            Vamos Conversar?
          </h1>

          <p className="shadow-2xl rounded-lg bg-primary-400 mx-20 mt-10 text-white">
            <h1 className="text-4xl font-sunn mt-5  ">
              Envie uma mensagem pelo WhatsApp:
            </h1>
            <h1 className="inline-flex justify-center items-center text-center">
              <RiWhatsappLine className="icon w-24 h-24" />
              <span className="text-5xl font-panton font-bold uppercase">
                (51) 99996-1716
              </span>
            </h1>
          </p>
        </div>

        <div className=" mt-16 flex flex-col justify-center text-center divide-y divide-gray-400 ">
          <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
            <ImageDivBackground64 imageSrc={rodape} />
          </p>
        </div>
      </Container>
    </>
  )
}
