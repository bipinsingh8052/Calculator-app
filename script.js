const button =document.querySelectorAll(".boxs");
const Ac=document.querySelector(".ac");
const de=document.querySelector(".de");
const dot=document.querySelector(".dot");
const divide=document.querySelector(".divide");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const nine=document.querySelector(".nine");
const star=document.querySelector(".star");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const six=document.querySelector(".six");
const sub=document.querySelector(".sub");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const add=document.querySelector(".add");
const twozero=document.querySelector(".twozero");
const equal=document.querySelector(".equal");
const zero=document.querySelector(".zero");

const input =document.querySelector(".outputbtn input");
// input.value.style.margin="5px";
// console.log("input");
// console.log(button);
// console.log(input);
// console.log(Ac,de,dot,divide,seven,eight,nine,star,four,five,six,sub,one,two,three,add,twozero,zero,equal);

Ac.addEventListener("click",()=>{
    console.log(Ac.innerText);
    var valuebtn =Ac.innerText;
    console.log(input.value);
    input.value = "";
})

de.addEventListener("click",()=>{
    console.log(de.innerText);
    var valuebtn =de.innerText;
    console.log(input.value);
    input.value=input.value.toString().slice(0,-1);
})

dot.addEventListener("click",()=>{
    console.log(dot.innerText);
    var valuebtn =dot.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

divide.addEventListener("click",()=>{
    console.log(divide.innerText);
    var valuebtn =divide.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

seven.addEventListener("click",()=>{
    console.log(seven.innerText);
    var valuebtn =seven.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

eight.addEventListener("click",()=>{
    console.log(eight.innerText);
    var valuebtn =eight.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

nine.addEventListener("click",()=>{
    console.log(nine.innerText);
    var valuebtn =nine.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

star.addEventListener("click",()=>{
    console.log(star.innerText);
    var valuebtn =star.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

four.addEventListener("click",()=>{
    console.log(four.innerText);
    var valuebtn =four.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

five.addEventListener("click",()=>{
    console.log(five.innerText);
    var valuebtn =five.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

six.addEventListener("click",()=>{
    console.log(six.innerText);
    var valuebtn =six.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

sub.addEventListener("click",()=>{
    console.log(sub.innerText);
    var valuebtn =sub.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

one.addEventListener("click",()=>{
    console.log(one.innerText);
    var valuebtn =one.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

two.addEventListener("click",()=>{
    console.log(two.innerText);
    var valuebtn =two.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

three.addEventListener("click",()=>{
    console.log(three.innerText);
    var valuebtn =three.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

add.addEventListener("click",()=>{
    console.log(add.innerText);
    var valuebtn =add.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

twozero.addEventListener("click",()=>{
    console.log(twozero.innerText);
    var valuebtn =twozero.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

zero.addEventListener("click",()=>{
    console.log(zero.innerText);
    var valuebtn =zero.innerText;
    console.log(input.value);
    input.value+=valuebtn
})

equal.addEventListener("click",()=>{
    console.log(equal.innerText);
    var valuebtn =equal.innerText;
    console.log(input.value);
    valuebtn=eval(input.value);
    const total =valuebtn;
    // if(input.value != total){
    //     alert("Your Calculator is not be Reading the Number")
        
    // }
    // else{
    //     input.value=valuebtn;
    // }
    input.value=valuebtn;
    
})
