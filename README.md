# Guess Number Game

A simple number guessing game built with HTML, CSS, and JavaScript.  
The player must guess a randomly generated number between 0 and 20.

---

## Preview

<p align="center">
  <img width="613" height="601" src="https://github.com/user-attachments/assets/ab2e00cc-264c-45b7-9915-de433ac39e9c" />
  <img width="613" height="601" src="https://github.com/user-attachments/assets/a95d52b3-d908-4a0f-b470-26e38de8bc1d" />
  <img width="613" height="611" src="https://github.com/user-attachments/assets/72d8fe10-a506-46b2-ab79-3c738c9294f0" />
</p>

---

## How It Works

- The game generates a random number between 0 and 20
- The player enters a guess
- The game gives hints:
  - "higher" if the guess is too low
  - "lower" if the guess is too high
- The score starts from 20 and decreases on wrong guesses
- The game ends when the score reaches 0 or the correct number is guessed

---

## Features

### Gameplay Improvements
- Converted input value to number for correct comparisons ` Number(input.value) ` 
- Real-time hint system (higher / lower)
- Win condition detection
- Lose condition when score reaches 0

### Scoring System
- Starting score: 20
- Score decreases on every wrong guess
- High score tracking system
- High score updates only when player wins

### Reset System
- Generates a new random number
- Resets score back to 20
- Clears input field
- Re-enables the play button
- Resets hint message

### UI Updates
- Real-time score display
- High score display
- Dynamic hint messages
- Disabled state when game is lost

---

## Game States

### Playing
- User is guessing numbers
- Score decreases with wrong guesses

### Win
- Correct number is guessed
- High score is updated if needed

### Lose
- Score reaches 0
- Button is disabled until reset

---

## UI After Update
<p align="center">
<img width="595" height="596" alt="image" src="https://github.com/user-attachments/assets/cc18aec2-02ea-48a2-b4b5-7e9f28cd5c26" />
</p>

---

## How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Start guessing the number

---

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
