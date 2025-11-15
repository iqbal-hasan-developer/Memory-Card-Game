import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { useEffect, useState } from "react"
import { WinMessage } from "./components/WinMessage"


const cardValues = [
  "🍇",
  "🍇",
  "🍋",
  "🍋",
  "🍉",
  "🍉",
  "🍓",
  "🍓",
  "🍒",
  "🍒",
  "🍌",
  "🍌",
  "☘️",
  "☘️",
  "🍁",
  "🍁",
]

function App() {

  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)
  const [isLocked, setIsLocked] = useState(false)


  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i =shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const initializeGame = () => {
    // Shuffle cards
    const shuffled = shuffleArray(cardValues)

    const finalCards = shuffled.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ))
    setCards(finalCards)
    setIsLocked(false)
    setMoves(0)
    setScore(0)
    setFlippedCards([])
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleClick = (card) => {
    
    if (card.isFlipped || card.isMatched || isLocked) return;
  
    // Flip the clicked card
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);
  
    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);
  
    // Only proceed if two cards are flipped
    if (newFlippedCards.length === 1) return;
  
    // Compare two flipped cards
    if (newFlippedCards.length === 2) {
      setIsLocked(true);
      const firstCardId = newFlippedCards[0];
      const secondCardId = newFlippedCards[1];
  
      const firstCard = cards[firstCardId];
      const secondCard = card;
  
      // MATCHED
      if (firstCard.value === secondCard.value) {
        setTimeout(() => {
          setScore((prev) => prev + 1);
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCardId || c.id === secondCardId
                ? { ...c, isMatched: true }
                : c
            )
          );
  
          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } 
      
      //  NOT MATCHED
      else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlippedCards.includes(c.id)
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setIsLocked(false);
          setFlippedCards([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };
  
  const isGameComplete = cards.every(c => c.isMatched);

  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

        {isGameComplete && <WinMessage moves={moves} />}

        <div className="cards-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleClick} />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default App
