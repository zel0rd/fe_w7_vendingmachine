import { MENU } from "../data/menu"
import { MENUCOUNT } from "../data/menuCount"

class ProductModel {
    constructor() {
        this.menu = MENU,
        this.menuCount = MENUCOUNT,
        this.observers = []
    }

    buy(product){
    }
    
    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers() {
        let data = this.wallet.myMoney
        for (let o of this.observers) {
            o.update(data);
        }
    }

}

export { ProductModel }