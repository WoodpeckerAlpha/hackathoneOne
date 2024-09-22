import { Module } from "../core/module";

export class SetBackgroundWhiteModule extends Module {
    constructor() {
        super("setBackgroundWhite", "Установить белый фон");
    }

    trigger() {
        document.body.style.backgroundColor = "#FFFFFF";
    }
}
