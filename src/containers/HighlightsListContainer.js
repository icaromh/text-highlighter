import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import HighlightsList from '../components/HighlightsList'
import Highlight from '../components/Highlight'
import HighlightFilterContainer from './HighlightFilterContainer'

import TWITTER_URL_SHARE from '../constants'

const HighlightsListContainer = ({ highlights }) => (
  <HighlightsList>
    <HighlightFilterContainer />
    <div className="HighlightsList__wrapper">
      {highlights.map(highlight => (
        <p>
          <Highlight data={highlight} key={highlight.sentence} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={TWITTER_URL_SHARE(highlight.sentence)}
          >
              Share
          </a>
        </p>
      ))}
    </div>
  </HighlightsList>
)

HighlightsListContainer.propTypes = {
  highlights: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  highlights: (() => state.highlights.filter(h => state.filter.includes(h.color)))(),
})

export default connect(
  mapStateToProps,
  {},
)(HighlightsListContainer)
