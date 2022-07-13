import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CharacterTile from "../CharacterTiles";
// import './style.css'

const Battlefield = ({ party, updateActiveChar }) => {

    return (
        <Row>
            <Col style={{ border: '1px solid black' }}>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    {
                        party.map((C, i) => {
                            return (
                                <CharacterTile
                                    key={`tile ${i}`} 
                                    name={C.name}
                                    img={C.img}
                                    partyId={i}
                                    updateActiveChar={updateActiveChar}
                                />
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
};

export default Battlefield;