import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({ campsite }) {
  return (
    <Col md="5" className="m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardBody>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </CardBody>
      </Card>
    </Col>
    // <div className="col-md-5 m-1">
    //   <Card>
    //     <CardImg top src={campsite.image} alt={campsite.name} />
    //     <CardBody>
    //       <CardTitle>{campsite.name}</CardTitle>
    //       <CardText>{campsite.description}</CardText>
    //     </CardBody>
    //   </Card>
    // </div>
  )

}

function RenderComments({ comments }) {
      if(comments){
      return(
        <Col md="5" className="m-1">
          <h4>Comments</h4>
          {comments.map((el, index) => {
            return (
              <p key={index}>{el.text}<br />--{el.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(el.date)))}</p>
            )
          })}
        </Col>
        // <div className="col-md-5 m-1">
        //   <h4>Comments</h4>
        //   {comments.map((el,index) => {
        //     return(
        //       <p key={index}>{el.text}<br />--{el.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(el.date)))}</p>
        //     )
        //   })}
        // </div>
      )
    }
    return(
      <div></div>
    )

}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
