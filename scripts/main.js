const btnnumbers = document.getElementById("containerNumbers");
const btnOperations = document.getElementById("containerOperations");
const answer = document.getElementById("answer");
const btFloat = document.getElementById("float");
let boleanOperation=false;
let indicateOperation="";
let operation="";
let cantDeg=0;
btnnumbers.addEventListener('click',(e)=>{
    if(e.target && e.target.tagName==="BUTTON"){
        if(e.target.textContent==="." && cantDeg<2){
            btFloat.disabled=true;
        }
        if(e.target.textContent!="CE"){
            operation+= e.target.textContent;
            answer.innerText =operation;
        }
        if(e.target.textContent==="CE"){
            answer.innerText=0;
            Clear();
        }
    }
    
});
//revisar cuando el primer número sea negativo
btnOperations.addEventListener('click',(e)=>{
    let numbers;
    let res;
    if(e.target && e.target.tagName==="BUTTON" ){
        if(e.target.textContent!="=" && !boleanOperation && e.target.textContent!="-"){
            cantDeg++;
            indicateOperation=e.target.textContent;
            operation+= e.target.textContent;
            boleanOperation=true;
            answer.innerText =operation;
        }
        if(e.target.textContent==="-"){
            if(cantDeg<3){
                cantDeg++;
                operation+= e.target.textContent;
                console.log(cantDeg);
            }
            answer.innerText =operation;
        }
        if(e.target.textContent==="=" && indicateOperation!=""){           
            //console.log(operation.split(indicateOperation));
            if(  operation.includes(".")){
                numbers= toFloat(operation.split(indicateOperation));
            }
            else{
                numbers=toNumber(operation.split(indicateOperation));
                //console.log(numbers);
            }
            if(!Number(numbers[0]) || !Number(numbers[1])){
                answer.innerText=" Syntax Error ";
            }
            else{
                console.log(numbers);
                if(indicateOperation==="+"){
                    res=numbers[0]+numbers[1];
                    innerText(res);
                }
                //verificar los casos de resta
                if(indicateOperation===""){
                    res=numbers[0]-numbers[1];
                    innerText(res);
                }
                if(indicateOperation==="x"){
                    res=numbers[0]*numbers[1];
                    innerText(res);
                }
                if(indicateOperation==="/"){
                    res=numbers[0]/numbers[1];
                    innerText(res);
                }
            }
            Clear();
        }
        btFloat.disabled=false;
    }
});
function innerText(textContent){
    answer.innerText = textContent;
}


function toNumber(arrayNumbers){
    return arrayNumbers.map(number => {
        return parseInt(number);
    });
}
function toFloat(arrayNumbers){
    return arrayNumbers.map(number => {
        return parseFloat(number);
    });
}

function Clear(){
    boleanOperation=false;;
    operation="";
    cantDeg=0;
    indicateFloat=false;
    btFloat.disabled=false;
}