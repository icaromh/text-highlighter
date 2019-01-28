import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import HighlightsList from '../components/HighlightsList'
import Highlight from '../components/Highlight'
import { ShareIcon } from '../components/Icons'
import HighlightFilterContainer from './HighlightFilterContainer'

import TWITTER_URL_SHARE from '../constants'

const HighlightsListContainer = ({ highlights }) => (
  <HighlightsList>
    <HighlightFilterContainer />
    <div className="HighlightsList__wrapper">
      {highlights.map(highlight => (
        <p key={`${highlight.color}${highlight.sentence}`}>
          <Highlight data={highlight} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={TWITTER_URL_SHARE(highlight.sentence)}
          >
            <ShareIcon />
          </a>
        </p>
      ))}
    </div>
  </HighlightsList>
)

HighlightsListContainer.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.shape({
    sentence: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    head: PropTypes.number,
    tail: PropTypes.number,
  })),
}

HighlightsListContainer.defaultProps = {
  highlights: [],
}

const mapStateToProps = state => ({
  highlights: (() => state.highlights.filter(h => state.filter.includes(h.color)))(),
})

export {
  HighlightsListContainer,
}

export default connect(
  mapStateToProps,
  {},
)(HighlightsListContainer)
