import React from 'react'
import { shallow } from 'enzyme'

import MarkButton from '../MarkButton'

describe('#MarkButton', () => {
  test('expect to render', () => {
    const wrapper = shallow(<MarkButton color="red" onClick={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('expect to perform onClick', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<MarkButton color="red" onClick={onClickMock} />)

    wrapper.simulate('click')
    expect(onClickMock).toHaveBeenCalled()
  })
})
