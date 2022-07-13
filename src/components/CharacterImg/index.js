import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
// import './style.css'

const CharacterImg = ({ img, name }) => {

    return (
        <img style={{border: '1px solid black'}} src={img} alt={`${name}_img`}></img>
    )
};

export default CharacterImg;