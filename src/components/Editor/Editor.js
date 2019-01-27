import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({ value }) => (
  <div className="Editor">
    <div className="Editor__wrapper">
      <div
        className="Editor__content"
        spellCheck={false}
        dangerouslySetInnerHTML={{ __html: value }} // eslint-disable-line react/no-danger
        contentEditable
      />
    </div>
  </div>
)

Editor.propTypes = {
  value: PropTypes.string,
}

Editor.defaultProps = {
  value: '',
}


export default Editor
