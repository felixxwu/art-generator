import { modifyValues } from '../helpers/modifyValues'
import { mean } from '../helpers/mean'
import { e } from '../helpers/createElement'
import { state } from '../index'
import { consts } from '../consts'

export async function Img() {
    const div = e('div')
    div.style.width = `${consts.width}px`
    div.style.height = `${consts.height}px`
    div.style.boxSizing = 'border-box'
    div.style.border = '1px black solid'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'

    const loading = div.appendChild(e('div'))
    loading.innerHTML = 'loading...'

    setTimeout(() => {
        div.innerHTML = ''
        const img = div.appendChild(e('img'))
        div.appendChild(Button())

        let cropped = state.image
        img.src = cropped.toDataURL()
        cropped = cropped.blurFilter({ radius: 2 })

        const mean0 = mean(cropped, 0)
        modifyValues(cropped, 0, v => (v < mean0 ? 0 : 255))
        const mean1 = mean(cropped, 1)
        modifyValues(cropped, 1, v => (v < mean1 ? 0 : 255))
        const mean2 = mean(cropped, 2)
        modifyValues(cropped, 2, v => (v < mean2 ? 0 : 255))

        img.src = cropped.toDataURL()
    })

    return div
}

function Button() {
    const button = e('button')
    button.onclick = () => {
        state.image = null
    }
    button.innerHTML = 'Again'
    return button
}
