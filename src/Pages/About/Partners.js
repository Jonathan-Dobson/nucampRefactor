import React from 'react';
import { Media } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    partners: state.partners,
})

function Partners (props) {

    const partners = props
    .partners
    .map(partner => {
        return (
            <Media key={partner.id} tag="li">
                <Media object src={partner.image} alt={partner.name} width="150"/>
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </Media>
        );
    });

    return(
        <div className="row row-content">
            <div className="col-12">
                <h3>Community Partners</h3>
            </div>
            <div className="col mt-4">
                <Media list>
                    {partners}
                </Media>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Partners);