import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage'
import Header from './Header'
import Hero from '../components/hero'
import Content1 from '../components/content1'
import Content2 from '../components/content2'
import { Container } from './styles'

const Layout = (props) => {
  return (
    <>
      <Container>
        <Header />
        <AnimationRevealPage>
          <Hero />

          <Content1 />

          <Content2 />
        </AnimationRevealPage>
      </Container>
    </>
  )
}
export default Layout
