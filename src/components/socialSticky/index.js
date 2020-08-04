import React from 'react'

import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'

export const LeftStiky = () => (
  <>
    <div
      className="icon-bar bg-gray-900 opacity-50 
        text-white fixed top-1/2 flex flex-col"
    >
      <a
        target="_blanck"
        rel="noopener noreferrer"
        href="https://www.facebook.com/MarketingODiario/?epa=SEARCH_BOX"
        className="
            p-2     
          text-center            
          inline-flex 
          justify-center
          items-center
          hover:text-diariolaranja 
          hocus:text-diariolaranja 
        "
      >
        <FiFacebook className="w-8 h-8"></FiFacebook>
      </a>

      <a
        target="_blanck"
        rel="noopener noreferrer"
        href="https://www.instagram.com/marketingodiario/"
        className="
          p-2     
          text-center 
          rounded 
          inline-flex 
          justify-center
          items-center
          hover:text-diariolaranja 
          hocus:text-diariolaranja 
        "
      >
        <FiInstagram className="w-8 h-8"></FiInstagram>
      </a>
    </div>
  </>
)

export const WhatsAppRightBottom = () => (
  <div
    className="  visible sm:invisible
        text-white  flex flex-col
        fixed bottom-0 right-0 p-12
        "
  >
    <a
      href="https://api.whatsapp.com/send?phone=555199961716"
      target="_blank"
      rel="noopener noreferrer"
      className="
      bg-whatsapp w-12 h-12
          rounded-full
          text-center            
          inline-flex 
          justify-center
          items-center
          hover:text-diariolaranja 
          hocus:text-diariolaranja 
        "
    >
      <RiWhatsappLine className="w-8 h-8"></RiWhatsappLine>
    </a>
  </div>
)
