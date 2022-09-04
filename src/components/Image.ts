import { modifyAllChannels, modifyValues } from '../helpers/modifyValues'
import { mean } from '../helpers/mean'
import { e } from '../helpers/createElement'
import { state } from '../index'
import { consts } from '../consts'
import { sleep } from '../helpers/sleep'
import { Button } from './Button'

export async function Img() {
    const div = e('div')
    div.style.width = `100%`
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.flexDirection = 'column'
    div.style.gap = '20px'

    const loading = div.appendChild(e('h1'))
    loading.innerHTML = 'loading...'

    setTimeout(async () => {
        let cropped = state.image
        loading.innerHTML = 'blurring...'
        await sleep(100)
        cropped = cropped.blurFilter({ radius: 5 })

        loading.innerHTML = 'modifying...'
        await sleep(100)

        const means = [0, 1, 2].map(x => mean(cropped, x))
        console.log('means', means)
        const allmean = means.reduce((a, b) => a + b, 0) / means.length
        modifyAllChannels(cropped, v => (v < allmean ? 0 : 255))

        loading.innerHTML = 'settings image src...'
        await sleep(100)

        div.innerHTML = ''
        const img = div.appendChild(e('img'))
        img.style.width = `100%`
        img.style.borderRadius = '5px'
        img.src = cropped.toDataURL()

        div.appendChild(AgainButton())
        // div.appendChild(RandomColoursButton())
    })

    return div
}

function AgainButton() {
    return Button('Again', () => {
        state.image = null
    })
}

function RandomColoursButton() {
    return Button('Random colors', () => {
        const pixels = state.image.getPixelsArray()
        console.log('pixels', pixels)
    })
}
