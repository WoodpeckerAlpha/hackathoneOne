import {Module} from '../core/module'

export class BackgroundModule extends Module {
    trigger() {
        document.body.style.backgroundColor = 'red'
    }
}