// TODO: this file! :)
let numbers = [];
let odds = [];
let evens = [];

const form = document.querySelector('form');
const numberBank = document.querySelector('#numberBank output')
const input = document.querySelector('#number');
const sortOne = document.querySelector('#sortOne');
const sortAll = document.querySelector('#sortAll');
const sortedOdds = document.querySelector('#odds output');
const sortedEvens = document.querySelector('#evens output');


// When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
form.addEventListener('submit', addNumber);
sortOne.addEventListener('click', singleSort);
sortAll.addEventListener('click', allSort);

function addNumber (event) {
    event.preventDefault();
    // The number bank is not changed if the user enters a non-numeric value.
    if(input.value != 0){
        const number = input.value * 1;
        numbers.push(number);
        input.value = null;
        console.log(numbers);
    } 
    render();
}

// The number bank should display all the numbers the user has entered.
function render() {
    renderArray(numberBank, numbers);

    renderArray(sortedOdds, odds);

    renderArray(sortedEvens, evens);
   
}
// When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
function singleSort(){
    if(numbers.length > 0){
        let number = numbers.shift();
        if(number % 2 == 1){
            odds.push(number);
        } else {
            evens.push(number);
        }
        render();
        console.log("evens: ", evens);
        console.log("odds: ", odds)
        console.log("numbers: ", numbers)
    }
}
function renderArray(output, array) {
    let span = document.createElement('span')
    let text = "";

    output.innerHTML = "";
    array.forEach((number) => {
        text += number + " ";
    });
    span.innerText = text;
    output.append(span);
}

// When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
function allSort(){
    odds = odds.concat(numbers.filter(number => number % 2 == 1));
    evens = evens.concat(numbers.filter(number => number % 2 == 0));
    numbers = [];
    render();
}
