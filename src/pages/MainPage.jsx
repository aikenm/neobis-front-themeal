import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../components/Header';
import MealOfDay from '../components/MealOfDay';
import SearchBar from '../components/SearchBar';
import MealList from '../components/MealList';

const MainPage = ({ event }) => {
  const [meals, setMeals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function getMealOfDay() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = response.data;
        console.log(data);
        setMeals(data.meals);
      } catch (error) {
        console.error('Error getting meal of the day:', error);
      }
    }

    if (meals.length === 0) {
        getMealOfDay();
    }
  }, [meals]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = response.data;
      setSearchResults(data.meals);
    } catch (error) {
      console.error('Error getting search results:', error);
    }
  };

  return (
    <div>
      <Header />
      <MealOfDay meal={meals[0]} />
      <SearchBar onSearch={handleSearch} />
      <MealList meals={searchResults}/>
    </div>
  );
};

export default MainPage;
