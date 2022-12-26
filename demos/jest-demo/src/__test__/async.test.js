import { fetch404, fetchData } from '../fetchData'

test('async fetch', async () => {
  const res = await fetchData()
  expect(res.data.userId).toBe(1)
  await expect(fetchData()).resolves.toMatchObject({
    data: {
      userId: 1
    }
  })
})

test('async fetch done', (done) => {
  fetchData().then(res => {
    expect(res.data.completed).not.toBe(true)
    done()
  })
})

test('fetch 404', async () => {
  await expect(fetch404()).rejects.toThrow()
})
