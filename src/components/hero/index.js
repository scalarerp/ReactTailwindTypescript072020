import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'
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
    <Container>
      <HeroContainer>
        <TwoColumn>
          <LeftColumn className="pt-40">
            <Notification>Gerenciamento de</Notification>

            <Heading>
              <SlantedBackground>Redes Sociais</SlantedBackground>
              <br />
              <span className="text-blue-500 p-2 shadow-text-logo bg-blue-500 bg-opacity-25">
                Você mais próximo do seu cliente!
              </span>
            </Heading>

            <PrimaryAction>
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
