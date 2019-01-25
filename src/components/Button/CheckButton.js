import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SavedIcon } from '../Icons'

class CheckButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    const { value, onClick } = this.props

    this.setState(state => ({
      checked: !state.checked,
    }), () => onClick(value, this.state.checked)) // eslint-disable-line react/destructuring-assignment
  }

  render() {
    const { value } = this.props
    const { checked } = this.state
    const checkedClass = checked ? 'checked' : ''

    return (
      <button
        type="button"
        className={`Button ${checkedClass}`}
        onClick={this.handleOnClick}
      >
        <SavedIcon color={value} />
      </button>
    )
  }
}

CheckButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default CheckButton
