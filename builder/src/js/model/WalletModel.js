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
    decrement() {
        this.wallet.myMoney[10000] -= 1
        this.notifyObservers();
    }
    addObserver(o) {
        this.observers.push(o);
    }
    notifyObservers() {
        for (let o of this.observers) {
            o.update(this);
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