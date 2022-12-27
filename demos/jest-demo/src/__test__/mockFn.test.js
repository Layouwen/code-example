import { fetchData, callBackFn, callBackFnHasReturn } from '../utils'
import axios from 'axios'
jest.mock('axios')

describe('mock', () => {
  test('mock fn', () => {
    const mockFn = jest.fn()
    callBackFn(mockFn)
    expect(mockFn).toBeCalled()
  })

  test('mock return', () => {
    const mockFn = jest.fn()
    mockFn.mockReturnValueOnce('a')
    mockFn.mockReturnValue('hello')
    expect(callBackFnHasReturn(mockFn)).toBe('a')
    expect(callBackFnHasReturn(mockFn)).toBe('hello')
  })

  test('mock return implementation', () => {
    const mockFn = jest.fn()
    mockFn.mockImplementationOnce(() => {
      return 'avan1'
    })
    mockFn.mockImplementation(() => {
      console.log('mock implementation')
      return 'avan'
    })
    expect(callBackFnHasReturn(mockFn)).toBe('avan1')
    expect(callBackFnHasReturn(mockFn)).toBe('avan')
  })

  test('mock return this', () => {
    const mockFn = jest.fn()
    mockFn.mockReturnThis()
    expect(callBackFnHasReturn(mockFn)).toBe(undefined)
  })

  test('mock promise return value', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        name: 'layouwen',
        age: 20
      }
    })
    const res = await fetchData()
    expect(res.data).toMatchObject({ name: 'layouwen' })
  })
})
