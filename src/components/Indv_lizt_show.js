import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

function IndivLizt(props) {
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
                                    <li>{props.items}</li>
                                </ul>
                            </Card.Text>
                                <Button variant="secondary" href="/indvlizt" name="IndivLizt">Go to '{props.title}'</Button>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </CardDeck>
        </>
    );
}

export default IndivLizt;