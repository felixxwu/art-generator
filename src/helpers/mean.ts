import { Image } from 'image-js'
import { modifyValues } from './modifyValues'

export function mean(image: Image, channel: number) {
    let sum = 0
    const total = modifyValues(image, channel, v => {
        sum += v
        return v
    })
    return sum / total
}
