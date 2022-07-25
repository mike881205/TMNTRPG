import { React, useState, useEffect } from "react";
import './App.css';
import CharactersArr from "./constants/charactersArr";
import CharacterSelect from "./components/CharacterSelect";
import BattleStage from "./components/BattleStage";

const App = () => {

  const [gameState, setGameState] = useState("character_select");
  const [characters, setCharacters] = useState(null);
  const [partys, setpartys] = useState(null);
  const [inventory, setInventory] = useState(null);

  const addToParty = id => {
    const prtys = {...partys};
    const P = prtys.hero;
    const Characters = {...characters};
    const hero = Characters.heroes[id];

    // Characters.heroes.forEach(H => P.push(H))

    if (P.length === 0) hero.selected = true;

    P.push(hero);

    Characters.heroes = Characters.heroes.filter((C, i) => {
      return i !== id;
    });

    setCharacters(Characters);
    setpartys(prtys);
  };

  const changeGameState = game_state => {
    setGameState(game_state);
  };

  const selectCharacter = id => {

    const prtys = {...partys};
    const P = prtys.hero;

    P.forEach(C => {
      if (C.id === id) C.selected = true
      else C.selected = false;
    });

    setpartys(prtys);
  };

  useEffect(() => {

    const characterArr = CharactersArr();
    
    characterArr.forEach((C, i) => C.id = i);

    const heroes = characterArr.filter(C => { return C.type === 'hero' });
    const enemies = characterArr.filter(C => { return C.type.includes('enemy') });
    const bosess = characterArr.filter(C => { return C.type === 'boss' });
    const chars = {heroes: heroes, enemies: enemies, bosess: bosess};

    setCharacters(chars);
    setpartys({hero: [], enemy: []});
  }, [])

  return (
    <div className="App">
      {
        gameState === 'landing' ?
          <></>
          :
          gameState === 'character_select' && characters ?
            <CharacterSelect
              characters={characters.heroes}
              addToParty={addToParty}
              changeGameState={changeGameState}
            />
            :
            gameState === 'battle' ?
              <BattleStage
                characters={characters}
                partys={partys}
                addToParty={addToParty}
                changeGameState={changeGameState}
                selectCharacter={selectCharacter}
              />
              :
              <></>
      }
    </div>
  );
}

export default App;
