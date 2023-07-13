import flvjs from 'flv.js'
import { FC } from 'react'

export const Flv: FC<{ baseUrl: string; rtsp: string }> = ({ baseUrl, rtsp }) => {
  const onPlay = () => {
    console.log('flvjs 是否支持：', flvjs.isSupported())
    if (flvjs.isSupported()) {
      const videoElement = document.getElementById('player') as HTMLVideoElement
      const flvPlayer = flvjs.createPlayer({
        isLive: true,
        type: 'flv',
        url: `ws://${baseUrl}/rtsp?url=` + btoa(rtsp),
        enableWorker: true,
        enableStashBuffer: false,
        stashInitialSize: 128,
      })
      flvPlayer.attachMediaElement(videoElement)
      try {
        flvPlayer.load()
        flvPlayer.play()
        // flvPlayer.pause()
      } catch (err) {
        // not do something
      }
    }
  }

  return (
    <div>
      <div>
        <button onClick={onPlay}>播放</button>
      </div>
      <video id="player" height="500" muted controls loop></video>
    </div>
  )
}
