import {$,$$} from "../util/util";
const insertMoney = $(".ending__money-inp")

class ScreenView {
    constructor (WalletModel) {
        this.WalletModel = WalletModel;
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

}

export {ScreenView}