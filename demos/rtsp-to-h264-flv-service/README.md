# Rtsp To h264 Flv Service

[简体中文](./README-zh_CN.md) | English

## Usage

### Start the Service

```bash
docker run --rm -p 9999:4384 -e AUDIO=true rtsp-to-h264-flv-service:1.0.0
```

#### Parameter Description

| Parameter | Description                      | Default |
|-----------|----------------------------------|---------|
| AUDIO     | Include audio or not             | false   |
| WEBPLAYER | Playback mode: 'jsmpeg' \| 'flv' | jsmpeg  |

## Example

```bash
cd ./demo
pnpm i
pnpm dev
```
