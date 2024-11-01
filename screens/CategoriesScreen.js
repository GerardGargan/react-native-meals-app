import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

export default function CategoriesScreen() {
    return (
        <FlatList
        data={CATEGORIES} 
        renderItem={(data) => renderCategoryItem(data)}
        keyExtractor={(category) => category.id}
        />
    );
}