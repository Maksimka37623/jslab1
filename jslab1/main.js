//task 1
let x = 17;
let y = 22;
let z = 20;
let result = ((x <= 15) && (15 <= y) &&(y < z));
console.log(result);
//task 2
let omega = 2.77;
y = omega*Math.pow(x, -3.1) + Math.pow(Math.exp, omega*z);
x = Math.tan(z/omega) + (1/Math.tan(Math.sqrt(z)));
z = Math.cbrt(Math.log(omega)+ Math.log(Math.pow(omega,2))); 
console.log("Result is: "+y);
//task 3
x = 1;
y = null;
if(x > 2*z && Math.abs(z)>1){
    Math.log(Math.abs(x-z));
}
else if(Math.abs(z)> 0 && 1 > Math.abs(z)){
    Math.pow(Math.log10, 2)* Math.abs(x/z-1);
    }
else if(z<=x && Math.abs(z) > 1){
    Math.pow(Math.tan, 3)* (x+z);
}
else if(x<=z && Math.abs(z)<1){
    5.6*Math.pow(10, -3);
}
if (y===null){
	console.log('Wrong input');
} else{
	console.log(y);
}
//task 4
console.log("task 4.1(a)")
for(let x = 7.2; x<=12; x+=0.5){
    z = (2*Math.pow(Math.sin, 2)*(x+2))/(Math.pow(x, 2)+1);
    console.log(z);
}
console.log("task 4.1(b)")
x = 0;
for(let i = 0; i<5; i++){
    z = (2*Math.pow(Math.sin, 2)*(x+2))/(Math.pow(x, 2)+1);
    x += 0.1;
    console.log(z); 
}
//Task 5
console.log("Task 5.1(a)");
let S=0;
for(let l=2;l<=12;l++){
	S+=Math.pow(-1,l)*(Math.pow(l,4)-2)/(Math.pow(l,2)+3)
}
console.log(S);
console.log("Task 5.1(b)");
let i=3;
let k=6;
y=1;
for(let l=i;l<=k;l++){
	y*=(5*Math.pow(l,2)-2*l+1)/(3*l+5)
}
console.log(y); 