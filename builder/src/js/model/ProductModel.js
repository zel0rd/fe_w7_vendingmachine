import { MENU } from "../data/menu"

class ProductModel {
    constructor() {
        this.menu = MENU,
        this.observers = []
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