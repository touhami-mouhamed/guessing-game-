
let random_number = Math.floor(Math.random() * 21);

console.log(random_number);

let hint = document.querySelector('.hint')
let number_input = document.getElementById('field');
let button = document.querySelector('.btn');
let current_score = 20;
let highest_score = 0;
let score_text = document.getElementById('score');
let highest_text = document.getElementById('highest');
score_text.innerHTML = ` ${current_score}`
highest_text.innerHTML = `${highest_score}`


button.addEventListener("click", () => {
    let guess = Number(number_input.value);
    if (guess < random_number) {
        hint.textContent = "higher";
        current_score--;
        score_text.innerHTML = ` ${current_score}`


    } else if (guess > random_number) {

        hint.textContent = "lower";
        current_score--;
        score_text.innerHTML = ` ${current_score}`
    } else {
        highest_score = Math.max(highest_score, current_score);
        hint.textContent = `congrats the number is ${random_number}`;
        highest_text.innerHTML = `${highest_score}`

    }
    if (current_score <= 0) {
        hint.textContent = "YOU LOSE Try Again";
        button.disabled = true;
    }
})


let reset = document.getElementById('reset');

reset.addEventListener("click", () => {
    random_number = Math.floor(Math.random() * 21);
    console.log(random_number);
    hint.textContent = "start guessing ...";
    current_score = 20;
    score_text.innerHTML = ` ${current_score}`
    button.disabled = false;
    number_input.value = ""
})

