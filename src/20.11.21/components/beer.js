import React, { useState } from "react";
import PropTypes from "prop-types";

const Beer = ({ name, description, image_url }) => {
  const [showMore, setShowMore] = useState(false);
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card-container">
      <h2 className="card-title">{name}</h2>
      <img className="card-img" src={image_url} alt={name} />
      {showMore && <h3 className="card-label">{description}</h3>}
      <span onClick={handleToggleMore}>{showMore ? "collapse" : "more"}</span>
    </div>
  );
};

Beer.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  description: PropTypes.string,
};

export default Beer;
