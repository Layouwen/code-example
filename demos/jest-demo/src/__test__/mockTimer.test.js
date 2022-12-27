import { timerExec } from '../utils'

jest.useFakeTimers()

describe('timer', () => {
  test('timerExec runOnlyPendingTimers', () => {
    const mockFn = jest.fn()
    timerExec(3000, mockFn)
    jest.runOnlyPendingTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test('timerExec runAllTimers', () => {
    const mockFn = jest.fn()
    timerExec(3000, mockFn)
    jest.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  test('timerExec advanceTimersByTime', () => {
    const mockFn = jest.fn()
    timerExec(3000, mockFn)
    jest.advanceTimersByTime(3000)
    expect(mockFn).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(2000)
    expect(mockFn).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(1000)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
