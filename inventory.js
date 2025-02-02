let fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'srawberry', 'kiwi', 'watermelon' , 'grapes', 'pineapple' , 'blueberries'];
let vegetables = ['carrot' , 'tomato' , 'pepper' , 'letuce' , 'cucumber' , 'brocolli' , 'onion' , 'garlic' , 'potato' ,'ginger'];
let fastFood = ['hamburger' , 'fries' , 'hotdog' , 'pizza'];

console.log(" === Inventory Management System === ");
console.log("---- Fruits ----");
for (let i=0; i < fruits.length; i++){
    let j= i+1
    console.log(' '+ j + '.'+fruits[i]); 
}
console.log("---------------------------");
console.log("-----------vegetables---------");
let n = 0;
while (n < vegetables.length){
    let m= n+1;
    console.log(' '+ m + '.'+vegetables[n]); 
    n++;
}
console.log('-------------------');
console.log("==============================");