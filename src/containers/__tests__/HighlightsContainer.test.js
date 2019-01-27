import React from 'react'
import { shallow } from 'enzyme'

import { HighlightsListContainer } from '../HighlightsContainer'

describe('#HighlightFilterContainer', () => {
  test('expect to render', () => {
    const wrapper = shallow(
      <HighlightsListContainer highlights={[]} />,
    )

    expect(wrapper).toMatchSnapshot()
  })

  test('expect to list filtered colors', () => {
    const highlightsList = [
      {
        head: 20,
        tail: 80,
        sentence: 'sentence a',
        color: 'red',
      },
    ]

    const wrapper = shallow(
      <HighlightsListContainer highlights={highlightsList} />,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
