/**
 * @jest-environment jsdom
 */
import {
  ADD_HIGHLIGHT,
  COPY_DOCUMENT,
  TOGGLE_FILTER_HIGHLIGHT,
} from '../../constants/actions'

import {
  addHighlight,
  copyDocument,
  toggleFilterHighlights,
} from '../index'

describe('#Actions', () => {
  beforeAll(() => {
    document.execCommand = jest.fn((cmd, param) => (`${cmd} - ${param}`))

    window.getSelection = jest.fn(() => ({
      anchorOffset: 10,
      extentOffset: 30,
      toString: jest.fn(() => 'dummy selection'),
    }))
  })

  describe('addHighlight', () => {
    test('should getSelection and mark as selected using execCommand', () => {
      const expected = {
        type: ADD_HIGHLIGHT,
        highlight: {
          color: 'red',
          head: 10,
          tail: 30,
          sentence: 'dummy selection',
        },
      }

      const res = addHighlight('red')

      expect(res).toEqual(expected)
      expect(document.execCommand.mock.calls[1]).toEqual(['hiliteColor', false, 'red'])
      expect(document.execCommand.mock.calls.length).toEqual(2)
    })

    test('should getSelection get head and tail properly', () => {
      window.getSelection = jest.fn(() => ({
        anchorOffset: 30,
        extentOffset: 10,
        toString: jest.fn(() => 'dummy selection'),
      }))

      const res = addHighlight('red')
      expect(res.highlight.tail).toEqual(30)
      expect(res.highlight.head).toEqual(10)
    })
  })

  describe('copyDocument', () => {
    test('should call copy command', () => {
      const res = copyDocument()
      const expected = {
        type: COPY_DOCUMENT,
      }

      expect(res).toEqual(expected)
      expect(document.execCommand.mock.calls[1]).toEqual(['copy', false, null])
      expect(document.execCommand.mock.calls.length).toEqual(2)
    })
  })

  describe('toggleFilterHighlights', () => {
    test('should return active and color values', () => {
      const expected = {
        type: TOGGLE_FILTER_HIGHLIGHT,
        filter: {
          active: false,
          color: 'red',
        },
      }

      const res = toggleFilterHighlights('red', false)

      expect(res).toEqual(expected)
    })
  })
})
