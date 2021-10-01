
import { Modal } from "./js/view/Modal"
import { WalletModel } from "./js/model/WalletModel";
import { ProductModel } from "./js/model/ProductModel";
import { WalletView } from "./js/view/WalletView";
import { ScreenView } from "./js/view/ScreenView";
import { ProductView } from "./js/view/ProductView"

const modal = new Modal;
const walletModel = new WalletModel;
const productModel = new ProductModel;

const walletView = new WalletView(walletModel);
const screenView = new ScreenView(walletModel);
const productView = new ProductView(walletModel, productModel);

modal.setModal();

walletView.init();
screenView.init();
productView.init();

walletModel.addObserver(walletView);
walletModel.addObserver(screenView);
walletModel.addObserver(productView);
productModel.addObserver(productView);



