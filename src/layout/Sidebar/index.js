import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../../components/List'
// import FollowSuggestion from '../FollowSuggestion';
// import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Que Masssssaaaaa"
            elements={[
              <div>Teste List Element</div>,
              <div>Teste List Element</div>,
              <div>Teste List Element</div>,
              <div>Teste List Element</div>,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
