import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import Card from  'react-bootstrap/Card';
import Button from  'react-bootstrap/Button';
// import { propTypes } from 'react-bootstrap/esm/Image';

function Card1(props) {
    return (

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
              {props.detail}
            {/* Some quick example text to build on the card title and make up the bulk of */}
            {/* the card's content. */} 
          </Card.Text>
          <Button variant="primary">{props.action}</Button>
        </Card.Body>
      </Card>

    );
}

export default Card1;