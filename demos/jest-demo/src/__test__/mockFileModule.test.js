jest.mock('../utils')

import { fetchCustomData } from '../utils'
const { fetchData } = jest.requireActual('../utils')

describe('mock file module', () => {
  test('file module', async () => {
    const res = await fetchCustomData()
    expect(res.data).toBe('custom data')
  })

  test('use actual module', async ()=>{
    const res = await fetchData()
    expect(res.data.userId).toBe(1)
  })
})
