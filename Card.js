import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// get our fontawesome imports
import { faHome, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = (props) => {
    return (
        <Card style={{ width: '100%',  marginBottom: "20px" }}>
            <Card.Body>
                <FontAwesomeIcon icon={faUserAlt}  style={{ fontSize: '30px', marginBottom:'20px' }} />
                <Card.Title> {props.titulo} </Card.Title>
                <Card.Text> {props.desc} </Card.Text>
                <Button variant="primary" href={props.link}> Acessar </Button>
            </Card.Body>
        </Card>
    )
}

export default Item;