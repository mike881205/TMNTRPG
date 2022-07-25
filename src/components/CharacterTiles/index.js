import { React } from "react";
import { Row, Col } from "react-bootstrap";
import CharacterImg from "../CharacterImg";
// import './style.css'

const CharacterTile = ({ partyId, character, selectCharacter }) => {

    const {img, health, special} = character

    // const handleClick = () => {
    //     ;
    // };

    return (
        <Col onClick={() => selectCharacter(partyId)}>
            <Row>
                <Col>
                    <CharacterImg image={img()} classId={'tileImg'} />
                </Col>
            </Row>
            <Row>
                {
                    health.map((square, i) => {
                        return (
                            <Col key={`health: ${i}`}>.</Col>
                        )
                    })
                }
            </Row>
            <Row>
                {
                    special.map((square, i) => {
                        return (
                            <Col key={`special: ${i}`}>.</Col>
                        )
                    })
                }
            </Row>
        </Col >
    )
};

export default CharacterTile;