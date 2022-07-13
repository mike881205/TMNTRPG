import { React } from "react";
import { Row, Col } from "react-bootstrap";
import CharacterImg from "../CharacterImg";
// import './style.css'

const CharacterTile = ({ image, partyId, health, special, updateActiveChar }) => {

    // const handleClick = () => {
    //     ;
    // };

    return (
        <Col onClick={() => updateActiveChar(partyId)}>
            <Row>
                <Col>
                    <CharacterImg image={image} classId={'tileImg'} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        health.map((square, i) => {
                            return (
                                <>.</>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        special.map((square, i) => {
                            return (
                                <>.</>
                            )
                        })
                    }
                </Col>
            </Row>
        </Col >
    )
};

export default CharacterTile;