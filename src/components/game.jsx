import React, { useState, useEffect, useRef } from 'react';
import Card from './card.jsx';
import WinModal from './winmodal.jsx';
import LoseModal from './losemodal.jsx';

function Game({ setScore, setHighScore, highScore }){

    const [pokemonNames, setPokemonNames] = useState([]);
  
    const [randomPokemonNumbers, setRandomPokemonNumbers] = useState(() => {
        const numbers = new Set();
        while (numbers.size < 8) {
          const randomNum = Math.floor(Math.random() * 250) + 1;
          numbers.add(randomNum);
        }
      
        return [...numbers];
      });
    
    const [showWinModal, setShowWinModal] = useState(false);
    const [showLoseModal, setShowLoseModal] = useState(false);

    const currentCount = useRef(0); //keeps track of the user's score

    const clickedPokemons = useRef([]); //keeps track of clicked pokemons

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    function increaseCount(pokemonNumber) {
        if (!clickedPokemons.current.includes(pokemonNumber)) { // pokemonNumber is not in the list, so push it
            clickedPokemons.current.push(pokemonNumber);
            currentCount.current += 1;
            setScore(currentCount.current);
            if (currentCount.current === 8) {
                setShowWinModal(true);
                clickedPokemons.current = [];
                if(currentCount.current > highScore) {setHighScore(currentCount.current)};
                currentCount.current = 0;
                setScore(0);
            }
        } else { // pokemonNumber is already in the list
            setShowLoseModal(true);
            clickedPokemons.current = [];
            if(currentCount.current > highScore) {setHighScore(currentCount.current)};
            currentCount.current = 0;
            setScore(0);
        }
        
        // Shuffle the cards
        const shuffledNumbers = [...randomPokemonNumbers];
        shuffleArray(shuffledNumbers);
        setRandomPokemonNumbers(shuffledNumbers);
    };
    
    
  
    useEffect(() => {
        async function fetchPokemonNames() {
          try {
              const urls = randomPokemonNumbers.map(number => 
                  `https://pokeapi.co/api/v2/pokemon-form/${number}/`
              );
  
              const promises = urls.map(url => fetch(url).then(response => {
                  if (!response.ok) throw new Error('Network response was not ok');
                  return response.json();
              }));
  
              const results = await Promise.all(promises);
              const names = results.map(result => result.name);
              
              setPokemonNames(names);
          } catch (error) {
              console.error('There was an error fetching the data:', error);
          }
        }
  
        fetchPokemonNames();
    }, [randomPokemonNumbers]);
      

    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {pokemonNames.map((name, index) => (
                <Card
                    onClick={() => increaseCount(randomPokemonNumbers[index])}
                    key={randomPokemonNumbers[index]}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonNumbers[index]}.png`} 
                    name={name}
                    />
                ))}
            <WinModal show={showWinModal} onClose={() => setShowWinModal(false)} />
            <LoseModal show={showLoseModal} onClose={() => setShowLoseModal(false)} />
        </div>
    );
}

export default Game;