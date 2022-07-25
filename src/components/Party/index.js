import { React } from "react";
import { Row } from "react-bootstrap";
import CharacterTile from "../CharacterTiles";
// import './style.css'

const Party = ({ party, selectCharacter }) => {

    return (
        <Row>
            {
                party.map((C, i) => {
                    return (
                        <CharacterTile
                            key={`tile ${i}`}
                            partyId={i}
                            character={C}
                            selectCharacter={selectCharacter}
                        />
                    )
                })
            }
        </Row>
    )
};

export default Party;