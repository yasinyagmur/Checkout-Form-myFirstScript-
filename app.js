//**********Counter */
let counter1 = 1;
let counter2 = 1;
let counter3 = 1;

//********Variables */
let price1 = Number(document.getElementsByClassName("current-price")[0].innerHTML);
let price2 = Number(document.getElementsByClassName("current-price")[1].innerHTML);
let price3 = Number(document.getElementsByClassName("current-price")[2].innerHTML);
let shippingCost = Number(document.getElementsByClassName('shippingCost')[0].innerHTML);
let total = price1 + price2 +price3 + shippingCost ;
// console.log(total)
let total1 = document.querySelector('.total1')


const plus = document.querySelectorAll(".plus");
// console.log(plus)
const minus = document.querySelectorAll(".minus");
// console.log(minus)
const value1 = document.querySelectorAll(".value1");
// console.log(value1)
const value2 = document.querySelectorAll(".value2");
const value3 = document.querySelectorAll(".value3");
// console.log(value3)

//*** Onclick */

plus[0].addEventListener(`click`,()=>{
    value1[0].innerHTML = ++counter1;
    total += price1
    total1.innerHTML = total.toFixed(3)

});
minus[0].addEventListener(`click`,()=>{
    value1[0].innerHTML = --counter1;
    total -= price1
    total1.innerHTML = total.toFixed(3)

});




plus[1].addEventListener(`click`,()=>{
    value2[0].innerHTML = ++counter2;
    total += price2
    total1.innerHTML = total.toFixed(3)

});
minus[1].addEventListener(`click`,()=>{
    value2[0].innerHTML = --counter2;
    total -= price2
    total1.innerHTML = total.toFixed(3)

});



plus[2].addEventListener(`click`,()=>{
    value3[0].innerHTML = ++counter3;
    total += price3
    total1.innerHTML = total.toFixed(3)

});
minus[2].addEventListener(`click`,()=>{
    value3[0].innerHTML = --counter3;
    total -= price3
    total1.innerHTML = total.toFixed(3)

});