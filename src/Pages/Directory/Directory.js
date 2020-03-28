import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../sharedComponents/Breadcrumbs";

const mapStateToProps = state => ({
  campsites: state.campsites
});

function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Directory(props) {
  const directory = props.campsites.map(campsite => {
    return (
      <Col key={campsite.id} md={5}>
        <RenderDirectoryItem campsite={campsite} />
      </Col>
    );
  });

  return (
    <Container>
      <Row>
        <Breadcrumbs items={[["Nucamp", "/home"], ["Directory"]]} />
      </Row>
      <Row>{directory}</Row>
    </Container>
  );
}

export default connect(mapStateToProps)(Directory);
