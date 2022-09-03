import { App } from './components/App'
import './index.scss'
import { Image } from 'image-js'

export const state = new Proxy(
    {
        image: <Image>null,
        count: 0,
    },
    {
        get(target, key) {
            return target[key as keyof typeof target]
        },
        set(target, key, newValue) {
            target[key as keyof typeof target] = newValue
            renderApp()
            return true
        },
    }
)

export async function renderApp() {
    const app = await App()
    window.document.body.innerHTML = ''
    window.document.body.appendChild(app)
}

renderApp()
