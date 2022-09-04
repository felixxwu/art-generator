import { e } from '../helpers/createElement'

export function Button(text: string, onclick: (this: GlobalEventHandlers, ev: MouseEvent) => void) {
    const button = e('button')
    button.onclick = onclick
    button.innerHTML = text
    button.style.width = '200px'
    button.style.padding = '15px'
    button.style.color = 'white'
    button.style.backgroundColor = 'black'
    button.style.border = 'none'
    button.style.cursor = 'pointer'
    button.style.borderRadius = '5px'
    button.style.textTransform = 'uppercase'
    return button
}
