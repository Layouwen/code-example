import { useState } from 'react'
import { Flv } from './pages/flv'
import { Jsmpeg } from './pages/Jsmpeg'

const App = () => {
  const [pageNo, setPageNo] = useState(1)
  const [baseUrl, setBaseUrl] = useState('localhost:9999')
  const [rtsp, setRtsp] = useState('rtsp://192.168.10.11:9554/test')

  return (
    <>
      <div>
        <label htmlFor="baseUrl">
          BASE URL: <input name="baseUrl" value={baseUrl} onChange={e => setBaseUrl(e.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="rtsp">
          RTSP URL: <input name="rtsp" value={rtsp} onChange={e => setRtsp(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => setPageNo(2)}>jsmpeg demo</button>
        <button onClick={() => setPageNo(1)}>flv demo</button>
      </div>
      {pageNo === 2 && <Jsmpeg rtsp={rtsp} baseUrl={baseUrl} />}
      {pageNo === 1 && <Flv rtsp={rtsp} baseUrl={baseUrl} />}
    </>
  )
}

export default App
