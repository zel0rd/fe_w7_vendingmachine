import {$,$$} from "../util/util";
const insertMoney = $(".ending__money-inp")
const returnBtn = $(".screen__btn");
class ScreenView {
    constructor (WalletModel) {
        this.WalletModel = WalletModel;
    }
    init() {
        this.setEvent();
        this.render();
    }

    update() {
        this.render();
    }

    getInsertTotal(){
        let myInsert = this.WalletModel.insert.myInsert;
        let insertTotal = 0;
        for (const [key, value] of Object.entries(myInsert)) {
            insertTotal += key * value
        }
        return insertTotal;
    }

    render(){
        let insertTotal = this.getInsertTotal();
        insertMoney.innerHTML = `${insertTotal}원`
    }
    //반환
    getReturn(walletModel) {
        return function (walletModel) {
            walletModel.getReturn();
        }
        
    }
    //반환
    setEvent() {
        const returnCallBack = this.getReturn();
        const walletModel = this.WalletModel;

        returnBtn.addEventListener('click', () => {
            return returnCallBack(walletModel);
        })

    }
    
  
}

export {ScreenView}