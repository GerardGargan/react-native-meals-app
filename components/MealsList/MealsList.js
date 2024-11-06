import { View, FlatList, StyleSheet, Text } from 'react-native';
import MealItem from './MealItem';

export default function MealsList({items}) {
    function renderMealItem(itemData) {
        return (
          <MealItem 
          title={itemData.item.title} 
          imageUrl={itemData.item.imageUrl} 
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          id={itemData.item.id}
          />
        );
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
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
  