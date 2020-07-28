import React from 'react'
import { FiDollarSign, FiPlayCircle } from 'react-icons/fi'

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaFacebookMessenger,
} from 'react-icons/fa'

import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'

import {
  Container,
  ColumnsContainer,
  TwoColumn,
  Description,
  Subheading,
  ContentCard,
  Title,
  ImageDivBackground64,
} from '../misc.js'

import TeamIllustrationSrc from '../../assets/images/logo.svg'
import { ReactComponent as SvgDotPattern } from '../../assets/images/logo.svg'

export default () => {
  return (
    <Container className="bg-gray-400">
      <ColumnsContainer>
        <TwoColumn>
          <ContentCard className="rounded-2xl">
            <div className="bg-white p-10 w-full rounded-t-2xl transition ease-in duration-700">
              <Title>Gerenciamento de Redes Sociais</Title>
              <ImageDivBackground64 imageSrc={img1} />
              <div className="flex flex-row text-diariolaranja -mt-10">
                <FaFacebookF className="iconW12RoudedFull text-diariolaranja" />
                <FaInstagram className="iconW12RoudedFull mx-2 text-diariolaranja" />
              </div>
            </div>
            <div className=" p-10 w-full rounded-b-2xl">
              <Subheading>
                O Poder das redes sociais para atrair mais clientes
              </Subheading>
              <Description>
                A internet é um dos maiores meios de comunicação do mundo, estar
                presente nela é uma questão de necessidade. Conectamos empresas
                e pessoas pelo meio digital, gerando oportunidade para encontrar
                novos clientes e fechar negócio.
              </Description>
            </div>
          </ContentCard>
        </TwoColumn>

        <TwoColumn>
          <ContentCard className="rounded-2xl">
            <div className="bg-white p-10 w-full rounded-t-2xl">
              <Title>Anuncio Impulsionado</Title>
              <ImageDivBackground64
                imageSrc={img2}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-row text-diariolaranja -mt-10">
                <FaFacebookMessenger className="iconW12RoudedFull text-diariolaranja" />
                <FaWhatsapp className="iconW12RoudedFull text-diariolaranja" />
              </div>
            </div>
            <div className=" p-10 w-full rounded-b-2xl">
              <Subheading>Publicações direcionadas</Subheading>
              <Description>
                Impulsionar posts da sua própria página no Facebook é um recurso
                incrível para conquistar novos fãs e divulgar as novidades. O
                patrocínio é feito através de filtros inteligentes que definem
                gênero, profissão, idade, localização, etc.
              </Description>
            </div>
          </ContentCard>
        </TwoColumn>
      </ColumnsContainer>
    </Container>
  )
}
