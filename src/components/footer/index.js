import React from 'react'
import Logorodape from '../../assets/images/otimiz/logorodape.png'
import { ImageDivBackground64 } from '../misc.js'

export default () => (
  <>
    <div className="text-white mt-10 " style={{ backgroundColor: '#111' }}>
      <div className="flex">
        <a
          className="flex-1 "
          href="https://odiario.net/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <ImageDivBackground64
            className="w-48 sm:w-56 mr-5 sm:mr-20"
            imageSrc={Logorodape}
          ></ImageDivBackground64>
        </a>

        <a
          className="flex-1 p-10 "
          href="mailto:contato@agenciaodiario.net"
          rel="noopener noreferrer"
        >
          Email:{' '}
          <span className="text-diariolaranja">contato@agenciaodiario.net</span>
        </a>
      </div>

      <div
        className="w-full inline-flex justify-center  p-3"
        style={{ backgroundColor: '#000' }}
      >
        Copyright© 2020 - Grupo o Diário
      </div>
    </div>
  </>
)
