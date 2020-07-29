import styled from 'styled-components'

export const VideoBgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  z-index: -5;
  video {
    min-height: 100%;
    min-width: 100%;
  }
  video::-webkit-media-controls {
    display: none !important;
  }
`

// .bgvid {
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
// }
