import React from 'react'
import Layout from './components/layout'
import { LeftStiky, WhatsAppRightBottom } from './components/socialSticky'

export default () => (
  <>
    <div className="theme-light h-screen ">
      <Layout />
    </div>
    <LeftStiky />
    <WhatsAppRightBottom />
  </>
)
