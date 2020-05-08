import React from 'react';
import { Media, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

export default connect(props=>props) 
((props) => <Row className="row-content">
    <Col md={12}><h3>Community Partners</h3></Col>
    <Col mt={4}>
        <Media list>{
            props.partners.map(partner => {
                return (
                    <Media key={partner.id} tag="li">
                        <Media object 
                            src={partner.image} 
                            alt={partner.name} 
                            width="150"/>
                        <Media body className="ml-5 mb-4">
                            <Media heading>{partner.name}</Media>
                            {partner.description}
                        </Media>
                    </Media>
                );
            })}
        </Media>
    </Col>
</Row>);