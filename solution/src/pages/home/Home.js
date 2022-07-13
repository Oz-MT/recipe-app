import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [foodName, setFoodName] = useState("meat");
  const [foodType, setMeal] = useState("lunch");

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${foodName}&app_id=e60ff273&app_key=19309b4ff8f037f7a7995e4dd6fe2773&mealType=${foodType}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setFoodName("");
  };

  return (
    <div>
      <Navbar />
      <h1>Food App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="foodName"
          value={foodName}
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
        />
        <button type="submit">Search</button>
        <select
          onChange={(e) => {
            setMeal(e.target.value);
          }}
        >
          <option value="Lunch">Lunch</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
      </form>
      <div>
        {recipes.map((item, index) => {
          return (
            <div key={index}>
              <RecipeCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
