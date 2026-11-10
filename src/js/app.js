import { trainingData } from './data.js';
import { predictPrice } from './model.js';

const form = document.getElementById('prediction-form');
const resultDisplay = document.getElementById('result-display');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const sqm = parseFloat(document.getElementById('sqm').value);
    const rooms = parseFloat(document.getElementById('rooms').value);

    // Run prediction model
    const estimatedPrice = predictPrice({ sqm, rooms }, trainingData, 3);

    // Update UI
    resultDisplay.textContent = `$${estimatedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
});