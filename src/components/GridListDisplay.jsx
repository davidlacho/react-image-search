import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';


class GridListDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sanitizeImageArray(img) {
    // eslint-disable-next-line arrow-body-style
    const sanitizedArray = img.map((image) => {
      return {
        img: image.urls.small,
        title: image.description,
        author: image.user.username,
      };
    });
    return sanitizedArray;
  }

  render() {
    const { imageData } = this.props;
    const tileData = this.sanitizeImageArray(imageData);
    return (
      <div className="grid-list-display">
        <GridList cellHeight={400} className="grid-list">
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} />
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={
                  // eslint-disable-next-line react/jsx-one-expression-per-line
                  <span>by: {tile.author}</span>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

GridListDisplay.defaultProps = {
  imageData: [],
};

GridListDisplay.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  imageData: PropTypes.array,
};

export default GridListDisplay;
