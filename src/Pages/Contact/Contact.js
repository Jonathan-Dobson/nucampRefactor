import React from "react";
import { Container, Col, Row, Button, Label } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import Breadcrumbs from "../sharedComponents/Breadcrumbs";

const IconButton = props => (
  <a role="button" className="btn btn-link" href={props.href}>
    <i className={`fa ${props.icon}`} />
    {props.children}
  </a>
);

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }
  render() {
    return (
      <Container>
        <Row>
          <Breadcrumbs
            title="Contact Us"
            items={[["Nucamp", "/home"], ["Contact Us", ""]]}
          />
        </Row>

        <Row className="row-content align-items-center">
          <Col sm={4}>
            <h5>Our Address</h5>
            <address>
              1 Nucamp Way
              <br />
              Seattle, WA 98001
              <br />
              U.S.A.
            </address>
          </Col>
          <Col>
            <IconButton href="tel:+12065551234" icon="fa-phone">
              1-206-555-1234
            </IconButton>
            <br />
            <IconButton
              href="mailto:fakeemail@fakeemail.co"
              icon="fa-envelope-o"
            >
              campsites@nucamp.co
            </IconButton>
          </Col>
        </Row>
        <LocalForm onSubmit={values => this.handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="firstName" md={2}>
              First Name
            </Label>
            <Col md={10}>
              <Control.text
                model=".firstName"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="lastName" md={2}>
              Last Name
            </Label>
            <Col md={10}>
              <Control.text
                model=".lastName"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="phoneNum" md={2}>
              Phone
            </Label>
            <Col md={10}>
              <Control.text
                model=".phoneNum"
                id="phoneNum"
                name="phoneNum"
                placeholder="Phone number"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="email" md={2}>
              Email
            </Label>
            <Col md={10}>
              <Control.text
                model=".email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col
              md={{
                size: 4,
                offset: 2
              }}
            >
              <div className="form-check">
                <Label check>
                  <Control.checkbox
                    model=".agree"
                    name="agree"
                    className="form-check-input"
                  />{" "}
                  <strong>May we contact you?</strong>
                </Label>
              </div>
            </Col>
            <Col md={4}>
              <Control.select
                model=".contactType"
                name="contactType"
                className="form-control"
              >
                <option>By Phone</option>
                <option>By Email</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="feedback" md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Control.textarea
                model=".feedback"
                id="feedback"
                name="feedback"
                rows="12"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col
              md={{
                size: 10,
                offset: 2
              }}
            >
              <Button type="submit" color="primary">
                Send Feedback
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </Container>
    );
  }
}

export default Contact;
