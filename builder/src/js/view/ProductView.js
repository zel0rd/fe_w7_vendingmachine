import {$,$$} from "../util/util";
import { MENU } from "../data/menu"
import { MENUCOUNT } from "../data/menuCount"
import { WalletView } from "./WalletView";

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
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-8 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-green-100 hover:bg-yellow-200 shadow-md">${key}<br>${value} : ${MENUCOUNT[key]}</div>`;
            } else {
                // 비활성화 버튼 div class 추가
                inp+=`<div id=${key} class="product w-1/4 h-1/4 m-2 py-8 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${key}<br>${value} : ${MENUCOUNT[key]}</div>`;
            }
            
        }
        vendingBox.innerHTML=inp;
    }

    buy(walletModel,productModel, price, product){
        return function(walletModel,productModel, price, product){
            walletModel.buy(price, product)
            productModel.buy(product)
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