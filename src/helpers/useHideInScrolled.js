import { useState, useEffect } from 'react'

export default function useHideInScrolled() {
  const [topPosition, setTopPosition] = useState('0px')
  // const [marginTop, setMarginTop] = useState('200px')

  const [prevScrollpos, setPrevScrollpos] = useState()
  const [currentScrollpos, setCurrentScrollpos] = useState()

  const windowOnscroll = () => {
    // console.log(window.pageYOffset)
    setCurrentScrollpos(window.pageYOffset)
    if (prevScrollpos > currentScrollpos) {
      setTopPosition('0px')
      // setMarginTop('200px')
    } else {
      setTopPosition('-150px')
      // setMarginTop('0px')
    }
    setPrevScrollpos(currentScrollpos)
  }

  useEffect(() => {
    window.addEventListener('scroll', windowOnscroll)
    return () => {
      window.removeEventListener('scroll', windowOnscroll)
    }
  })

  return { topPosition }
}
