import { $, $$ } from "../../util"; //이런식으로

class WalletModel {
    constructor() {
        //데이터정의
        this.wallet = {
            myMoney : { 100:1, 500:1,1000:3, 5000:5, 10000:7 },
            currentInsertMoney: 0
        }
        l
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
myWallet = new WalletModel();
console.log(myWallet.wallet)
console.log("aa?",myWallet.getTotalMoney())