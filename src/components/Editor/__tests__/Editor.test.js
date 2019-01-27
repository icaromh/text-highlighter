import React from 'react'
import { shallow } from 'enzyme'

import Editor from '../Editor'

describe('#Editor', () => {
  test('expect to render', () => {
    const wrapper = shallow(<Editor />)
    expect(wrapper).toMatchSnapshot()
  })

  test('expect to render the dangerously html', () => {
    const value = 'Hey, dummy testing'
    const wrapper = shallow(<Editor value={value} />)

    expect(wrapper).toMatchSnapshot()
  })
})
