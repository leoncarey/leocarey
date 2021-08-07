import React from 'react'
import { Main, Content } from './styles'

import Sections from './sections'
import Header from './components/Header';

import './theme.css'

function App() {
  return (
    <Main>
      <Content>
        <Sections />
      </Content>

      <Header />
    </Main>
  );
}

export default App;
