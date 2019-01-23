import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CopyIcon } from '../../components/Icons'
import Button, { MarkButton } from '../../components/Button'

import {
  RED,
  YELLOW,
  GREEN,
} from '../../constants/colors'

import {
  addHighlight,
  copyDocument,
} from '../../actions'


const ToolbarContainer = ({ handleAddHighlight, handleCopyContent }) => (
  <nav className="Toolbar">
    <MarkButton onClick={() => handleAddHighlight(RED)} color={RED} />
    <MarkButton onClick={() => handleAddHighlight(YELLOW)} color={YELLOW} />
    <MarkButton onClick={() => handleAddHighlight(GREEN)} color={GREEN} />

    <Button title="Copy the document as showed" onClick={() => handleCopyContent()}>
      <CopyIcon />
    </Button>
  </nav>
)

ToolbarContainer.propTypes = {
  handleAddHighlight: PropTypes.func.isRequired,
  handleCopyContent: PropTypes.func.isRequired,
}

export default connect(
  null,
  {
    handleAddHighlight: addHighlight,
    handleCopyContent: copyDocument,
  },
)(ToolbarContainer)
