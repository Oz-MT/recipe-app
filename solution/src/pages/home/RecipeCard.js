import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const navigate = useNavigate();
  const {
    label,
    images: {
      SMALL: { url },
    },
  } = item.recipe;
  return (
    <div>
      <h1>{label}</h1>
      <img src={url} alt="name" />
      <button
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/Detail`, { state: item.recipe })}
      >
        View More
      </button>
    </div>
  );
};

export default RecipeCard;
