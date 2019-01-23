import React from 'react'

import Editor from '../../components/Editor'
import ToolbarContainer from '../ToolbarContainer'

import Header from '../../components/Header'

const App = () => (
  <div className="App">
    <Header title="Text highlighter">
      <ToolbarContainer />
    </Header>
    <Editor />
  </div>
)

export default App
