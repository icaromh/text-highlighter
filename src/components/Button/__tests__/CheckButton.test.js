import React from 'react'
import { shallow } from 'enzyme'

import CheckButton from '../CheckButton'

describe('#CheckButton', () => {
  test('expect to render', () => {
    const wrapper = shallow(<CheckButton value="red" onClick={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('expect to perform onClick n update class', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<CheckButton value="red" onClick={onClickMock} />)

    wrapper.simulate('click')
    expect(onClickMock).toHaveBeenCalled()
    expect(wrapper.find('.Button').hasClass('checked')).toBe(true)

    wrapper.simulate('click')
    expect(onClickMock).toHaveBeenCalled()
    expect(wrapper.find('.Button').hasClass('checked')).toBe(false)
  })
})
