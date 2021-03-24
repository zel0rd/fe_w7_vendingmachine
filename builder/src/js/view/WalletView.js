import {$,$$} from "../util/util";

const moneyBillBox = $(".money__bill__box");
const moneyCountBox = $(".money__count__box");
const moneyBillArr = [100, 500, 1000, 5000, 10000];
// const moneyCountArr = $$(".money__cnt");


class WalletView {
    constructor() {
    }
    async render() {
        let moneyCountInitArr = [1, 2, 5, 10, 20];
        let inp = moneyCountInitArr.reduce((acc, cur) => {
            acc += `<div id=${cur} class="money__cnt h-1/6 py-4 my-3 min-w-150 border-4 border-dashed rounded-2xl border-yellow-200 border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${cur}</div>`;
            return acc;
        },"")
        moneyCountBox.innerHTML = inp;
    }

    async setEvent() {
        await this.render();
        const moneyCountArr = $$(".money__cnt");

        for (var i of moneyCountArr) {
            i.addEventListener("click", function () {
                console.log(i);
            })
        }
        

    }
    

    


}

// const renderMoneyCount = () => {
// }


export { WalletView };