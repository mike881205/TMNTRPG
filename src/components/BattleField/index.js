import { React } from "react";
import { Row, Col } from "react-bootstrap";
import CharacterTile from "../CharacterTiles";
import Party from "../Party";
// import './style.css'

const Battlefield = ({ partys, selectCharacter }) => {

    return (
        <Row>
            <Col style={{ border: '1px solid black' }}>
                <Party
                    party={partys.enemy}
                    selectCharacter={selectCharacter}
                />
                <Party
                    party={partys.hero}
                    selectCharacter={selectCharacter}
                />
            </Col>
        </Row>
    )
};

export default Battlefield;