import React from 'react'

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaFacebookMessenger,
} from 'react-icons/fa'

import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'

import {
  Container,
  ColumnsContainer,
  Columns,
  Description,
  Subheading,
  ContentCard,
  Title,
  ImageDivBackground64,
} from '../misc.js'

export default () => {
  return (
    <Container>
      <ColumnsContainer>
        <Columns>
          <ContentCard className="rounded-2xl">
            <div className="bg-white p-10 w-full rounded-t-2xl transition ease-in duration-700">
              <Title>Criação de Vídeos</Title>
              <ImageDivBackground64 imageSrc={img3} />
              <div className="flex flex-row text-diariolaranja -mt-10">
                <FaFacebookF className="iconW12RoudedFull text-diariolaranja" />
                <FaInstagram className="iconW12RoudedFull mx-2 text-diariolaranja" />
              </div>
            </div>
            <div className=" p-10 w-full rounded-b-2xl">
              <Subheading>Cative a atenção do cliente</Subheading>
              <Description>
                Torne a apresentação dos seus produtos ou serviços mais
                interessante. Hoje o vídeo é o recurso que mais gera vendas na
                internet.
              </Description>
            </div>
          </ContentCard>
        </Columns>

        <Columns>
          <ContentCard className="rounded-2xl">
            <div className="bg-white p-10 w-full rounded-t-2xl">
              <Title>Criação de Identidade Visual</Title>
              <ImageDivBackground64
                imageSrc={img4}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-row text-diariolaranja -mt-10">
                <FaFacebookMessenger className="iconW12RoudedFull text-diariolaranja" />
                <FaWhatsapp className="iconW12RoudedFull text-diariolaranja" />
              </div>
            </div>
            <div className=" p-10 w-full rounded-b-2xl">
              <Subheading>Amplie seus locais de divulgação!</Subheading>
              <Description>
                Empresas que buscam credibilidade na sua região anunciam em
                veículos impressos, rádios e sites locais. Nossa agência
                seleciona as melhores mídias locais para fortalecer sua marca e
                atrair mais clientes.
              </Description>
            </div>
          </ContentCard>
        </Columns>
      </ColumnsContainer>
    </Container>
  )
}
