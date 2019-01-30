import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import GridListDisplay from './GridListDisplay';
import vars from '../vars';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 100,
      },
      headers: {
        Authorization: `Client-ID ${vars.key}`,
      }
    })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data.results);
        this.setState({
          images: response.data.results,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <GridListDisplay imageData={images} />
      </div>
    );
  }
}

export default App;
