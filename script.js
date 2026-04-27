
const random_number = Math.floor(Math.random() * 21);

console.log(random_number);

let hint = document.querySelector('.hint')
let number_input = document.getElementById('field');
let button = document.querySelector('.btn');
button.addEventListener("click", () => {

    if (number_input.value < random_number) {
        hint.textContent = "higher";
    } else if (number_input.value > random_number) {
        hint.textContent = "lower";
    } else {
        hint.textContent = `congrats the number is ${random_number}`;
    }

})

