import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import BookList from "./components/BookList";
import ReservationForm from "./components/ReservationForm";
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    fetch("https://striveschool-api.herokuapp.com/api/books")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((error) => console.error("Error fetching books:", error));
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <h1 className="text-center my-4">La Mia Collezione di Libri</h1>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <BookList books={this.state.books} />
              <ReservationForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
