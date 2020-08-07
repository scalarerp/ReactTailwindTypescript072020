import React from 'react'
import Card1 from '../cards/card1'

import c1a from '../../assets/images/webp/1.webp'
import c1b from '../../assets/images/webp/5.webp'

import c2a from '../../assets/images/webp/2.webp'
import c2b from '../../assets/images/webp/6.webp'

import c3a from '../../assets/images/webp/3.webp'
import c3b from '../../assets/images/webp/7.webp'

import c4a from '../../assets/images/webp/4.webp'
import c4b from '../../assets/images/webp/8.webp'

import { Container } from '../misc.js'

export default () => {
  const _Cards1 = [
    {
      imgContent: c1a,
      imgHeader: c1b,
      hidden: true,
      title: 'Gerenciamento de Redes Sociais',
      // question = 'Saiba Mais',
      description:
        'Vamos usar o poder das redes sociais para atrair mais clientes?   A internet é um dos maiores meios de comunicação do mundo, estar presente nela é uma questão de necessidade. Conectamos empresas e pessoas pelo meio digital, gerando oportunidade para encontrar novos clientes e fechar negócio. ',
    },
    {
      imgContent: c2a,
      imgHeader: c2b,
      hidden: true,
      title: 'ANÚNCIO PATROCINADO',
      // question = 'Saiba Mais',
      description:
        'Patrocinar posts e a própria página no Facebook é um recurso incrível para conquistar novos fãs e divulgar as novidades. O patrocínio é feito através de filtros inteligentes que definem gênero, profissão, idade, localização, etc.',
    },
    // ]
    // const _Cards2 = [
    {
      imgContent: c3a,
      imgHeader: c3b,
      hidden: true,
      title: 'Criação de Vídeo',
      // question = 'Saiba Mais',
      description:
        'Torne a apresentação dos seus produtos ou serviços mais interessante. Hoje o vídeo é o recurso que mais gera vendas na internet. ',
    },
    {
      imgContent: c4a,
      imgHeader: c4b,
      hidden: true,
      title: 'Criação de Identidade Visual',
      // question = 'Saiba Mais',
      description:
        'Facilite o reconhecimento da sua empresa em qualquer lugar com sua própria identidade de marca.',
    },
  ]

  return (
    <>
      <Container id="servicos" className="bg-gray-200 p-2 sm:p-6 ">
        <div className="flex flex-wrap">
          {_Cards1.map((card, index) => (
            <div className=" sm:w-1/2 p-3 " key={index}>
              <Card1
                index={index}
                imgHeader={card.imgHeader}
                imgContent={card.imgContent}
                title={card.title}
                description={card.description}
              ></Card1>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
