import { renderApp, state } from '../index'
import { Img } from './Image'
import { Camera } from './Camera'
import { e } from '../helpers/createElement'

export async function App() {
    const app = e('div')
    app.style.maxWidth = `800px`
    app.style.margin = 'auto'
    app.style.paddingTop = '20px'
    if (state.image === null) {
        app.appendChild(await Camera())
    } else {
        app.appendChild(await Img())
    }
    return app
}
