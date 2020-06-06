import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";

const GraphPicker = () => {
return (
    <div>
        <CardDeck>
            <Card
                bg="primary"
                text="white"
                className="text-center"
                style={{margin: "10px 10px 10px 100px"}}
            >
                <Card.Body>
                    <Card.Title>Infected</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                </Card>
                </CardDeck>

    </div>
    )
}

export default GraphPicker;