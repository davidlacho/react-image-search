import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    const { term } = this.state;
    const { onSearchSubmit } = this.props;
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearchSubmit(term);
      this.setState({ term: '' });
    }
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment" style={{ margin: '10px' }}>
        <FormGroup
          className="ui"
          onKeyPress={this.onFormSubmit}
        >
          <TextField
            id="outlined-search"
            label="Image Search"
            type="search"
            margin="normal"
            variant="outlined"
            className="field"
            onChange={this.onInputChange}
            value={term}
          />
        </FormGroup>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  onSearchSubmit: (term) => {
    // eslint-disable-next-line no-console
    console.error(`Cannot search for '${term}'. onSearchSubmit not passed as a prop in SearchBar.`);
  },
};

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func,
};

export default SearchBar;
