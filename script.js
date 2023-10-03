let firstOperand="";
let secondOperand="";
let currentOperator=null;




const numbers=document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const equalTo=document.querySelector(".equal");
const resetButton=document.querySelector(".reset");
const delButton=document.querySelector(".delete");
const currentOperation=document.querySelector(".current");
const previousOperation=document.querySelector(".previous");



numbers.forEach((number)=>{
    number.addEventListener("click",()=>appendNumber(number.textContent))
})

operators.forEach((operator)=>{
    operator.addEventListener("click",()=>appendOperator(operator.textContent))
    operator.addEventListener("click",()=>{
        seriesOperation(operator.textContent);
    })
})

equalTo.addEventListener("click",()=>{
    evaluate();
})

function appendNumber(number){
    
    currentOperation.textContent +=number;
    if(currentOperation.textContent.length>=19){
    currentOperation.textContent="Max Limit:19 Digits"

    }
}

delButton.addEventListener("click",()=>{
    del()
})

resetButton.addEventListener("click",()=>{
    reset()
})

function appendOperator(operator){
    if (currentOperation.textContent === "") return;
    currentOperator=operator
    firstOperand=currentOperation.textContent;
    previousOperation.textContent=`${currentOperation.textContent} ${currentOperator}`
    currentOperation.textContent=" "
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
       if(secondOperand=="0"){
        currentOperation.textContent="You cannot divide a number by 0"
        return;
    }
        else{
        currentOperation.textContent=Number(firstOperand)/Number(secondOperand);}
       break;
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
}


  