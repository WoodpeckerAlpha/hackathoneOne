import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'

export class ContextMenu extends Menu {
    
    open() {
        const modules = {
            shapeModule: new ShapeModule('shapeModule', 'shape'),
            clicksModule: new ClicksModule('clicksModule', 'clicks'),
            backgroundModule: new BackgroundModule('backgroundModule', 'background')
        }
        
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            const items = document.querySelectorAll('.menu-item')
            if (items.length !== 0) {
                items.forEach((el) => {
                    el.remove()
                })
            } 
            Object.assign(this.el.style, {
                top: `${event.clientY}px`,
                left: `${event.clientX}px`
            })

            this.el.classList.add('open')

            this.add(modules['shapeModule'])
            this.add(modules['clicksModule'])
            this.add(modules['backgroundModule'])

        })

        this.el.addEventListener('click', (event) => {
            const {type} = event.target.dataset
            modules[type].trigger()
            this.close()
        })
    }

    close() {
        this.el.classList.remove('open')
    }

    add(module) {
        this.el.insertAdjacentHTML('afterbegin', module.toHTML())
    }
}