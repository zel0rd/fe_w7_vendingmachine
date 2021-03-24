import {$,$$} from "../util/util";

const moneyCountBox = $(".money__count__box");


class WalletView {
    //WalletModel의 init data가져오기
    constructor() {
    }
    //update
    update() {
        const tencount = $("#10");


    }
    //초기 money 개수 렌더링
    async render() {
        let moneyCountInitArr = [1, 2, 5, 10, 20];
        let inp = moneyCountInitArr.reduce((acc, cur) => {
            acc += `<div id=${cur} class="money__cnt h-1/6 py-4 my-3 min-w-150 border-4 border-dashed rounded-2xl border-yellow-200 border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${cur}</div>`;
            return acc;
        },"")
        moneyCountBox.innerHTML = inp;
    }

    //moeny 개수 data 변경 시 렌더링 이벤트
    async setEvent() {
        await this.render();
        // const moneyCountArr = $$(".money__cnt");
        const moneyCountArr = document.querySelectorAll(".money__cnt");

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