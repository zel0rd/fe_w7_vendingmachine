import {$,$$} from "../util/util";
const moneyCountBox = $(".money__count__box");

class WalletView {
    //WalletModel의 init data가져오기
    constructor (WalletModel) {
        this.WalletModel = WalletModel;
    }
    //update
    update() {
        this.setEvent();
    }
    //초기 money 개수 렌더링
    async render() {
        let coins = Object.values(this.WalletModel.wallet.myMoney);
        let inp = coins.reduce((acc, cur) => {
            acc += `<div id=${cur} class="money__cnt h-1/6 py-4 my-3 min-w-150 border-4 border-dashed rounded-2xl border-yellow-200 border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${cur}</div>`;
            return acc;
        },"")
        moneyCountBox.innerHTML = inp;
    }

    //money 개수 data 변경 시 렌더링 이벤트
    async setEvent() {
        this.render();
        const moneyCountArr = document.querySelectorAll(".money__cnt");
        for (let i = 0; i < moneyCountArr.length; i++){
            let Walletdata = this.WalletModel;
            moneyCountArr[i].addEventListener("click", function () {
                Walletdata.decrement(Object.keys(Walletdata.wallet.myMoney)[i]);

            })
        }
    } 
}

export { WalletView };