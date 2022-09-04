import { Image } from 'image-js'
import { mean } from './mean'

export function modifyValues(image: Image, channel: number, modifier: (value: number) => number) {
    let i = 0
    let value = image.getValue(i, channel)

    while (value) {
        image.setValue(i, channel, modifier(value))
        i++
        value = image.getValue(i, channel)
    }

    return i
}

export function modifyAllChannels(image: Image, modifier: (value: number) => number) {
    modifyValues(image, 0, modifier)
    modifyValues(image, 1, modifier)
    modifyValues(image, 2, modifier)
}
