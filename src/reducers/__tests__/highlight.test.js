import { highlights, filter } from '../highlight'

import {
  ADD_HIGHLIGHT,
  TOGGLE_FILTER_HIGHLIGHT,
} from '../../constants/actions'


describe('#Reducers', () => {
  describe('hightlights', () => {
    test('should return state if action didn\'t match', () => {
      const highlightsState = ['summy', 'dummy']
      const action = {
        type: 'dummy',
        data: 'foo',
      }

      const res = highlights(highlightsState, action)
      expect(res).toEqual(highlightsState)
    })

    test('should add the hightlight into state and order it', () => {
      const highlightsState = [
        {
          head: 20,
          tail: 80,
          sentence: 'sentence a',
          color: 'red',
        },
        {
          head: 15,
          tail: 25,
          sentence: 'sentence b',
          color: 'green',
        },
        {
          head: 80,
          tail: 85,
          sentence: 'senctence c',
          color: 'yellow',
        },
        {
          head: 80,
          tail: 89,
          sentence: 'senctence c',
          color: 'yellow',
        },
      ]

      const action = {
        type: ADD_HIGHLIGHT,
        highlight: {
          head: 0,
          tail: 10,
          sentence: 'lorem lorem ip ip',
          color: 'red',
        },
      }

      const expectedState = [].concat(
        action.highlight,
        highlightsState[1],
        highlightsState[0],
        highlightsState[2],
        highlightsState[3],
      )

      const res = highlights(highlightsState, action)
      expect(res).toEqual(expectedState)
    })
  })

  describe('filter', () => {
    test('should return state if action didn\'t match', () => {
      const highlightsState = []
      const action = {
        type: 'dummy',
        data: 'foo',
      }

      const res = filter(highlightsState, action)
      expect(res).toEqual(highlightsState)
    })

    test('should add filter color to state if filter it\'s active', () => {
      const filterState = []
      const expectedFilter = ['red']
      const action = {
        type: TOGGLE_FILTER_HIGHLIGHT,
        filter: {
          color: 'red',
          active: true,
        },
      }

      const res = filter(filterState, action)
      expect(res).toEqual(expectedFilter)
    })

    test('should remove colo from state if filter isn\'t active', () => {
      const filterState = ['red', 'yellow']
      const expectedFilter = ['yellow']
      const action = {
        type: TOGGLE_FILTER_HIGHLIGHT,
        filter: {
          color: 'red',
          active: false,
        },
      }

      const res = filter(filterState, action)
      expect(res).toEqual(expectedFilter)
    })
  })
})
