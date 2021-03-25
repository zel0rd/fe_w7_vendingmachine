import { renderProduct } from "./productBox";
import { WalletModel} from "./js/model/WalletModel";
import { WalletView } from "./js/view/WalletView";
import { ScreenView } from "./js/view/ScreenView";

renderProduct();

const model = new WalletModel;
const view = new WalletView(model);
const screenView = new ScreenView(model);

view.update();
screenView.update();
model.addObserver(view);
model.addObserver(screenView);
