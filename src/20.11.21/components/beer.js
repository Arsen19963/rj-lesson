import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Beer = ({ name, description, image_url, id}) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  console.log(navigate)
  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  const handleNavigateTo=()=>{
      navigate(`/beer/${id}`)
  }
  return (
    <div className="card-container" onClick={handleNavigateTo}>
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
