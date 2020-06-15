import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';


// function makeUL(array) {
//     let list = document.createElement('ul');
//     for (let i = 0; i < array.length; i++) {
//         let item = document.createElement('li');
//         item.appendChild(document.createTextNode(array[i]));
//         list.appendChild(item);
//     }
//     return list;
// }

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
                                    <li>{props.items[0]}</li>
                                    <li>{props.items[1]}</li>
                                    <li>{props.items[2]}</li>
                                    <li>{props.items[3]}</li>
                                </ul>
                            </Card.Text>
                            <Button variant="secondary">Go to Lizt</Button>
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
                                    <li>{props.items[0]}</li>
                                    <li>{props.items[1]}</li>
                                    <li>{props.items[2]}</li>
                                    <li>{props.items[3]}</li>
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

export default Lizt;