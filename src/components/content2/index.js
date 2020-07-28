import React from 'react'
import { FiDollarSign, FiPlayCircle } from 'react-icons/fi'

import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'

import {
  Container,
  ColumnsContainer,
  TwoColumns,
  ThreeColumns,
  Description,
  Heading,
  TextContent,
  SectionHeading,
  Subheading,
  ContentCard,
  Title,
  ImageDivBackground64,
  Image,
  PrimaryButton8,
} from '../misc.js'

import TeamIllustrationSrc from '../../assets/images/logo.svg'
import { ReactComponent as SvgDotPattern } from '../../assets/images/logo.svg'

export default () => {
  return (
    <Container className="bg-gray-300">
      <ColumnsContainer>
        <TwoColumns>
          <ContentCard className="p-10  rounded-t-none  rounded-b-2xl">
          <div className="bg-white">

            <Title>Gerenciamento de Redes Sociais</Title>
            <ImageDivBackground64 imageSrc={img1} />
            <div className="flex flex-row text-diariolaranja">
              <FaFacebookF className="iconW12RoudedFull text-diariolaranja" />
              <FaInstagram className="iconW12RoudedFull mx-2 text-diariolaranja" />
              <FaWhatsapp className="iconW12RoudedFull text-diariolaranja"/>
            </div>
          </div>

            <Subheading>
              Vamos usar o poder das redes sociais para atrair mais clientes?
            </Subheading>
            <Description>
              A internet é um dos maiores meios de comunicação do mundo, estar
              presente nela é uma questão de necessidade. Conectamos empresas e
              pessoas pelo meio digital, gerando oportunidade para encontrar
              novos clientes e fechar negócio.
            </Description>
          </ContentCard>
        </TwoColumns>
        <div className="w-full md:w-1/2 p-5">
          <div className="bg-white p-10 rounded-t-2xl z-2">
            <Title>Anúncio Patrocinado </Title>
            <ImageDivBackground64 imageSrc={img2} />
            <div className="flex flex-row ">
              <FaFacebookF className="iconW12RoudedFull" />
              <FaInstagram className="iconW12RoudedFull" />
            </div>
          </div>

          <ContentCard className="p-10  rounded-t-none  rounded-b-2xl">
            <Subheading>
              Vamos usar o poder das redes sociais para atrair mais clientes?
            </Subheading>
            <Description>
              A internet é um dos maiores meios de comunicação do mundo, estar
              presente nela é uma questão de necessidade. Conectamos empresas e
              pessoas pelo meio digital, gerando oportunidade para encontrar
              novos clientes e fechar negócio.
            </Description>
          </ContentCard>
        </div>
      </ColumnsContainer>
    </Container>
  )
}
