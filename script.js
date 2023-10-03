let firstOperand="";
let secondOperand="";
let currentOperator=null;
let value=0;




const numbers=document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const equalTo=document.querySelector(".equal");
const resetButton=document.querySelector(".reset");
const delButton=document.querySelector(".delete");
const currentOperation=document.querySelector(".current");
const previousOperation=document.querySelector(".previous");
const decimal=document.querySelector(".decimal")


decimal.addEventListener("click",()=>appendNumber(decimal.textContent))

numbers.forEach((number)=>{
    number.addEventListener("click",()=>appendNumber(number.textContent))
})

operators.forEach((operator)=>{
    operator.addEventListener("click",()=>appendOperator(operator.textContent))
    
})

equalTo.addEventListener("click",()=>{
    evaluate();
})

function appendNumber(number){
    if(number==="." && currentOperation.textContent.includes(".")) return;
    currentOperation.textContent+=number;
    if(currentOperation.textContent.length>=19){
    currentOperation.textContent="Max Limit:19 Digits"}
 }

delButton.addEventListener("click",()=>{
    del()
})

resetButton.addEventListener("click",()=>{
    reset()
})

function appendOperator(operator){
    if (currentOperation.textContent === "") return;
    if(previousOperation.textContent!=="" && !previousOperation.textContent.includes("=")){
        compute(operator)
    }
    else{previousOperation.textContent===""
    currentOperator=operator
    firstOperand=currentOperation.textContent;
    previousOperation.textContent=`${currentOperation.textContent} ${currentOperator}`
    currentOperation.textContent=""}
}
function evaluate(){
    if(!previousOperation.textContent.trim()){
        currentOperation.textContent="Error"
        return;
    }
    
    secondOperand=currentOperation.textContent
    
    previousOperation.textContent=`${firstOperand} ${currentOperator} ${secondOperand} ${"="}`
    
    
    switch(currentOperator){
       case"+":
        currentOperation.textContent=Number(firstOperand)+Number(secondOperand);
       break;
       case"-":
        currentOperation.textContent=Number(firstOperand)-Number(secondOperand);
       break;
       case"*":
       currentOperation.textContent=Number(firstOperand)*Number(secondOperand);
       break;
       case"/":
       if(currentOperation.textContent==="0"){
        currentOperation.textContent="division by 0 = impossible"
        }
        else{
        currentOperation.textContent=Number(firstOperand)/Number(secondOperand);}
       break;
    }

    if(currentOperation.textContent.includes(".")){
      currentOperation.textContent=Number(currentOperation.textContent).toFixed(2)
    }
}

function del(){
    let arr=currentOperation.textContent.split("");
    arr.pop();
    currentOperation.textContent=arr.join("")
}

function reset(){
    currentOperation.textContent=""
    previousOperation.textContent=""
    currentOperator=null
    firstOperand=""
    secondOperand=""
    
}

function compute(op){
    firstOperand;
    currentOperator;
    secondOperand=currentOperation.textContent
    switch(currentOperator){
        case"+":
         value=Number(firstOperand)+Number(secondOperand);
        break;
        case"-":
         value=Number(firstOperand)-Number(secondOperand);
        break;
        case"*":
        value=Number(firstOperand)*Number(secondOperand);
        break;
        case"/":
        if(currentOperation.textContent==="0"){
         
         alert("Naughty hora bkl")
         throw Error;
         }
         else{
         value=Number(firstOperand)/Number(secondOperand);}
        break;
     }
     newValue=value.toString()
     previousOperation.textContent=`${newValue} ${op}`
     currentOperation.textContent=""
     currentOperator=op
     firstOperand=newValue
     
}

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        appendNumber("1"); 
    }
    else if (event.key === "2") {
        appendNumber("2"); 
    }
    else if (event.key === "3") {
        appendNumber("3"); 
    }
    else if (event.key === "4") {
        appendNumber("4"); 
    }
    else if (event.key === "5") {
        appendNumber("5"); 
    }
    else if (event.key === "6") {
        appendNumber("6"); 
    }
    else if (event.key === "7") {
        appendNumber("7"); 
    }
    else if (event.key === "8") {
        appendNumber("8"); 
    }
    else if (event.key === "9") {
        appendNumber("9"); 
    }
    else if (event.key === "0") {
        appendNumber("0"); 
    }
    else if (event.key === "+") {
        appendOperator("+"); 
    }
    else if (event.key === "-") {
        appendOperator("-"); 
    }
    else if (event.key === "*") {
        appendOperator("*"); 
    }
    else if (event.key === "/") {
        appendOperator("/"); 
    }
    else if (event.key === "Backspace" || event.key === "Delete") {
        del(); 
    }
    else if (event.key === ".") {
        appendNumber("."); 
    }
    else if (event.key === "Enter" || event.key === "Return") {
        evaluate(); 
    }
});