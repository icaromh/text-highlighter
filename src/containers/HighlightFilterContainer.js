import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  RED,
  YELLOW,
  GREEN,
} from '../constants/colors'

import { toggleFilterHighlights } from '../actions'
import CheckButton from '../components/Button/CheckButton'

const HighlightFilter = ({ handleCheckClick }) => (
  <div className="HighlightFilterContainer">
    <CheckButton onClick={handleCheckClick} value={RED} />
    <CheckButton onClick={handleCheckClick} value={YELLOW} />
    <CheckButton onClick={handleCheckClick} value={GREEN} />
  </div>
)

HighlightFilter.propTypes = {
  handleCheckClick: PropTypes.func.isRequired,
}

export {
  HighlightFilter,
}

export default connect(
  null,
  {
    handleCheckClick: toggleFilterHighlights,
  },
)(HighlightFilter)
