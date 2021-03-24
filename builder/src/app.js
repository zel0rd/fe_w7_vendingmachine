import { renderProduct } from "./productBox";
import { WalletView } from "./js/view/WalletView";
import { WalletModel} from "./js/model/WalletModel";

renderProduct();

const myWallet = new WalletView;
myWallet.setEvent();
const myWallet2 = new WalletModel;
myWallet2.decrement();
console.log(myWallet2);


myWallet2.addObserver(myWallet2);
