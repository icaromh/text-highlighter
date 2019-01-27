import React from 'react'
import { shallow } from 'enzyme'

import Button from '../index'

describe('#Button', () => {
  test('expect to render', () => {
    const wrapper = shallow(<Button onClick={() => {}}>text</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  test('expect to perform onClick', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<Button onClick={onClickMock}>text</Button>)

    wrapper.simulate('click')
    expect(onClickMock).toHaveBeenCalled()
  })
})
