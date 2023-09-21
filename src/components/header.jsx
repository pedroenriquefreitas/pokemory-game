function Header({score, highScore}) {

    return(
      <div className = "header" style={{ display: 'flex', flexDirection: 'row', margin: "15px", padding: '8vh 12vw 8vh 12vw', alignItems: 'center' }}>
        <div style={{display: 'flex', flex: '5', flexDirection: 'column'}}>
            <span style={{ fontSize: '40px', fontWeight: 'bolder' }}>POKEMORY GAME</span>
            <span>Make sure you don't click a pokemon twice</span>
        </div>
        <div style={{ display: 'flex', flex: '1', flexDirection: 'column'}}>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
      </div>
    );
}

export default Header;
