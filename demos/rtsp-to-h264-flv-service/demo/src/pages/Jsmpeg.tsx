import { FC, useRef } from 'react'

export const Jsmpeg: FC<{ baseUrl: string; rtsp: string }> = ({ baseUrl, rtsp }) => {
  const videoPlayerRef = useRef<any>(null)

  const onPlay = () => {
    const VideoPlayer = (window as any).JSMpeg

    videoPlayerRef.current = new VideoPlayer.Player(
      // `ws://${hostname}/videows/rtsp?url=` +
      `ws://${baseUrl}/videows/rtsp?url=` + btoa(rtsp) + '&brightness=0.2&saturation=1.8',
      {
        canvas: document.getElementById('video-player'),
      }
    )
  }

  return (
    <div>
      <div>
        <button onClick={onPlay}>播放</button>
      </div>
      <canvas id="video-player" />
    </div>
  )
}
