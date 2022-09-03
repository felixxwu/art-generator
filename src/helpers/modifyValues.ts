import { Image } from 'image-js'

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
