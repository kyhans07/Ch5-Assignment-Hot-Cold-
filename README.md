📝 Number Guessing Game: Thermal Edition
A dynamic, web-based guessing game where the player tries to find a hidden number between 1 and 100. The game provides real-time "thermal" feedback (Hot, Warm, Cold) based on how close the guess is to the target.

🚀 How It Works
Start: The game generates a random integer between 1 and 100.

Input: The user enters a guess into the input field and either clicks Guess or presses the Enter key.

Feedback: The program calculates the absolute distance from the target:

Hot (≤ 5): You're extremely close!

Warm (≤ 20): You're in the neighborhood.

Cold (> 30): You're quite far away.

History: Every guess is logged in a history list below the game.

Best Score: The game tracks your fewest number of tries across sessions and updates your "Best Score" dynamically.

Plain text output:

> New Game Started. Target: 42
> User Guess: 50
> Distance: 8 (Math.abs(50 - 42))
> Case: distance <= 10 (True)
> Result: "Warmer" | Color: "orangered"

🛠️ Key Technical Concepts
This project implements several intermediate JavaScript and DOM manipulation concepts:

switch(true) Pattern: Used to evaluate boolean ranges (e.g., distance <= 10) rather than exact matches.

DOM Event Listeners: Implemented click for buttons and keydown for the Enter key to improve UX.

Template Literals: Used backticks (`) to dynamically inject variables into strings for the history log.

State Management: Global variables track tries, randomNum, and bestScore across multiple rounds.

Input UX: Utilized .focus() and .select() to ensure the user can type consecutive guesses without using a mouse.

👤 Author
Kyler Hanson 
GitHub: https://github.com/kyhans07
