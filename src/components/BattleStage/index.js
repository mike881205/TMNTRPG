import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Battlefield from "../BattleField";
import CharacterInfo from "../CharacterInfo";
import './style.css'

const BattleStage = ({ characters, addToParty, party, changeGameState, updateActiveChar }) => {

    const activeCharacter = () => {
        const filtered = party.filter(C => { return C.selected });
        return filtered[0];
    };

    return (
        <Container>
            <Battlefield
                updateActiveChar={updateActiveChar}
                party={party}
            />
            {
                !activeCharacter() ?
                    <></>
                    :
                    <CharacterInfo character={activeCharacter()} />
            }
        </Container>
    )
};

export default BattleStage;