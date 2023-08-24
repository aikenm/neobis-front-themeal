import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MealDetail from '../components/MealDetail';

const IngredientsPage = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    async function fetchMealDetails() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        setMealDetails(data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    }

    fetchMealDetails();
  }, [mealId]);

  return (
    <div>
      <Header />
      <MealDetail meal={mealDetails} />
    </div>
  );
};

export default IngredientsPage;
