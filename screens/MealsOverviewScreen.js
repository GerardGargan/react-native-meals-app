import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
export default function MealsOverviewScreen({ route }) {

    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(itemData) {
        return (
            <MealItem title={itemData.item.title} />
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
    }
});