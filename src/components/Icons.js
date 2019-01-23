import React from 'react'
import PropTypes from 'prop-types'

export const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" />
  </svg>
)

export const MarkIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z" />
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill={color} fillOpacity=".8" d="M0 20h24v4H0z" />
  </svg>
)

MarkIcon.propTypes = {
  color: PropTypes.string,
}

MarkIcon.defaultProps = {
  color: '#000',
}
