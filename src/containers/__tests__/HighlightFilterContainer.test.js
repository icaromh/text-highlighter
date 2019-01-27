import React from 'react'
import { shallow } from 'enzyme'

import { HighlightFilter } from '../HighlightFilterContainer'

describe('#HighlightFilterContainer', () => {
  test('expect to render', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(
      <HighlightFilter handleCheckClick={onClickMock} />,
    )

    wrapper.find('CheckButton').at(0).simulate('click')

    expect(wrapper).toMatchSnapshot()
    expect(onClickMock.mock.calls.length).toBe(1)
  })
})
