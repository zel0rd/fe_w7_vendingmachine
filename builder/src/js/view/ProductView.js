import {$,$$} from "../util/util";
import { MENU } from "../data/menu"
import { MENUCOUNT } from "../data/menuCount"

class ProductView {
    constructor(WalletModel, ProductModel){
        this.WalletModel = WalletModel;
        this.ProductModel = ProductModel;
    }

    init() {
        this.render();
        this.setEvent();
    }
    update(){
        this.init();
    }

    getInsertMoney() {
        let totalMoney=0;
        for (const [key, value] of Object.entries(this.WalletModel.insert.myInsert))
        {
            totalMoney += key * value;
        }
        return totalMoney;
    }

    render() {
        const vendingBox = $(".vending__box")
        const insertMoney = this.getInsertMoney();
        let menu = this.ProductModel.menu;
        let inp = "";
        for (const [key, value] of Object.entries(menu)) {
            if(value <= insertMoney && this.ProductModel.menuCount[key] >= 1){
                // 활성화 버튼 div class 추가
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-6 min-w-100 border-4 border-dashed rounded-2xl text-lg border-red-500 bg-yellow-100 hover:bg-red-500 hover:text-white shadow-md">${key}<br>${value}원<br>(${MENUCOUNT[key]})</div>`;
            } else {
                // 비활성화 버튼 div class 추가
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-6 min-w-100 border-4 border-dashed rounded-2xl text-lg border-yellow-300 bg-yellow-100 shadow-md">${key}<br>${value}원<br>(${MENUCOUNT[key]})</div>`;
            }
            
        }
        vendingBox.innerHTML=inp;
    }

    buy(product, price){
        if(this.ProductModel.menuCount[product] >= 1){
            this.WalletModel.buy(price, product)
            this.ProductModel.buy(product)
        } else {
            console.log("재고가 부족합니다.")
        }
    }

    fail(){
        console.log("투입금액이 부족합니다.")
    }

    setEvent() {
        const products = document.querySelectorAll(".product")
        const insertMoney = this.getInsertMoney();
        let productModel = this.ProductModel
        
        products.forEach((ele, index) => {
            let price = Object.values(productModel.menu)[index]
            let product = Object.keys(productModel.menu)[index]
            if(price <= insertMoney){
                ele.addEventListener("click",this.buy.bind(this, product, price))
            } else {
                ele.addEventListener("click",this.fail)
            }
        })
    }
}

export { ProductView }