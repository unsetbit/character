import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`

const App = () => {
  return <Title>Character</Title>;
}

ReactDOM.render(<App />, document.querySelector("#root"))
