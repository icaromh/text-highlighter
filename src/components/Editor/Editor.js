import React from 'react'

import { defaultDocument } from '../../constants'

const Editor = () => (
  <div className="Editor">
    <div className="Editor__wrapper">
      <div
        className="Editor__content"
        spellCheck={false}
        dangerouslySetInnerHTML={{ __html: defaultDocument }} // eslint-disable-line react/no-danger
        contentEditable
      />
    </div>
  </div>
)

export default Editor
