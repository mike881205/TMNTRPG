import { React, useState, useEffect } from "react";
import './App.css';
import CharactersArr from "./constants/charactersArr";
import CharacterSelect from "./components/CharacterSelect";
import BattleStage from "./components/BattleStage";

const App = () => {

  const [gameState, setGameState] = useState("character_select");
  const [characters, setCharacters] = useState(null);
  const [party, setParty] = useState(null);
  const [inventory, setInventory] = useState(null);

  const addToParty = id => {
    const P = [...party];
    const character = {...characters[id]};
    const newCharArr = characters.filter((C, i) => {
      return i !== id;
    });

    if (P.length === 0) character.selected = true;
    P.push(character);

    setCharacters(newCharArr);
    setParty(P);
  };

  const changeGameState = game_state => {
    setGameState(game_state);
  };

  const updateActiveChar = id => {

    const P = [...party];

    P.forEach(C => {
      if (C.id === id) C.selected = true
      else C.selected = false;
    });

    setParty(P)
  };

  useEffect(() => {
    const characterArr = CharactersArr();
    characterArr.forEach((C, i) => { C.id = i });
    setCharacters(characterArr);
    setParty([]);
  }, [])

  return (
    <div className="App">
      {
        gameState === 'landing' ?
          <></>
          :
          gameState === 'character_select' && characters ?
            <CharacterSelect
              characters={characters}
              addToParty={addToParty}
              changeGameState={changeGameState}
            />
            :
            gameState === 'battle' ?
              <BattleStage
                characters={characters}
                party={party}
                addToParty={addToParty}
                changeGameState={changeGameState}
                updateActiveChar={updateActiveChar}
              />
              :
              <></>
      }
    </div>
  );
}

export default App;
