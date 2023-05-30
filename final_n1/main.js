const billInput = document.querySelector('#bill');
const numberPeopleInput = document.querySelector('#numeroPersonas');

const tipInput = document.querySelectorAll('.selectInput');

const tipAmountOutput = document.querySelector('#tipAmountOutput');
const totalOutput = document.querySelector('#totalOutput');

const bordeError = document.querySelector('.cajaInputNumeroPersonas');

const error = document.querySelector('.error');
error.style.visibility = 'hidden';
const resetBoton = document.querySelector('.botonReset');
resetBoton.disabled = true;
const tipInputArray = [...tipInput]

billInput.addEventListener('input' , calculos);
numberPeopleInput.addEventListener('input' , calculos);

tipInputArray.forEach(boton => {
    // console.log(boton.localName)
    if (boton.localName == 'button') {
        boton.addEventListener('click' , calculos)
    } else {
        boton.addEventListener('input' , calculos)
    }
});

function calculos(e) {
    e.preventDefault();
    // const tip = e.target.value;
    const bill = parseFloat(billInput.value);
    let tip;
    if (e.target.className == 'tipBoton selectInput' || e.target.className == 'tipInput selectInput') {
        tip = parseFloat(e.target.value);
    }

    const numberPeople = parseInt(numberPeopleInput.value);

    // console.log(bill)
    // console.log(tip)
    // console.log(numberPeople)
    // console.log(e.target.className)

    let tipAmount = (bill*(tip/100)) / numberPeople
    tipAmountOutput.value = '$' + tipAmount.toFixed(2)

    let total = (bill+(bill*(tip/100)))/numberPeople
    totalOutput.value = '$' + total.toFixed(2)

    if ((tipAmountOutput.value === '$' + NaN && totalOutput.value === '$' + NaN)) {
        tipAmountOutput.value = '$0.00'
        totalOutput.value = '$0.00'
        resetBoton.disabled = true;
        resetBoton.className = 'botonReset';
    }else{
        resetBoton.disabled = false;
        resetBoton.className = 'on';
    }

    if (numberPeople === 0) {
        error.style.visibility = 'visible';
        bordeError.className = 'bordeError';
    }else{
        error.style.visibility = 'hidden';
        bordeError.className = 'cajaInputNumeroPersonas';
    }
}

resetBoton.addEventListener('click', (e) => {
    billInput.value = '';
    numberPeopleInput.value = '';
    tipAmountOutput.value = '';
    totalOutput.value = '';
    tipInput[5].value = '';
    resetBoton.disabled = true;
    resetBoton.className = 'botonReset';
});
