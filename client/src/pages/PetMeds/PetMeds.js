import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class PetMeds extends Component {
  state = {
    petmeds: [],
    prescription: "",
    sig: ""
  };

  componentDidMount() {
    this.loadPetMeds();
  }

  loadPetMeds = () => {
    API.getPetMeds()
      .then(res =>
        this.setState({ petmeds: res.data, prescription: "", sig: "", prescriber: "" })
      )
      .catch(err => console.log(err));
  };

  deletePetMed = id => {
    API.deletePetMed(id)
      .then(res => this.loadPetMeds())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.prescription && this.state.sig) {
      API.savePetMed({
        prescription: this.state.prescription,
        sig: this.state.sig,
        prescriber: this.state.prescriber
      })
        .then(res => this.loadPetMeds())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      <Row>
      <Jumbotron>
              <h1>The Purrfect Pet Prescription Planner. Prepared to Please all Pets from Plump Pigs to Picky Parrots. - PillPals </h1>
            </Jumbotron>
      </Row>

        <Row>
          <Col size="md-3">
<Jumbotron>
  Add a Prescription:
</Jumbotron>
            <form>
              <Input
                value={this.state.prescription}
                onChange={this.handleInputChange}
                name="prescription"
                placeholder="Drug Name and Strength (required)"
              />
              <Input
                value={this.state.sig}
                onChange={this.handleInputChange}
                name="sig"
                placeholder="Directions (required)"
              />
              <TextArea
                value={this.state.prescriber}
                onChange={this.handleInputChange}
                name="prescriber"
                placeholder="Prescriber (Optional)"
              />
              <FormBtn
                disabled={!(this.state.sig && this.state.prescription)}
                onClick={this.handleFormSubmit}
              >
                Add New Prescription
              </FormBtn>
            </form>
          </Col>
          <Col size="md-9 sm-12">
            <Jumbotron>
              <h1>My Pet's Medication List</h1>
            </Jumbotron>
            {this.state.petmeds.length ? (
              <List>
                {this.state.petmeds.map(petmed => (
                  <ListItem key={petmed._id}>
                    <Link to={"/petmeds/" + petmed._id}>
                      <strong>
                        {petmed.prescription}:{petmed.sig}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePetMed(petmed._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PetMeds;
