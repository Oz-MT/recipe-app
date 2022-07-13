import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import diet from "../../assets/diet.svg";
import Navbar from "../../components/navbar/Navbar";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    calories,
    totalWeight,
    label,
    totalNutrients: {
      CA: { label: calabel, quantity: caquantity },
      CHOCDF: { label: cholabel, quantity: choquantity },
      CHOLE: { label: chlabel, quantity: chquantity },
      ENERC_KCAL: { label: enlabel, quantity: enquantity },
    },
    digest,
    images: {
      REGULAR: { url },
    },
    ingredientLines,
  } = location.state;

  return (
    <div>
      <div>
        <Navbar />
        <h1>{label}</h1>
        <img src={diet} alt="" />
      </div>
      <div>
        <div>
          <p>
            <b>Nutrients</b>
          </p>
          <p>
            {calabel}:{Math.floor(caquantity)}g
          </p>
          <p>
            {cholabel}:{Math.floor(choquantity)}g
          </p>
          <p>
            {chlabel}:{Math.floor(chquantity)}mg
          </p>
          <p>
            {enlabel}:{Math.floor(enquantity)}kcal
          </p>
          <p>
            <b>Total Weight</b>:{Math.floor(totalWeight)}
          </p>
          <p>
            <b>Calories</b>:{Math.floor(calories)}
          </p>
          <p>Fat:{Math.floor(digest[0].total)}</p>
          <p>Protein:{Math.floor(digest[2].total)}</p>
        </div>
        <div>
          <img src={url} alt="name" />
        </div>
        <div>
          {ingredientLines.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default Detail;
