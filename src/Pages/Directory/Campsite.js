import React from "react";
import { connect } from "react-redux";
import { Row, Container } from "reactstrap";
import CampsiteCard from "../sharedComponents/CampsiteCard";
import Comments from "./Comments";
import Breadcrumbs from "../sharedComponents/Breadcrumbs";

const mapStateToProps = state => ({
  campsites: state.campsites,
  comments: state.comments
});

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <Container>
        <Row>
          <Breadcrumbs
            items={[
              ["Nucamp", "/home"],
              ["Directory", "/directory"],
              [props.campsite.name]
            ]}
          />
        </Row>
        <Row>
          <CampsiteCard item={props.campsite} md={6} />
          <Comments comments={props.comments} md={6} />
        </Row>
      </Container>
    );
  }
  return <Container />;
}

const MatchCampsite = props => (
  <CampsiteInfo
    campsite={
      props.campsites.filter(
        campsite => campsite.id === +props.match.params.campsiteId
      )[0]
    }
    comments={props.comments.filter(
      comment => comment.campsiteId === +props.match.params.campsiteId
    )}
  />
);

export default connect(mapStateToProps)(MatchCampsite);
