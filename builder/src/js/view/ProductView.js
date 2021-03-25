import {$,$$} from "../util/util";
import { MENU } from "../data/menu"
import { WalletView } from "./WalletView";
const aa = MENU;

class ProductView {
    constructor(WalletModel, ProductModel){
        this.WalletModel = WalletModel;
        this.ProductModel = ProductModel;
    }

    update(){
        console.log(this)
        // console.log("render")
        // console.log(this.WalletModel)
        // console.log(this.menu)
        this.render()
    }

    render() {
        const vendingBox = $(".vending__box")
        console.log(vendingBox)
        let menu = this.ProductModel.menu;
        let inp = "";
        for (const [key, value] of Object.entries(menu)) {
            inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-8 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${key}<br>${value}</div>`;
        }
        vendingBox.innerHTML=inp;
    }
}

export { ProductView }