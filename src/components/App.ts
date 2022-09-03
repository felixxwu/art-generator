import { renderApp, state } from '../index'
import { Img } from './Image'
import { Camera } from './Camera'
import { e } from '../helpers/createElement'

export async function App() {
    const app = e('div')
    if (state.image === null) {
        app.appendChild(await Camera())
    } else {
        app.appendChild(await Img())
    }
    return app
}
