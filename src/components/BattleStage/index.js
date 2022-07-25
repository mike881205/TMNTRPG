import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Battlefield from "../BattleField";
import CharacterInfo from "../CharacterInfo";
import './style.css'

const BattleStage = ({ characters, addToparty, partys, changeGameState, selectCharacter }) => {

    const activeHero = () => {
        const filtered = partys.hero.filter(C => { return C.selected });
        return filtered[0];
    };

    const activeEnemy = () => {
        const filtered = partys.enemy.filter(C => { return C.selected });
        return filtered[0];
    };

    return (
        <Container>
            {
                !activeEnemy() ?
                    <></>
                    :
                    <CharacterInfo character={activeEnemy()} />
            }
            <Battlefield
                selectCharacter={selectCharacter}
                partys={partys}
            />
            {
                !activeHero() ?
                    <></>
                    :
                    <CharacterInfo character={activeHero()} />
            }
        </Container>
    )
};

export default BattleStage;