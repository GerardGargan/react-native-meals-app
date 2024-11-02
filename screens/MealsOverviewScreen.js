import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
export default function MealsOverviewScreen({ route }) {

    const { categoryId } = route.params;

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {categoryId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});