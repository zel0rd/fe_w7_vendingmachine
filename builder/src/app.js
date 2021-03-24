import { renderProduct } from "./productBox";
import { WalletView } from "./js/view/WalletView";
import { WalletModel} from "./js/model/WalletModel";

renderProduct();

// const myWallet = new WalletView;
// myWallet.setEvent();
// const myWallet2 = new WalletModel;
// myWallet2.decrement();

// myWallet.update(myWallet2)



// let sumBtn = document.querySelector(".money__sum");

// sumBtn.addEventListener("click" , function(){
//     console.log(myWallet2.wallet.myMoney)
// })

const model = new WalletModel;
const view = new WalletView;
view.render()

model.addObserver(view);


// let render = setTimeout(function tick() {
//     model.decrement()
//     render = setTimeout(tick, 1000);
// }, 0)