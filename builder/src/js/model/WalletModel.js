import { $, $$ } from "../util/util";
const coinSET = [100,500,1000,5000,10000]
const messageBox = $(".screen__message")

class WalletModel {
    constructor() {
        //데이터정의
        this.wallet = {
            myMoney : { 100:1, 500:1,1000:3, 5000:5, 10000:7 },
            currentInsertMoney: 0
        }
        this.insert = {
            myInsert : { 100:0, 500:0,1000:0, 5000:0, 10000:0 },
        }
        //옵저버
        this.observers = [];
    }
    //합계를 화폐단위로 만들기
    TotalMoneyToCoin(sumMoney) {
        const tempInsert = {};
        for (let i = coinSET.length - 1; i >= 0; i--){
            let moc = parseInt(sumMoney / coinSET[i]);
            sumMoney = sumMoney % coinSET[i];
            tempInsert[coinSET[i]]=moc
        }
        return tempInsert;
    }

    getTotalMoney(inMyWallet) {
        let totalMoney=0;
        for (const [key, value] of Object.entries(inMyWallet))
        {
            totalMoney += key * value;
        }
        return totalMoney;
    }

    insertCoin(keys) {
        if (this.wallet.myMoney[keys] >= 1) {
            this.wallet.myMoney[keys] -= 1;
            this.insert.myInsert[keys] += 1;
            messageBox.innerHTML +=`<div class="bg-gradient-to-r from-red-100 to-red-400">${keys}원이 투입되었습니다</div>`
            this.notifyObservers();
        } else {
            console.log("동전의 잔액이 부족합니다");
        }
    }
    //반환
    getReturn() {
        let myMoney = this.wallet.myMoney;
        let myInsert = this.insert.myInsert;
        for (const [key, value] of Object.entries(myMoney)){
            myMoney[key] += myInsert[key]
        }
        this.insert.myInsert = { 100: 0, 500: 0, 1000: 0, 5000: 0, 10000: 0 };
        messageBox.innerHTML +=`<div class="bg-gradient-to-r from-green-100 to-green-400">투입금액 반환되었습니다</div>`
        this.notifyObservers();
    }
    
    buy(price, product){
        let inpMoney = this.getTotalMoney(this.insert.myInsert);
        let chargeMoney = inpMoney - price;
        this.insert.myInsert = this.TotalMoneyToCoin(chargeMoney);
        setTimeout(function(){
            messageBox.innerHTML +=`<div class="bg-gradient-to-r from-blue-100 to-blue-400">${product} 나왔습니다.</div>`
        }, 2000)
        this.notifyObservers();
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

export { WalletModel };