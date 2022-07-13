import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CharacterImg from "../CharacterImg";
// import './style.css'

const CharacterInfo = ({ character }) => {

    console.log(character)

    const { id, health, level, name, points, power, range, speed, special, type, selected, img } = character;

    const handleClick = () => {

    };

    if (!selected) return (
        <></>
    )
    else return (
        <Row>
            <Col style={{ border: '1px solid black' }}>
                <Row>
                    <Col>
                        <Row>
                            {
                                health.map((square, i) => {
                                    return (
                                        <Col key={`health ${i}`}>
                                            .
                                            {/* {square} */}
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row>
                            <Col>
                                <p>Health</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <p>Level</p>
                            </Col>
                            <Col>
                                <p>{level}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            {
                                special.map((square, i) => {
                                    return (
                                        <Col key={`special ${i}`}>
                                            .
                                            {/* {square} */}
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row>
                            <Col>
                                <p>Special</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <p>Points</p>
                            </Col>
                            <Col>
                                <p>{points}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col style={{ border: '1px solid black' }}>
                <Row>
                    <Col >
                        <CharacterImg
                            image={img}
                            name={name}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{name}</h3>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default CharacterInfo;