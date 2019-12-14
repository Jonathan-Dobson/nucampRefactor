import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function CampsiteCard({item, ...rest}) {

    const Image = () => 
      <CardImg src={item.image} alt={item.name} />
      
    const Body = () => 
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>

    return (
      <Col {...rest}>
        <Card>
          <Image />
          <Body />
        </Card>
      </Col>
    );
  }

export default CampsiteCard;