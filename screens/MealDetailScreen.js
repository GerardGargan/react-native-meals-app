import { Text, Image, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealDetailsScreen({ route, navigation }) {

    const id = route.params.id;
    const meal = MEALS.find(meal => meal.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        });
    }, [navigation, meal])

    return (
        <View>
            <Image source={{uri: meal.imageUrl}} />
            <Text>{meal.title}</Text>
            <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} />
            <Text>Ingredients</Text>
            {meal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            <Text>Steps</Text>
            {meal.steps.map(step => <Text key={step}>{step}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({

});