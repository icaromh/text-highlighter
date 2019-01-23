import React from 'react'
import { connect } from 'react-redux'
import { addHighlight } from '../../actions'

import { CopyIcon } from '../../components/Icons'
import Button, { MarkButton } from '../../components/Button'
import { RED, YELLOW, GREEN } from '../../constants/colors'

const ToolbarContainer = ({ addHighlight }) => (
  <nav className="Toolbar">
    <MarkButton onClick={() => addHighlight(RED)} color={RED} />
    <MarkButton onClick={() => addHighlight(YELLOW)} color={YELLOW} />
    <MarkButton onClick={() => addHighlight(GREEN)} color={GREEN} />

    <Button title="Copy the document as showed" onClick={() => console.log('copied')}>
      <CopyIcon />
    </Button>
  </nav>
)

export default connect(
  null,
  { addHighlight }
)(ToolbarContainer)
