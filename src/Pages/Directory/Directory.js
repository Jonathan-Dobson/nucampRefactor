import React from "react";
import { connect } from "react-redux";
import {Card,CardImg,CardImgOverlay,CardTitle,Container,Row,Col} from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../sharedComponents/Breadcrumbs";



export default connect(props=>props)
(function Directory(props) {
  console.log('directory',props)
  return (
    <Container>
      <Row><Breadcrumbs items={[["Nucamp", "/home"], ["Directory"]]} /></Row>
      <Row>
      { props.campsites.map(campsite => {
            return (
              <Col key={campsite.id} md={5}>
                <Card>
                  <Link to={`/directory/${campsite.id}`}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                      <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                  </Link>
                </Card>
              </Col>
            );
        }) 
      }
      </Row>
    </Container>
  );
});