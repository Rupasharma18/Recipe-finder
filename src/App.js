import React, { useEffect, useState } from 'react';
import Recipe from './component/recipe'
import './App.css';

const App = () => {
  const APP_ID = 'f5c945fe';
  const APP_KEY = '272ae8a6053dc1372ceb9d03337cf652';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search);

  }
  const getSearch = e => {
    console.log(e)
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
      <div className="search-from">
        <input className="search-bar" type="text" value={search}
          onChange={updateSearch}
        />
        <button className="search-button" onClick={getSearch} type="submit" >Search</button>
      </div>
        <div className="recipes">
        {recipes.map(recipe => (
            <Recipe title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              key={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
            />
          )

          )}
        </div>
     
    </div>
  )
}
export default App;
