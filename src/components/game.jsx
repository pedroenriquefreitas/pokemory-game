import Card from './card.jsx';

function Game(){

    function generateRandomNumbers() {
        const numbers = new Set();  // Using a Set ensures all numbers are unique.
      
        while (numbers.size < 8) {
          const randomNum = Math.floor(Math.random() * 1000) + 1;
          numbers.add(randomNum);
        }
      
        const [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8] = [...numbers];
        return {pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8};
      }
      
      const randomPokemonNumbers = generateRandomNumbers();
      console.log(randomPokemonNumbers);
      

    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Card
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonNumbers.pokemon1}.png`} 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png" 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png" 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png" 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png" 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" 
                name="Pikachu" 
            />
            <Card 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png" 
                name="Pikachu" 
            />
        </div>
    );
}

export default Game;