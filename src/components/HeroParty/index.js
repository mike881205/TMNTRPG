import { React } from "react";
import { Row } from "react-bootstrap";
import CharacterTile from "../CharacterTiles";
// import './style.css'

const HeroParty = ({ party, updateActiveChar }) => {

    return (
        <Row>
            {
                party.map((C, i) => {
                    return (
                        <CharacterTile
                            key={`tile ${i}`}
                            image={C.img()}
                            partyId={i}
                            health={C.health}
                            special={C.special}
                            updateActiveChar={updateActiveChar}
                        />
                    )
                })
            }
        </Row>
    )
};

export default HeroParty;