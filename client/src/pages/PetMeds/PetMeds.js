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
    sig: "",
    petname: "",
    prescriber: ""
  };

  componentDidMount() {
    this.loadPetMeds();
  }

  loadPetMeds = () => {
    API.getPetMeds()
      .then(res =>
        this.setState({ petmeds: res.data, prescription: "", sig: "", petname: "", prescriber: "" })
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
        petname: this.state.petname,
        prescriber: this.state.prescriber
      })
        .then(res => {
          //console.log(res);
          this.loadPetMeds();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
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
                placeholder="Drug Name and Strength (Required)"
              />
              <Input
                value={this.state.sig}
                onChange={this.handleInputChange}
                name="sig"
                placeholder="Directions (Required)"
              />
              <TextArea
                value={this.state.petname}
                onChange={this.handleInputChange}
                name="petname"
                placeholder="Pet's Name (Optional)"
              />
              <TextArea
                value={this.state.prescriber}
                onChange={this.handleInputChange}
                name="prescriber"
                placeholder="Prescriber (Optional)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (Optional)"
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
                        {petmed.prescription} Directions: {petmed.sig}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePetMed(petmed._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>Welcome! Please add your pet's medication info to the left.</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PetMeds;
