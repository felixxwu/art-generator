import { e } from '../helpers/createElement'
import { Image } from 'image-js'
import { state } from '../index'
import { consts } from '../consts'

export async function Camera() {
    const video = e('video')

    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    video.srcObject = stream
    video.width = consts.width
    video.height = consts.height
    video.autoplay = true

    video.onclick = () => {
        const canvas = e('canvas')
        canvas.width = consts.width
        canvas.height = consts.height
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
        state.image = Image.fromCanvas(canvas)
    }
    return video
}
