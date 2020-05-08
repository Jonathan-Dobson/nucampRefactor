import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import CampsiteCard from "../sharedComponents/CampsiteCard";
import Breadcrumbs from "../sharedComponents/Breadcrumbs";

const mapStateToProps = state => ({
  campsites: state.campsites,
  partners: state.partners,
  promotions: state.promotions
});

function Home(props) {
  const getFeatured = item => item.featured;
  const campsite = props.campsites.filter(getFeatured)[0];
  const promotion = props.promotions.filter(getFeatured)[0];
  const partner = props.partners.filter(getFeatured)[0];
  return (
    <Container>
      <Row>
        <Breadcrumbs
          title="Welcome to Nucamp"
          items={[["Nucamp", "/home"], ["Home"]]}
        />
        <CampsiteCard item={campsite} md={4} />
        <CampsiteCard item={promotion} md={4} />
        <CampsiteCard item={partner} md={4} />
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(Home);
