import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
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

  function renderMealItem(itemData) {
    return (
      <MealItem 
      title={itemData.item.title} 
      imageUrl={itemData.item.imageUrl} 
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
