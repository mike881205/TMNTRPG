import { React } from "react";
import { Row, Col } from "react-bootstrap";
import CharacterTile from "../CharacterTiles";
import EnemyParty from "../EnemyParty";
import HeroParty from "../HeroParty";
// import './style.css'

const Battlefield = ({ partys, updateActiveChar }) => {

    return (
        <Row>
            <Col style={{ border: '1px solid black' }}>
                <EnemyParty
                    party={partys.enemy}
                    updateActiveChar={updateActiveChar}
                />
                <HeroParty
                    party={partys.hero}
                    updateActiveChar={updateActiveChar}
                />
            </Col>
        </Row>
    )
};

export default Battlefield;