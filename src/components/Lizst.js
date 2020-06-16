import React from 'react';
import { CardDeck, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Lizt(props) {
    return (
        
       <> 
        <CardDeck>
            <Card className='text-left'>
                <Card.Body>
                    <Card>
                        <Card.Header>{props.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                        {props.items.map((item) => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                </ul>
                            </Card.Text>
                                <Link to={`/indvlizt/${props.title}`}>Go to '{props.title}'</Link>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
            <Card className='text-left'>
                <Card.Body>
                    <Card>
                        <Card.Header>{props.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                        {props.items.map((item) => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                </ul>
                            </Card.Text>
                                <Link to={`/indvlizt/${props.title}`}>Go to '{props.title}'</Link>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </CardDeck>
        </>
    );
}

export default Lizt;