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
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-6 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-green-100 hover:bg-yellow-200 shadow-md">${key}<br>${value}원<br>수량:${MENUCOUNT[key]}</div>`;
            } else {
                // 비활성화 버튼 div class 추가
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-6 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${key}<br>${value}원<br>수량:${MENUCOUNT[key]}</div>`;
            }
            
        }
        vendingBox.innerHTML=inp;
    }

    buy(walletModel,productModel, price, product){
        return function(walletModel,productModel, price, product){
            if(productModel.menuCount[product] >= 1){
                walletModel.buy(price, product)
                productModel.buy(product)
            } else {
                console.log("재고가 부족합니다.")
            }
        }
    }

    fail(){
        return function() {
            console.log("투입금액이 부족합니다.")
        }
    }


    setEvent() {
        const products = document.querySelectorAll(".product")
        const insertMoney = this.getInsertMoney();
        const buyCallBack = this.buy()
        const failCallBack = this.fail()
        const walletModel = this.WalletModel;
        const productModel = this.WalletModel;
        for (let i = 0; i < products.length; i++){
            let productModel = this.ProductModel
            products[i].addEventListener("click", function () {
                let price = Object.values(productModel.menu)[i]
                let product = Object.keys(productModel.menu)[i]
                return (price <= insertMoney) ? buyCallBack(walletModel,productModel, price, product) : failCallBack()
            })
        }
    }
}

export { ProductView }