let factText = document.querySelector('#factsText')
let fact = document.querySelector('#fact')
let hide = document.querySelector('#hide')
let numberInput = document.querySelector('#numInput')
let numfact = document.querySelector('#numfact')
numberInput.addEventListener('input', getFactAJAX)

function getFactAJAX(){
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+ number);  
    xhr.onload = function(){
        if(this.status == 200 && number != ''){
            hide.style.display = 'block';
            factText.innerText = this.responseText;
           
        }

    }
    // console.log(number)
    xhr.send();
}