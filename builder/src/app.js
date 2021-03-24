import { renderProduct } from "./productBox";
import { WalletView } from "./js/view/WalletView";
import { WalletModel} from "./js/model/WalletModel";

renderProduct();

const model = new WalletModel;
const view = new WalletView(model);
view.update();

model.addObserver(view);
