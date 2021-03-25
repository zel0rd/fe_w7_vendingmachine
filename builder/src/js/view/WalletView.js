import {$,$$} from "../util/util";
const moneyCountBox = $(".money__count__box");
const moneySumVal = $(".money__sum__val")

class WalletView {
    //WalletModel의 init data가져오기
    constructor (WalletModel) {
        this.WalletModel = WalletModel;
    }

    init() {
        this.render()
        this.setEvent();
    }
    //update
    update() {
        this.init()
    }

    getMyBudget() {
        let myMoney = this.WalletModel.wallet.myMoney;
        let myBudget = 0;
        for (const [key, value] of Object.entries(myMoney)) {
            myBudget += key * value
        }
        return myBudget;
    }

    //초기 money 개수 렌더링
    render() {
        let coins = Object.values(this.WalletModel.wallet.myMoney);
        let inp = coins.reduce((acc, cur) => {
            acc += `<div id=${cur} class="money__cnt h-1/6 py-4 my-3 min-w-150 border-4 border-dashed rounded-2xl border-yellow-200 border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${cur}</div>`;
            return acc;
        },"")
        moneyCountBox.innerHTML = inp;

        // mybudget 렌더링
        let myBudget = this.getMyBudget();
        moneySumVal.innerHTML = `${myBudget}원`
    }

    //money 개수 data 변경 시 렌더링 이벤트
    setEvent() {
        const moneyCountArr = document.querySelectorAll(".money__cnt");
        for (let i = 0; i < moneyCountArr.length; i++){
            let Walletdata = this.WalletModel;
            moneyCountArr[i].addEventListener("click", function () {
                Walletdata.insertCoin(Object.keys(Walletdata.wallet.myMoney)[i]);
            })
        }
    } 
}

export { WalletView };