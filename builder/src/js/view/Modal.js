import {$,$$} from "../util/util";

const openButton = $("#open")
const modal = $("#modal")
const overlay = modal.querySelector(".modal__overlay")
const closeBtn = modal.querySelector("button")

class Modal {
    setModal() { 
        openButton.addEventListener("click", function() {
            modal.classList.remove("hidden")
        })

        closeBtn.addEventListener("click", function() {
            modal.classList.add("hidden")
        })

        overlay.addEventListener("click", function() {
            modal.classList.add("hidden")
        })
    }

    // openModal = () => {
    //     modal.classList.remove("hidden")
    // }

    // closeModal = () => {
    //     modal.classList.add("hidden")
    // }
}
export { Modal }