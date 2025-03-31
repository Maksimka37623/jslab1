//task 4
function calcTask4(x){
    return ((2*Math.pow(Math.sin, 2)*(x+2))/(Math.pow(x, 2)+1))
}
console.log("task 4.1(a)")
for(let x = 7.2; x<=12; x+=0.5){
    z = calcTask4(x);
    console.log(z);
}
console.log("task 4.1(b)")
x = 0;
for(let i = 0; i<5; i++){
    z = calcTask4(x);
    x += 0.1;
    console.log(z); 
}
//Task 5
function calcTask51(l){
    return Math.pow(-1,l)*(Math.pow(l,4)-2)/(Math.pow(l,2)+3)
}
console.log("Task 5.1(a)");
let S=0;
for(let l=2;l<=12;l++){
	S+=calcTask51(l);
}
console.log(S);
function calcTask52(l){
    return (5*Math.pow(l,2)-2*l+1)/(3*l+5)
}
console.log("Task 5.1(b)");
let i=3;
let k=6;
y=1;
for(let l=i;l<=k;l++){
	y*= calcTask52(l);
}
console.log(y); 
//task 7
function arrProduct(array){  
    let product=0;
    for(let i=0; i<B.length; i++){
        if(B[i] > 2.0){
            product *= array[i];
        }
    }


}
let B = [2.3,4.3,-15.2,1.1,-1.2,-3,3];
let result = arrProduct(B);
console.log(result);
// task
let apartment = [
    {
        ApartNumber:"58",
        HouseNumber:"15",
        Street:"Lesya Ukrainka",
        Owner:"billy herrington"
    },
    {
        ApartNumber:"100",
        HouseNumber:"60",
        Street:"Vasyl Stus",
        Owner:"Steve Jobs"
    },
    {
        ApartNumber:"7",
        HouseNumber:"2",
        Street:"B. Khmelnytskyi",
        Owner:"Marian Slabonyha"
    }
];
for (let i=0; i<apartment.length;i++){
	console.log(`${apartment[i].ApartNumber} ${apartment[i].HouseNumber} - ${apartment[i].Street} (${apartment[i].Owner})`)
}