import React from 'react'
import Logorodape from '../../assets/images/logorodape.png'
import { Container, ImageDivBackground64 } from '../misc.js'

export default () => (
  <>
    <Container
      className="p-0 m-0 text-white"
      style={{ backgroundColor: '#111' }}
    >
      <div className="flex flex-row">
        <div className="w-1/2">
          <a href="https://odiario.net/" target="_blanck">
            <ImageDivBackground64 imageSrc={Logorodape}></ImageDivBackground64>
          </a>
        </div>

        <div className="w-1/2 p-12">
          Email:
          <p className="text-2xl text-diariolaranja">
            <a href="mailto:contato@agenciaodiario.net">
              contato@agenciaodiario.net
            </a>
          </p>
        </div>
      </div>

      <div
        className="flex flex-row text-center items-center p-3"
        style={{ backgroundColor: '#000' }}
      >
        <div className="w-full ">
          <p>Copyright© 2020 - Grupo o Diário</p>
        </div>
      </div>
    </Container>
  </>
)
