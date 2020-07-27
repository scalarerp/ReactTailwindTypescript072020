import React from 'react'
import { FiArrowRight, FiMapPin, FiClock } from 'react-icons/fi'
import { Subheading, PrimaryLink } from '../misc.js'
import {
  Container,
  Content,
  ThreeColumn,
  HeadingColumn,
  HeadingInfoContainer,
  HeadingTitle,
  HeadingDescription,
  Card,
  CardAction,
  CardColumn,
  CardCompany,
  CardHeader,
  CardImage,
  CardMeta,
  CardMetaFeature,
  CardText,
  CardTitle,
  CardType,
} from './styles'

export default ({
  subheading = 'Our Portfolio',
  headingHtmlComponent = (
    <>
      We've done some <span tw="text-primary-500">amazing projects.</span>
    </>
  ),
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
  linkText = 'View all Projects',
  cardLinkText = 'Read Case Study',
  textOnLeft = false,
}) => {
  const cards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
      company: 'Tesla Inc.',
      type: 'Ad Campaign',
      title: 'Personalized Ad Campaign using Google AdWords',
      durationText: '90 Days Campaign',
      locationText: 'New York',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
      company: 'Nestle',
      type: 'SEO Marketing',
      title: 'Ranking #1 for keywords like Chocolate, Snack',
      durationText: '180 Day Campaign',
      locationText: 'Palo Alto',
    },
  ]
  return (
    <Container>
      <Content>
        <ThreeColumn>
          {/* <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink>
                {linkText} <FiArrowRight />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn> */}
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <FiClock /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <FiMapPin /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>{cardLinkText}</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  )
}
