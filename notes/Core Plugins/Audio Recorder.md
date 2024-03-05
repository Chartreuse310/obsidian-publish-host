
## 插件初始化

注册一个`RibbonItem`和两个`Command`

## 录制的伪代码

```js
let mediaStream = await navigator.mediaDevices.getUserMedia({
	audio: true,
	video: false,
})

const chunks = []
let recorder = new MediaRecorder(mediaStream, {mimeType: 'audio/webm;codecs="opus"'})
recorder.addEventListener("dataavailable", function (e) {
	e.data.size > 0 && chunks.push(e.data)
})
recorder.addEventListener("stop", function () {
	let blob = new Blob(chunks, {type: mimeType})
})
```


## 参考资料

- https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API