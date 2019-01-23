import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import HighlightsList from '../../components/HighlightsList'
import Highlight from '../../components/Highlight'

const HighlightsListContainer = ({ highlights }) => (
  <HighlightsList>
    {highlights.map((highlight, i) => (
      <Highlight data={highlight} key={i} />
    ))}
  </HighlightsList>
)

HighlightsListContainer.propTypes = {
  highlights: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  highlights: state.filteredHighlights,
})

export default connect(
  mapStateToProps,
  {},
)(HighlightsListContainer)
