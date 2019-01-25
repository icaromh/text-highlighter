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

const HighlightFilterContainer = ({ handleCheckClick }) => (
  <div>
    <CheckButton onClick={handleCheckClick} value={RED} />
    <CheckButton onClick={handleCheckClick} value={YELLOW} />
    <CheckButton onClick={handleCheckClick} value={GREEN} />
  </div>
)

HighlightFilterContainer.propTypes = {
  handleCheckClick: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  highlights: state.highlights,
})

export default connect(
  mapStateToProps,
  {
    handleCheckClick: toggleFilterHighlights,
  },
)(HighlightFilterContainer)
