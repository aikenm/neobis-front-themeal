import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MealDetail from '../components/MealDetail';
import axios from 'axios';

const IngredientsPage = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    async function getMealDetails() {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = response.data;
        setMealDetails(data.meals[0]);
      } catch (error) {
        console.error('Error getting meal details:', error);
      }
    }

    getMealDetails();
  }, [mealId]);

  return (
    <div>
      <Header />
      <MealDetail meal={mealDetails} />
    </div>
  );
};

export default IngredientsPage;
