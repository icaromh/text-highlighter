import React from 'react'
import { shallow } from 'enzyme'

import HighlightsList from '../index'

describe('#HighlightsList', () => {
  test('expect to render', () => {
    const DummyComponent = () => (<div>Dummy</div>)
    const wrapper = shallow(<HighlightsList><DummyComponent /></HighlightsList>)
    expect(wrapper).toMatchSnapshot()
  })
})
