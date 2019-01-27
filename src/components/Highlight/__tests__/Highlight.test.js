import React from 'react'
import { shallow } from 'enzyme'

import Highlight from '../index'

describe('#Highlight', () => {
  test('expect to render', () => {
    const dummyData = {
      sentence: 'I will travel across the land',
      color: 'red',
    }
    const wrapper = shallow(<Highlight data={dummyData} />)
    expect(wrapper).toMatchSnapshot()
  })
})
