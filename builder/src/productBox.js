import {$,$$} from "./util.js";

const productBox = $(".vending__box");
const renderProduct=()=> {
    const productArr = ["에끌레어","몽블랑","밀푀유","수플레","크림브륄레","크레페","타르트","파르페","그라니타","푸딩","스콘","마라탕"]
    let inp="";
    productArr.map((v, i) => {
        inp+=`<div id=${v} class="product w-1/4 h-1/4 m-2 py-8 min-w-100 border-4 border-dashed rounded-2xl border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${v}</div>`;
    })
    productBox.innerHTML=inp;

}

export { renderProduct };