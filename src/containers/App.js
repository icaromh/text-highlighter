import React from 'react'

import { defaultDocument } from '../constants'

import Header from '../components/Header'
import Editor from '../components/Editor'

import ToolbarContainer from './ToolbarContainer'
import HighlightsContainer from './HighlightsContainer'

const App = () => (
  <div className="App">
    <Header title="Text Highlighter">
      <ToolbarContainer />
    </Header>
    <Editor value={defaultDocument} />
    <HighlightsContainer />
  </div>
)

export default App
