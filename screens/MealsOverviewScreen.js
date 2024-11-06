import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  
  useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
      navigation.setOptions({
        title: categoryTitle
      });
  }, [navigation, categoryId])

  return (<MealsList items={displayedMeals} />);
  
}

