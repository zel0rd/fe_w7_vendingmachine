import { MENU } from "../data/menu"

class ProductModel {
    constructor() {
        this.menu = MENU,
        this.observers = []
    }
    
    addObserver(o) {
        this.observers.push(o);
        console.log("MENU : ",this)
    }

    notifyObservers() {
        let data = this.wallet.myMoney
        for (let o of this.observers) {
            o.update(data);
        }
    }

}

export { ProductModel }