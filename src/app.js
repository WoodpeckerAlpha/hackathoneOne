import './styles.css'

import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { RandomFigure } from './modules/random.figure.module'

const menu = new ContextMenu('.menu')

const modules = {
    randomFigure: new RandomFigure('randomFigure', 'randomFigure'),
    shapeModule: new ShapeModule('shapeModule', 'shape'),
    clicksModule: new ClicksModule('clicksModule', 'clicks'),
    backgroundModule: new BackgroundModule('backgroundModule', 'background')
}

function removeModuleResult() {
    const module = document.querySelector('.module')
    if (module) {
        module.remove()
    }
}

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault()

    removeModuleResult()

    const items = document.querySelectorAll('.menu-item')
    if (items.length !== 0) {
        items.forEach((el) => {
            el.remove()
        })
    } 


    Object.assign(menu.el.style, {
        top: `${event.clientY}px`,
        left: `${event.clientX}px`
    })

    const objKeys = Object.keys(modules)
    if (objKeys.length !== 0) {
        menu.open()
        objKeys.forEach((el) => {
            menu.add(modules[el])
        })
    }
})

menu.el.addEventListener('click', (event) => {
    removeModuleResult()
    const {type} = event.target.dataset
    modules[type].trigger()
    menu.close()
})


