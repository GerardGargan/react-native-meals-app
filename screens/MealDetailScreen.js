import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

// import { FavoritesContext } from "../store/context/favorites-context";


export default function MealDetailsScreen({ route, navigation }) {
  const id = route.params.id;
  const meal = MEALS.find((meal) => meal.id === id);

  // const favoriteCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(id);

  function changeFavoriteStatusHandler() {
    if(mealIsFavorite) {
      // favoriteCtx.removeFavorite(id);
      dispatch(removeFavorite({id}));
    } else {
      // favoriteCtx.addFavorite(id);
      dispatch(addFavorite({id}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color='white' onPress={changeFavoriteStatusHandler} />
      }
    });
  }, [navigation, meal, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: 'white'
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center'
  }
});
