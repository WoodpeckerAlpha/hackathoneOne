import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modules = [];
        this.el.addEventListener("click", this.onMenuItemClick.bind(this));
        document.addEventListener("contextmenu", this.onContextMenu.bind(this));
    }

    onContextMenu(event) {
        event.preventDefault();
        this.open(event.pageX, event.pageY);
    }

    onMenuItemClick(event) {
        const type = event.target.dataset.type;
        const module = this.modules.find((mod) => mod.type === type);
        if (module) {
            module.trigger();
            this.close();
        }
    }
    open(x, y) {
        if (this.modules.length === 0) return;
        this.el.style.top = `${y}px`;
        this.el.style.left = `${x}px`;
        this.el.classList.add("open");
    }

    close() {
        this.el.classList.remove("open");
    }

    add(module) {
        this.modules.push(module);
        this.el.insertAdjacentHTML("beforeend", module.toHTML());
    }
}
