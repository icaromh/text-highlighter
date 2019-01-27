import React from 'react'
import { shallow } from 'enzyme'

import Toolbar from '../Toolbar'

describe('#Toolbar', () => {
  test('expect to render', () => {
    const DummyComponent = () => (<div>Dummy</div>)
    const wrapper = shallow(<Toolbar><DummyComponent /></Toolbar>)
    expect(wrapper).toMatchSnapshot()
  })
})
