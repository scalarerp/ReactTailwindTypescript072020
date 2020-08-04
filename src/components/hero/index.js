import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'
// import { WindupChildren } from 'windups'
// import VideoBg from '../videoBg'
import { OpacityOverlay } from '../misc'
import {
  Container,
  HeroContainer,
  // TwoColumn,
  // LeftColumn,
  // RightColumn,
  // Notification,
  // Heading,
  // SlantedBackground,
  // PrimaryAction,
} from './styles'

const Hero = () => {
  return (
    <Container id="inicio">
      <OpacityOverlay />
      {/* <VideoBg /> */}
      <HeroContainer>
        <div className="flex flex-col z-6 pt-40 font-sunn text-white">
          <div className="inline-flex text-3rem ml-3 sm:ml-24 sm:text-5rem">
            <span>Gerenciamento</span>
            <span className="ml-3">de</span>
          </div>
          <div className="inline-flex text-6rem -mt-3 ml-3 sm:ml-24 sm:text-9rem ">
            <span>Redes</span>
            <span className="ml-3">Sociais</span>
          </div>

          <div
            className="text-2rem sm:text-3rem 
          font-panton font-light  
          mt-16  uppercase 
          ml-3 sm:ml-24"
          >
            <p className="-mt-5">Você Mais</p>
            <p className="-mt-2">Próximo do</p>
            <p className="inline-flex -mt-2">
              <span>seu cliente</span>
              <FiPlayCircle className="w-24 h-24 ml-4" />
            </p>
          </div>
        </div>
      </HeroContainer>
    </Container>
  )
}

export default Hero
