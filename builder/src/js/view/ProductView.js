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
        this.setEvent();
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
            if(value <= insertMoney){
                // 활성화 버튼 div class 추가
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-8 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-green-100 hover:bg-yellow-200 shadow-md">${key}<br>${value}</div>`;
            } else {
                // 비활성화 버튼 div class 추가
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-8 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${key}<br>${value}</div>`;
            }
            
        }
        vendingBox.innerHTML=inp;
    }

    buy(walletModel, price){
        return function(walletModel, price){
            walletModel.buy(price)
        }
    }

    fail(){
        return function() {
            console.log("투입금액이 부족합니다.")
        }
    }


    setEvent() {
        this.render();
        const products = document.querySelectorAll(".product")
        const insertMoney = this.getInsertMoney();
        const buyCallBack = this.buy()
        const failCallBack = this.fail()
        const walletModel = this.WalletModel;
        for (let i = 0; i < products.length; i++){
            let productModel = this.ProductModel
            products[i].addEventListener("click", function () {
                let price = Object.values(productModel.menu)[i]
                return (price <= insertMoney) ? buyCallBack(walletModel, price) : failCallBack()
            })
        }
    }

}

export { ProductView }