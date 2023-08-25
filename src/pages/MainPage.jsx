import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MealOfDay from '../components/MealOfDay';
import SearchBar from '../components/SearchBar';
import MealList from '../components/MealList';

const MainPage = ({ history }) => {
  const [meals, setMeals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchMealOfDay() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching meal of the day:', error);
      }
    }

    // Fetch the random meal only once when the component mounts
    if (meals.length === 0) {
      fetchMealOfDay();
    }
  }, [meals]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.meals);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleMealClick = (mealId) => {
    history.push(`/ingredients/${mealId}`);
  };

  return (
    <div>
      <Header />
      <MealOfDay meal={meals[0]} />
      <SearchBar onSearch={handleSearch} />
      <MealList meals={searchResults} onMealClick={handleMealClick} />
    </div>
  );
};

export default MainPage;
