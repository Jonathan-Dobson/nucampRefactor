import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CampsiteCard from '../sharedComponents/CampsiteCard'

const mapStateToProps = state => ({
  campsites: state.campsites,
  partners: state.partners,
  promotions: state.promotions,
})

function Home(props) {

  const getFeatured = item => item.featured
  const campsite = props.campsites.filter(getFeatured)[0]
  const promotion = props.promotions.filter(getFeatured)[0]
  const partner = props.partners.filter(getFeatured)[0]

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Nucamp</Link></BreadcrumbItem>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <h2>Welcome To Nucamp</h2>
          <hr />
        </Col>
          <CampsiteCard item={campsite} md={4}/>
          <CampsiteCard item={promotion} md={4}/>
          <CampsiteCard item={partner} md={4}/>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(Home);
