import { React } from "react";
import './style.css'

const CharacterImg = ({ image, classId }) => {

    const {name, source} = image

    return (
        <img id={classId} style={{border: '1px solid black'}} src={source} alt={name}></img>
    )
};

export default CharacterImg;