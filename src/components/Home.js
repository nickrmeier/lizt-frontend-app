import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <CardDeck>
                <Card className='text-center'>
                    <Card.Body>
                        <h1>All Lizts</h1>
                        <Card>
                            <Card.Header>Example Lizt 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>List Item 1</li>
                                        <li>List Item 2</li>
                                        <li>List Item 3</li>
                                    </ul>
                                </Card.Text>
                                <Button variant="secondary">Go to Lizt</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>Example Lizt 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>List Item 1</li>
                                        <li>List Item 2</li>
                                        <li>List Item 3</li>
                                    </ul>
                                </Card.Text>
                                <Button variant="secondary">Go to Lizt</Button>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>


                <Card className='text-center'>
                    <Card.Body>
                        <h1>My Lizts</h1>
                        <Button
                            href="/newlizt"
                            variant='outline-dark'
                            name='newLizts'
                            className='newLizts'>
                            New Lizt
						</Button>

                        <Button
                            href="/lizt"
                            variant='outline-dark'
                            name='Lizt'
                            className='Lizt'>
                            Lizt
						</Button>

                        <Card>
                            <Card.Header>Example Lizt 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>List Item 1</li>
                                        <li>List Item 2</li>
                                        <li>List Item 3</li>
                                    </ul>
                                </Card.Text>
                                <Button variant="secondary">Go to Lizt</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>Example Lizt 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>List Item 1</li>
                                        <li>List Item 2</li>
                                        <li>List Item 3</li>
                                    </ul>
                                </Card.Text>
                                <Button variant="secondary">Go to Lizt</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>Example Lizt 3</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>List Item 1</li>
                                        <li>List Item 2</li>
                                        <li>List Item 3</li>
                                    </ul>
                                </Card.Text>
                                <Button variant="secondary">Go to Lizt</Button>
                            </Card.Body>
                        </Card>

                    </Card.Body>
                </Card>
            </CardDeck>
        );
    }
}

export default Home;