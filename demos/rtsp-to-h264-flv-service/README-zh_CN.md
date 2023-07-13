# Rtsp To h264 Flv Service

简体中文 | [English](./README.md)

## 使用方法

### 启动服务

```bash
docker run --rm -p 9999:4384 -e AUDIO=true rtsp-to-h264-flv-service:1.0.0
```

#### 参数说明

| 参数        | 说明                      | 默认值    |
|-----------|-------------------------|--------|
| AUDIO     | 是否包含音频                  | false  |
| WEBPLAYER | 播放模式: 'jsmpeg' \| 'flv' | jsmpeg |

## 示例

```bash
cd ./demo
pnpm i
pnpm dev
```
