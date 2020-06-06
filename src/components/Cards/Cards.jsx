import React from 'react';
import { CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import image1a from './cardImages/sym_breathing.png';
import image2a from './cardImages/sym_cough.png';
import image3a from './cardImages/sym_fever.png';
import image2b from './cardImages/th1_breathing.png';
import image3b from './cardImages/th1_temp.png';
import image1b from './cardImages/th1_washhands.png';
import cx from 'classnames'; // this allows us to use multiple styles and links the classes together
// this is especially useful so each card can have the same overall style, and also individualing 
// style for each stat

import styles from './Cards.module.css';


const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate} }) => {
    console.log(confirmed);

    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div>
            <CardDeck>
                <Card
                    bg="primary"
                    text="white"
                    className="text-center"
                    style={{margin: "10px 10px 10px 100px"}}
                >
                    <Card.Img variant="top" src={image1b} />
                    <Card.Body>
                        <Card.Title>Infected</Card.Title>
                        <Card.Text>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated: {new Date(lastUpdate).toDateString()}</small>
                    </Card.Footer>
                    </Card>

                <Card
                    bg="success"
                    text="white"
                    className="text-center"
                    style={{margin: "10px"  }}
                >
                    <Card.Img variant="top" src={image2b} />
                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Text>
                            <CountUp 
                                start={0} 
                                end={recovered.value} 
                                duration={2.5} 
                                separator="," />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated: {new Date(lastUpdate).toDateString()}</small>
                    </Card.Footer>
                    </Card>

                <Card
                    bg="danger"
                    text="white"
                    className="text-center"
                    style={{margin: "10px 100px 10px 10px"}}
                >
                    <Card.Img variant="top" src={image3b} />
                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <Card.Text>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated: {new Date(lastUpdate).toDateString()}</small>
                    </Card.Footer>
                    </Card>

            </CardDeck>

        </div>
    )
}

export default Cards;