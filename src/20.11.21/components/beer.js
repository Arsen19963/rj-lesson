import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Beer extends Component {
  state = {
    showMore: false,
  };
  handleToggleMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };
  render() {
    const { name, description, image_url } = this.props;
    const { showMore } = this.state;
    return (
      <div className="card-container">
        <h2 className="card-title">{name}</h2>
        <img className="card-img" src={image_url} alt={name} />
        {showMore && <h3 className="card-label">{description}</h3>}
        <span onClick={this.handleToggleMore}>
          {showMore ? "collapse" : "more"}
        </span>
      </div>
    );
  }
}

Beer.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  description: PropTypes.string,
};
