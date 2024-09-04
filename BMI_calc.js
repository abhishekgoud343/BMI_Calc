const submit_button = document.getElementById('submit');
submit_button.addEventListener('click', () => BMI_calculator());

const dispSpace = document.getElementById('disp');

function BMI_calculator() {
    const weight = document.getElementById('weight').value;
    if (weight <= 0) {
        alert('Weight should be positive');
        return;
    }
    const height = document.getElementById('height').value / 100;
    if (height <= 0) {
        alert('Height should be positive');
        return;
    }

    const BMI = Math.round((weight / Math.pow(height, 2) + Number.EPSILON) * 100) / 100;
    dispSpace.innerHTML = `Your BMI is <b>${BMI} kg/m<sup>2</sup></b>`;
}