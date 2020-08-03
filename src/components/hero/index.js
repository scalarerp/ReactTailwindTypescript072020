import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'
import { WindupChildren } from 'windups'
// import VideoBg from '../videoBg'
import { OpacityOverlay } from '../misc'
import {
  Container,
  HeroContainer,
  TwoColumn,
  LeftColumn,
  RightColumn,
  Notification,
  Heading,
  SlantedBackground,
  PrimaryAction,
} from './styles'

// <Notification className="font-famatic bg-blue-500 bg-opacity-50 pr-5">
//   Gerenciamento de
// </Notification>
// <Heading>
//     <SlantedBackground>Redes Sociais</SlantedBackground>
//     <br />
//     <span className="text-blue-500 pl-5 p-2 shadow-text-logo bg-blue-500 bg-opacity-25">
//       Você mais próximo do seu
//       <span className="text-diariolaranja pl-3 font-extrabold">
//         Cliente
//       </span>
//     </span>
// </Heading>

//  <LeftColumn className="pt-40 font-famatic text-white">
// <div className="text-5xl">Gerenciamento de</div>
// <PrimaryAction className="rounded-full">
//   <div className="flex flex-row items-center">
//     <FiPlayCircle className="w-12 h-12 pt-1  " />
//     <span className="text-2xl">Assista o vídeo</span>
//   </div>
// </PrimaryAction>
// </LeftColumn>
// <RightColumn>
// <h1>{'  '}</h1>
// </RightColumn>

const Hero = () => {
  return (
    <Container id="inicio">
      <OpacityOverlay />
      {/* <VideoBg /> */}
      <HeroContainer>
        <div className="flex flex-col z-6 pt-40 font-sunn text-white">
          <p className="text-5xl ml-24">Gerenciamento de</p>
          <p className="text-8xl ml-24 -mt-12">Redes Sociais</p>

          <div className="text-5xl font-panton font-light  mt-16  uppercase ml-24">
            <p className="-mt-5">Você Mais</p>
            <p className="-mt-2">Próximo do</p>
            <p className="-mt-2">
              seu cliente
              <FiPlayCircle className="w-24 h-24 ml-64  " />
            </p>
          </div>
        </div>
      </HeroContainer>
    </Container>
  )
}

export default Hero
