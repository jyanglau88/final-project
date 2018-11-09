import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
        <a className="btn btn-lg btn-outline-dark float-right bounceIn" href="/">🏡Home</a>
        <h1 className="slideLeft">404 Page Not Found!</h1>
          <br></br>
          <h1 className="wiggle">
          <span role="img" aria-label="Dizzy Emoji">
            💫
            </span>
            </h1>
            <br></br>
            <h1 className="floater">
            <span role="img" aria-label="Crying Cat Face Emoji">
            😿
            </span>
          </h1>        
          </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
