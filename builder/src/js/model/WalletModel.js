// import { $, $$ } from "../util/util";

class WalletModel {
    constructor() {
        //데이터정의
        this.wallet = {
            myMoney : { 100:1, 500:1,1000:3, 5000:5, 10000:7 },
            currentInsertMoney: 0
        }
        //옵저버
        this.observers = [];
    }
    decrement(keys) {
        if (this.wallet.myMoney[keys] >= 1) {
            this.wallet.myMoney[keys] -= 1
            this.notifyObservers();
        } else {
            console.log("동전의 잔액이 부족합니다");
        }


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

    getTotalMoney() {
        let totalMoney=0;
        for (const [key, value] of Object.entries(this.wallet.myMoney))
        {
            totalMoney += key * value;
        }
        return totalMoney;
    }
}

export { WalletModel };