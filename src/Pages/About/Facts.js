import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
} from 'reactstrap';

export default function Facts (props) {
    return(
        <Col {...props}>
        <Card>
            <CardHeader className="bg-primary text-white">
                <h3>Facts At a Glance</h3>
            </CardHeader>
            <CardBody>
                <dl className="row">
                    <dt className="col-6">Founded</dt>
                    <dd className="col-6">February 3, 2016</dd>
                    <dt className="col-6">No. of Campsites in 2019</dt>
                    <dd className="col-6">563</dd>
                    <dt className="col-6">No. of Reviews in 2019</dt>
                    <dd className="col-6">4388</dd>
                    <dt className="col-6">Employees</dt>
                    <dd className="col-6">42</dd>
                </dl>
            </CardBody>
        </Card>
    </Col>
    )
}