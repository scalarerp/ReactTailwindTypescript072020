import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage'
import Header from './Header'
import Hero from '../components/hero'
import Content1 from '../components/content1'
import Content2 from '../components/content2'
import Content3 from '../components/content3'
import Content4 from '../components/content4'
import Content5 from '../components/content5'

import { Container } from './styles'

// import VideoBg from '../components/videoBg'

const Layout = (props) => {
  return (
    <>
      {/* <VideoBg /> */}
      <Container>
        <Header />
        <Hero />
        <AnimationRevealPage>
          <Content1 />
          <Content2 />
          <Content3 />
          <Content4 />
          <Content5 />
        </AnimationRevealPage>
      </Container>
    </>
  )
}
export default Layout
