import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './style.css'

const CharacterSelect = ({ characters, addToParty, changeGameState }) => {

    const handleClick = id => {
        addToParty(id);
        changeGameState('battle');
    };

    return (
        <Container>
            <Row>
                <Col>

                    {
                        characters.map((C, i) => {
                            let charSlctRow;
                            if (i !== 6) {
                                if (!(i % 2)) {
                                    charSlctRow = (
                                    <Row key={`charSlct ${i}`} className="charSlctRow">
                                        <Col>
                                            <Button variant="primary" onClick={() => handleClick(C.id)}>{C.name}</Button>{' '}
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={() => handleClick(characters[i + 1].id)}>{characters[i + 1].name}</Button>{' '}
                                        </Col>
                                    </Row>
                                    );
                                }
                            }
                            else {
                                charSlctRow = (
                                <Row key={`charSlct ${i}`} className="charSlctRow">
                                    <Col>
                                        <Button variant="primary" onClick={() => handleClick(C.id)}>{C.name}</Button>{' '}
                                    </Col>
                                </Row>
                                );
                            };

                            return charSlctRow;
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
};

export default CharacterSelect;