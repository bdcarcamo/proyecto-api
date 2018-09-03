import React, { Component } from 'react';

import { Table } from 'reactstrap';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      articulos : []
    })
  }

  componentWillMount() {

    const ts = Date.now(),
          publicKey = 'b5dd158dd0e856443db7fb726fbc6bc9',
          privateKey = '80182fcb24c6426319114b9e34eafed6',
          hash = md5(ts + publicKey + privateKey),
          URL = `http://gateway.marvel.com/v1/public/characters?=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(URL)
      .then((response) => {
        // return response.json()
        console.log(response)
      })
      .then((art) => {
        this.setState({ articulos: art })
      })    
  }

  render() {
    return (
        <div>
          <Table responsive dark>
          <thead>
            <tr>
              <th scope="row">Código</th>
              <th scope="row">Descripción</th>
              <th scope="row">Precio</th>                    
            </tr>
          </thead>
          <tbody>  
            {this.state.articulos.map(art => {
              return (
                <tr key={art.userId}>
                  <td>{art.userId}</td>
                  <td>{art.id}</td>
                  <td>{art.title} </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
