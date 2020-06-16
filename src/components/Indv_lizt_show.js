import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import './Indv_lizt_show.css';

function IndivLizt(props) {
    let singleLizt = props.lizts.find((lizt) => lizt.title === props.match.params.title)

    return (
       <> 
            {singleLizt ? <CardDeck>
                <Card className='text-left'>
                    <Card.Body>
                        <Card>
                            <Card.Header>{singleLizt.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        {singleLizt.items.map((item) => {
                                            return(
                                                <li>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Card.Text>
                                <Button variant="secondary" href="" name="IndivLizt" className="button">Edit Lizt</Button>
                                <Button variant="secondary" href="http://localhost:3002/" name="IndivLizt" className="button">Text Lizt</Button>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </CardDeck> : <div>Loading...</div>}
        </>
    );
}

export default IndivLizt;