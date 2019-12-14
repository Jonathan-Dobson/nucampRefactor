import React from 'react';
import Breadcrumbs from '../sharedComponents/Breadcrumbs';
import OurMission from './OurMission';
import Facts from './Facts';
import Quote from './Quote';
import { Container, Row } from 'reactstrap';
import Partners from './Partners';

function About(props) {

    return (
        <Container>
            <Row><Breadcrumbs items={[[ 'Nucamp', '/home' ],[ 'About Us' ]]} /></Row>
            <Row className="row-content">
                <OurMission md={12} lg={6}/>
                <Facts md={12} lg={6}/>
                <Quote />
            </Row>
            <Partners />
        </Container>
    );
}

export default About;
