import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

describe('#Header', () => {
  test('expect to render', () => {
    const wrapper = shallow(
      <Header title="dummy">
        <p>some subtitle</p>
      </Header>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
