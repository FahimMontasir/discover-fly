getInputResult('btn-firstClass-plus', 'input-firstClass', true);
getInputResult('btn-firstClass-minus', 'input-firstClass', false);
getInputResult('btn-economyClass-plus', 'input-economyClass', true);
getInputResult('btn-economyClass-minus', 'input-economyClass', false);




function getInputResult(button, input, isIncrease) {
    document.getElementById(button).addEventListener('click', function () {
        const inputValue = parseInt(document.getElementById(input).value);
        if (isIncrease == true) {
            const increaseValue = inputValue + 1;
            document.getElementById(input).value = increaseValue;
        }
        else if (isIncrease == false && inputValue > 0) {
            const decreaseValue = inputValue - 1;
            document.getElementById(input).value = decreaseValue;
        }
        getCalculation();
    })
}
function getCalculation() {
    const first = document.getElementById('input-firstClass').value;
    const firstClass = first *150;
    const economy = document.getElementById('input-economyClass').value;
    const economyClass = economy *100;
    const subtotal = firstClass + economyClass;
    const vat = subtotal * .10;
    const total = subtotal + vat;
    document.getElementById('subtotal').innerText= subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText= total;
}