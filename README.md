🎴 Memory Match Game

A fun and interactive React + Tailwind CSS Memory Card Game where players flip cards to find matching pairs. This project helped me strengthen my understanding of state management, component structure, event handling, and game logic in React.

🚀 Live Demo

https://matchcardsapp.netlify.app/

📌 Features

🔄 Card Flip Animation – Click any card to flip it.

🎯 Match Detection – Correct matches stay flipped; incorrect ones flip back.

🧠 Score & Move Tracking – Counts how many matches and moves you make.

🔐 Game Locking System – Prevents flipping more than 2 cards at a time.

🗂 Card Shuffle Logic – Cards shuffle on every new game.

🏆 Win Message – Shows a victory message when all pairs are matched.

💾 Clean Component Structure – Split into Card, GameHeader, and WinMessage components.

🎨 Styled with Tailwind CSS – Fully responsive and clean UI.

🛠️ Tech Stack

React.js

Tailwind CSS

JavaScript (ES6+)

🧩 What I Learned

Building this project improved my understanding of:

Managing multiple states (cards, flippedCards, isLocked, moves, score)

Updating nested objects inside arrays using React state

Writing clean game logic for matching pairs

Preventing unwanted clicks with a lock state

Structuring a small React project

Using Tailwind CSS for fast styling

This project boosted my confidence in handling interactive components and real-world logic inside React.

📸 Screenshots

![alt text](<memory card.jpg>)

▶️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/memory-match-game.git

2. Install Dependencies
npm install

3. Run the App
npm run dev

📁 Folder Structure
src/
│── components/
│     ├── Card.jsx
│     ├── GameHeader.jsx
│     └── WinMessage.jsx
│
│── App.jsx
│── index.css
│── main.jsx

🔄 Resetting the Game

Click the Reset button in the header to reshuffle cards, reset score, and start fresh.

💡 Future Improvements

Add animations for flips & matches

Add difficulty levels

Add timer & leaderboard

Add sound effects

⭐ Feedback

If you like this project, consider giving it a ⭐ on GitHub!