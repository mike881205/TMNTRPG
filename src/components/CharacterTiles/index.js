import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CharacterImg from "../CharacterImg";
// import './style.css'

const CharacterTile = ({ img, name, partyId, updateActiveChar }) => {

    // const handleClick = () => {
    //     ;
    // };

    return (
        <Col onClick={() => updateActiveChar(partyId)}>
            <CharacterImg image={img} name={name}  />
        </Col >
    )
};

export default CharacterTile;