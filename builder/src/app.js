import { renderProduct } from "./productBox";
import { WalletView } from "./js/view/WalletView";
import { WalletModel} from "./js/model/WalletModel";


// import { renderMoneyBill,renderMoneyCount } from "./wallet";
renderProduct();
const myWallet = new WalletView;
// await myWallet.render();
myWallet.setEvent();
// renderMoneyBill();
// renderMoneyCount();


// import {WalletModel } from "./js/model/WalletModel.js"