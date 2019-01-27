import React from 'react'
import { shallow } from 'enzyme'

import {
  CopyIcon,
  MarkIcon,
  SavedIcon,
} from '../index'

describe('#MarkIcon', () => {
  test('expect to render', () => {
    const wrapper = shallow(<MarkIcon />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('#CopyIcon', () => {
  test('expect to render', () => {
    const wrapper = shallow(<CopyIcon />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('#SavedIcon', () => {
  test('expect to render', () => {
    const wrapper = shallow(<SavedIcon />)
    expect(wrapper).toMatchSnapshot()
  })
})
