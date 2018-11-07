import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    petmed: {}
  };
  // When this component mounts, grab the petmed with the _id of this.props.match.params.id
  // e.g. localhost:3000/petmed/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPetMed(this.props.match.params.id)
      .then(res => this.setState({ petmed: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {this.state.petmed.petname}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
            <h3>Medication:</h3>
              <h5>
              {this.state.petmed.prescription}
              </h5>
            <h3>Directions:</h3>
              <h5>
              {this.state.petmed.sig}
              </h5>
            <h3>Prescriber</h3>
              <h5>
              {this.state.petmed.prescriber}
              </h5>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
