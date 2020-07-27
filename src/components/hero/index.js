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

const MenuBar = () => {
  return (
    <Container>
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Notification>Gerenciamento de</Notification>
            <Heading>
              <SlantedBackground>Redes Sociais</SlantedBackground>
              <br />
              <span className="text-amarelo">
                Você mais próximo do seu cliente!
              </span>
            </Heading>

            <PrimaryAction>
              Assista o vídeo
              <FiPlayCircle className="w-12 h-12  " />
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

export default MenuBar
