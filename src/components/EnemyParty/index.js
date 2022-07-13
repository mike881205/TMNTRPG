import { React } from "react";
import { Row } from "react-bootstrap";
import CharacterTile from "../CharacterTiles";
// import './style.css'

const EnemyParty = ({ party, updateActiveChar }) => {

    return (
        <Row>
            {/* {
                party.map((C, i) => {
                    return (
                        <CharacterTile
                            key={`tile ${i}`}
                            image={C.img()}
                            partyId={i}
                            updateActiveChar={updateActiveChar}
                        />
                    )
                })
            } */}
        </Row>
    )
};

export default EnemyParty;