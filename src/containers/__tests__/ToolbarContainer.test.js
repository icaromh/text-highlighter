import React from 'react'
import { shallow } from 'enzyme'

import { ToolbarContainer } from '../ToolbarContainer'
import { RED, YELLOW, GREEN } from '../../constants/colors'

describe('#ToolbarContainer', () => {
  test('expect to render', () => {
    const wrapper = shallow(
      <ToolbarContainer
        handleAddHighlight={jest.fn()}
        handleCopyContent={jest.fn()}
      />,
    )

    expect(wrapper).toMatchSnapshot()
  })

  test('should call handleAddHighlight on mark click', () => {
    const handleAddHighlight = jest.fn()
    const wrapper = shallow(
      <ToolbarContainer
        handleAddHighlight={handleAddHighlight}
        handleCopyContent={jest.fn()}
      />,
    )

    wrapper.find('MarkButton').at(0).simulate('click')
    wrapper.find('MarkButton').at(1).simulate('click')
    wrapper.find('MarkButton').at(2).simulate('click')

    expect(handleAddHighlight).toBeCalled()
    expect(handleAddHighlight.mock.calls[0][0]).toBe(RED)
    expect(handleAddHighlight.mock.calls[1][0]).toBe(YELLOW)
    expect(handleAddHighlight.mock.calls[2][0]).toBe(GREEN)
  })

  test('should call handleAddHighlight on mark click', () => {
    const handleCopyContent = jest.fn()
    const wrapper = shallow(
      <ToolbarContainer
        handleAddHighlight={jest.fn()}
        handleCopyContent={handleCopyContent}
      />,
    )

    wrapper.find('Button').at(0).simulate('click')
    expect(handleCopyContent).toBeCalled()
  })
})
