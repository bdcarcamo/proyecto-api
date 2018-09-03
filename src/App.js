import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      articulos : []
    })
  }

  componentWillMount() {

    const URL = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6`;

    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        let comics = response.data.results;
        this.setState({ articulos: comics })
        console.log(response);
      })    
  }

  render() {
    return (
        <Container>
          <Row>
            {this.state.articulos.map(comic => {
            let image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
              return (
                <Col xs="12" sm="12" md={{ size: 8, offset: 2 }}>
                  <Card key={comic.id}>
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{comic.title}</CardTitle>
                      <CardSubtitle>{comic.dates.date}</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
      </Row>
      </Container>
    );
  }

}

export default App;
