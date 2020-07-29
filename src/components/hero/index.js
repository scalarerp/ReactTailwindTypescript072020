import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'
import { WindupChildren } from 'windups'
// import VideoBg from '../videoBg'

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

const Hero = () => {
  return (
    <Container id="inicio">
      {/* <VideoBg /> */}
      <HeroContainer>
        <TwoColumn className="z-6">
          <LeftColumn className="pt-40">
            <Notification className="bg-blue-500 bg-opacity-50 pr-5">
              Gerenciamento de
            </Notification>
            <Heading>
              <WindupChildren>
                <SlantedBackground>Redes Sociais</SlantedBackground>
                <br />
                <span className="text-blue-500 pl-5 p-2 shadow-text-logo bg-blue-500 bg-opacity-25">
                  Você mais próximo do seu
                  <span className="text-diariolaranja font-extrabold">
                    Cliente
                  </span>
                </span>
              </WindupChildren>
            </Heading>

            <PrimaryAction className="rounded-full">
              <div className="flex flex-row items-center">
                <FiPlayCircle className="w-12 h-12 pt-1  " />
                <span className="text-2xl">Assista o vídeo</span>
              </div>
            </PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <h1>{'  '}</h1>
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  )
}

export default Hero
