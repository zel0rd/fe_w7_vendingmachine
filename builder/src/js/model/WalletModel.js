// import { $, $$ } from "../util/util";
const coinSET = [100,500,1000,5000,10000]

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
    buy(price){
        console.log(this.insert)
        console.log(price)
        

        // 투입 금액 총계 계산 후       // { 100:0, 500:0,1000:1, 5000:0, 10000:0 },
        // 총계 - price = 거스름 돈     // 1000 - 500 = 500(거스름 돈)
        // 거스름 돈 to coins           // 거스름돈을 coin 타입으로 { 100:0, 500:1,1000:0, 5000:0, 10000:0 },
        // this.insert = 거스름 돈      // 자판기에 들어잇는 돈인 insertMoney를 거스름돈으로 바꿔줌
    }

    insertCoin(keys) {
        if (this.wallet.myMoney[keys] >= 1) {
            this.wallet.myMoney[keys] -= 1;
            this.insert.myInsert[keys] += 1;
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