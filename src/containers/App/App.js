import React from 'react'

import Header from '../../components/Header'
import Editor from '../../components/Editor'

import ToolbarContainer from '../ToolbarContainer'
import HighlightsListContainer from '../HighlightsListContainer'

const App = () => (
  <div className="App">
    <Header title="Text Highlighter">
      <ToolbarContainer />
    </Header>
    <Editor />
    <HighlightsListContainer />
  </div>
)

export default App
