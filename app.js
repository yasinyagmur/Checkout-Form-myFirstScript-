//**********Counter********************/
let counter1 = 1;
let counter2 = 1;
let counter3 = 1;

//************Variables***************/
let price1 = Number(document.getElementsByClassName("current-price")[0].innerHTML)*counter1;
let price2 = Number(document.getElementsByClassName("current-price")[1].innerHTML)*counter2;
let price3 = Number(document.getElementsByClassName("current-price")[2].innerHTML)*counter3;
let shippingCost = Number(document.getElementsByClassName('shippingCost')[0].innerHTML);
let total = price1 + price2 +price3 + shippingCost ;
console.log(total)
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

//**************Onclick*********/

plus[0].addEventListener(`click`,()=>{
    value1[0].innerHTML = ++counter1;
    total += price1
    total1.innerHTML = total.toFixed(2)

});
minus[0].addEventListener(`click`,()=>{
    value1[0].innerHTML = --counter1;
    total -= price1
    total1.innerHTML = total.toFixed(2)

});




plus[1].addEventListener(`click`,()=>{
    value2[0].innerHTML = ++counter2;
    total += price2
    total1.innerHTML = total.toFixed(2)

});
minus[1].addEventListener(`click`,()=>{
    value2[0].innerHTML = --counter2;
    total -= price2
    total1.innerHTML = total.toFixed(2)

});



plus[2].addEventListener(`click`,()=>{
    value3[0].innerHTML = ++counter3;
    total += price3
    total1.innerHTML = total.toFixed(2)

});
minus[2].addEventListener(`click`,()=>{
    value3[0].innerHTML = --counter3;
    total -= price3
    total1.innerHTML = total.toFixed(2)

});

//***********Remove*************/
const remove1 = document.querySelector(`#remove1`);
const product1 = document.querySelector(`#product1`);

remove1.addEventListener('click',()=>{
    product1.style.display ='none';
    counter1 = 0
    total = total - price1;
    total1.innerHTML = total.toFixed(2)
})
const remove2 = document.querySelector(`#remove2`);
const product2= document.querySelector(`#product2`);

remove2.addEventListener('click',()=>{
    product2.style.display ='none';
    counter2 = 0
    total = total - price2;
    total1.innerHTML = total.toFixed(2)
})
const remove3 = document.querySelector(`#remove3`);
const product3 = document.querySelector(`#product3`);

remove3.addEventListener('click',()=>{
    product3.style.display ='none';
    counter3 = 0
    total = total - price3;
    total1.innerHTML = total.toFixed(2)
})