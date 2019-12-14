import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';

export default function Quote(props) {
    return (
        <Col {...props}>
            <Card className="bg-light mt-3">
                <CardBody>
                    <blockquote className="blockquote">
                        <p className="mb-0">I will not follow where the path may lead, but I will go
                            where there is no path, and I will leave a trail.</p>
                        <footer className="blockquote-footer">Muriel Strode,{' '}
                            <cite title="Source Title">"Wind-Wafted Wild Flowers" - The Open Court, 1903</cite>
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
        </Col>
    )
}