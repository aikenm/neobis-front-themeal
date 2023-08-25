import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const MealOfDay = () => {
  const [mealOfDay, setMealOfDay] = useState({});

  useEffect(() => {
    async function fetchMealOfDay() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setMealOfDay(data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal of the day:', error);
      }
    }

    fetchMealOfDay();
  }, []);

  return (
    <section className='mod-section'>
      <div className='mod-info-block'>
        <h2 className='mod-title'>Meal of the Day</h2>
        <Link to={`/ingredients/${mealOfDay.idMeal}`} className='random-meal-link'>
            <h3 className='mod-meal-name'>{mealOfDay.strMeal}</h3>
        </Link>
        <p className='mod-meal-category'>{mealOfDay.strCategory}</p>
        <p className='mod-meal-country'> | {mealOfDay.strArea}</p>
      </div>
      <img src={mealOfDay.strMealThumb} alt={mealOfDay.strMeal} className='mod-meal-image'/>
    </section>
  );
};

export default MealOfDay;
