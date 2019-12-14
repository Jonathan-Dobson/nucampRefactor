import React from 'react';
import { Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ items, title, ...rest }) => {
    if(!title){title=items[items.length-1][0]}
    
    const FormattedCrumbs = () => items.map(( [text,link], idx, arr )=>
        arr.length-1===idx 
            ? <BreadcrumbItem active key={idx}>{text}</BreadcrumbItem>
            : <BreadcrumbItem key={idx}><Link to={link}>{text}</Link></BreadcrumbItem>
    )

    return (
        <Col {...rest}>
            <Breadcrumb><FormattedCrumbs /></Breadcrumb>
            <h2>{title}</h2>
            <hr/>
        </Col>
    )
}

export default Breadcrumbs;