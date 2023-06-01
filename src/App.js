import React from 'react';
import {useEffect, useState} from "react";
import SearchBar from './Component/SearchBar'
import RecipeCard from './Component/RecipeCard'
import axios from 'axios';
import './App.css';


const apiUrl = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

function App() {

const [isLoading, setIsLoading] = useState(false);
const [query, setQuery] = useState("");
const [recipes, setRecipes] = useState([]);

//function to search for the recipes
const SearchRecipes =  () =>{
  setIsLoading(true);
  axios.get(apiUrl).then((Response)=>{
    setRecipes(Response.meals);
    setIsLoading(false);

  })
}

useEffect(() => {
  SearchRecipes();
});

  return (
    <div className="Container">
      <h2>Our Recipe App</h2>
    </div>
  );
}

export default App;
