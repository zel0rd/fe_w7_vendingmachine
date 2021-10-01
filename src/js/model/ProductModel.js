import { MENU } from "../data/menu"
import { MENUCOUNT } from "../data/menuCount"

class ProductModel {
    constructor() {
        this.menu = MENU,
        this.menuCount = MENUCOUNT,
        this.observers = []
    }

    buy(product){
        this.menuCount[product] -= 1;
        this.notifyObservers()
    }
    
    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers() {
        for (let o of this.observers) {
            o.update();
        }
    }

}

export { ProductModel }