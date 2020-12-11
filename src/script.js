//track element
let generatorBtn = document.getElementById('gen-btn');
let copyBtn = document.getElementById('copy-btn');
let inputField = document.getElementById('hexa-code')
let body = document.querySelector('body');

//generatorBtn add event listener
generatorBtn.addEventListener('click',event=>{
    let colorCode = hexColorCodeGenerator();

    //Change Color
    body.style.backgroundColor = colorCode;
    
    //hover change color
    generatorBtn.onmouseover = blackColor;
    copyBtn.onmouseover = blackColor;

    generatorBtn.style.color = colorCode;
    copyBtn.style.color = colorCode;

    //moush leave color
    generatorBtn.onmouseleave = colorCodeBtn;
    copyBtn.onmouseleave = colorCodeBtn;

    //blackColor and colorCodeBtn
    function blackColor(event){
        event.target.style.color = 'black';
    }

    function colorCodeBtn(event){
        event.target.style.color = colorCode;
    }

    //change input value
    inputField.value = colorCode;
});

//copyBtn addEvenListener
copyBtn.addEventListener('click',event=>{
    inputField.select()
    document.execCommand('copy');
})

//hexColorCodeGenerator function
function hexColorCodeGenerator(){
    let hexColorCode = '#'
    for(let i = 0; i < 3;i++){
        hexColorCode += Math.floor(Math.random()*255+0).toString(16);
    }
    
    return hexColorCode;
}