// import { useContext } from "react";
import { View, Text } from 'react-native';
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
    // const favoriteCtx = useContext(FavoritesContext);
    const favoriteIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteIds.includes(meal.id));

    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals} />
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});