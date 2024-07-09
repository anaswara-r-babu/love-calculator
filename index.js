const yourName=document.getElementById('your_name');
const crushName=document.getElementById('crush_name');
// const calcBtn=document.getElementById('submit');

var n=Math.random();
n=n*100;
n=Math.floor(n)+1;

function textChange() {
    const btn = document.querySelector('button');
    const resultDisp=document.getElementById('result');
    var name1=yourName.value;
    var name2=crushName.value;
   
    // resultDisp.classList.add('changedTextprop');
    // document.querySelector('.result').classList.add('changedTextprop');
    if(n>=70){
        // let labelElement = document.getElementById("result");
        // labelElement.innerHTML = ` ${n} ${yourName} ❤️ ${crushName} love eachother so much`;
        
        resultDisp.innerHTML = `${name1} ❤️ ${name2} Your match is ${n} You love each other so much`;
    }
    else if(n>40 && n<70){
        resultDisp.innerText = `${name1} ❤️ ${name2} Your match is ${n} You are fine...But need more love`;
    }
    else if(n<40){
        resultDisp.innerText = `${name1} ❤️ ${name2} Your match is ${n} You have to love each other more and more`;
    }
    //empty input fields

    // if (yourName.value.trim() === '') {
    //     resultDisp.innerText =(input, `${getFieldName(input)} is required`);
    //   } 
    // else if(crushName.value.trim() === '') {
    //     resultDisp.innerText =(input, `${getFieldName(input)} is required`);
    //   } 
}
// function getFieldName(input) {
//     return input.id();
//   }  


