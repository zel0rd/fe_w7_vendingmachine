import {$,$$} from "./util.js";


const moneyBillBox = $(".money__bill__box");
const moneyCountBox = $(".money__count__box");

const renderMoneyBill = () => {
    const moneyBillArr = [100, 500, 1000, 5000, 10000];
    let inp="";
    moneyBillArr.map((v, i) => {
        inp+=`<div id=${v} class="money__bill h-1/6 py-4 my-3 min-w-150 border-4 border-dashed rounded-2xl border-yellow-200 border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${v}</div>`;
    })
    moneyBillBox.innerHTML=inp;
    
}
const renderMoneyCount = () => {
    let inp="";
    const moneyCountArr = [1, 2, 5, 10, 20];
    moneyCountArr.map((v, i) => {
        inp+=`<div id=${v} class="money__cnt h-1/6 py-4 my-3 min-w-150 border-4 border-dashed rounded-2xl border-yellow-200 border-yellow-200 bg-yellow-100 hover:bg-yellow-200 shadow-md">${v}</div>`;
    })
    moneyCountBox.innerHTML=inp;
    
}


export { renderMoneyBill,renderMoneyCount };