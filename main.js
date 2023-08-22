const billInput = document.querySelector('#bill');
const numberPeopleInput = document.querySelector('#numeroPersonas');
const tipInput = document.querySelectorAll('.selectInput');
const custom = document.querySelector('.custom');
const resetBoton = document.querySelector('.botonReset');

const tipAmountOutput = document.querySelector('#tipAmountOutput');
const totalOutput = document.querySelector('#totalOutput');

const bordeError = document.querySelector('.cajaInputNumeroPersonas');
const error = document.querySelector('.error');

let bill;
let tipPerc = 0;
let numPeo;

billInput.addEventListener('input', ()=>{
    bill = parseInt(billInput.value);
    calcular();
});

tipInput.forEach(boton =>{
    boton.addEventListener('click', (e)=>{
        e.preventDefault();
        tipInput.forEach(boton =>{
            boton.classList.remove('selected');
            custom.classList.remove('selectedCustom');
        });
        boton.classList.add('selected');
        tipPerc = parseInt(boton.value);
        calcular(); 
    });
});
custom.addEventListener('input', ()=>{
    custom.classList.add('selectedCustom');
    tipPerc = parseInt(custom.value);
    calcular(); 
});

numberPeopleInput.addEventListener('input', ()=>{
    numPeo = parseInt(numberPeopleInput.value);
    calcular();
    errorCantidad();
});

function calcular() {
    if (bill !== undefined && tipPerc != undefined && numPeo !== undefined && numPeo !== 0) {
        let tipAmount = (bill*(tipPerc/100)) / numPeo;
        tipAmountOutput.value = '$' + tipAmount.toFixed(2);
    
        let total = (bill+(bill*(tipPerc/100)))/numPeo;
        totalOutput.value = '$' + total.toFixed(2);

        resetBoton.disabled = false;
    }
}

function errorCantidad(){
    if (numPeo === 0) {
        bordeError.classList.add('bordeError');
        error.classList.remove('noPuede');
    } else if (numPeo !== 0) {
        error.classList.add('noPuede');
        bordeError.classList.remove('bordeError');
    }
}

resetBoton.addEventListener('click', ()=>{
    billInput.value = undefined;
    numberPeopleInput.value = undefined;
    custom.value = undefined;
    bill = 0;
    tipPerc = 0;
    calcular();
    resetBoton.disabled = true;
});