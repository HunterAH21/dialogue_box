const validFruits = ["apple", "orange", "mango", "banana", "gova", "pineapple", "peach", "pomegranate", "gooseberry", "strawberry"];
const input = document.getElementById('fruit-input');
const container = document.getElementById('body');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    const inputValue = input.value.toLowerCase().trim();
    if (validFruits.includes(inputValue)) {
        container.style.backgroundColor = 'green';
    } else {
        container.style.backgroundColor = 'red';
    }
});

document.getElementById('decline-button').addEventListener('click', () => {
    input.value = '';
    container.style.backgroundColor = '#ffd384'; 
});
