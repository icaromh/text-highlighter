import React, { Component, Fragment } from 'react'

const defaultDocument = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

class Editor extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="Editor">
        <div className="Editor__wrapper">
          <div
            className="Editor__content"
            spellCheck={false}
            dangerouslySetInnerHTML={{__html: defaultDocument}}
            contentEditable>
          </div>
        </div>
      </div>
    )
  }
}

export default Editor;
