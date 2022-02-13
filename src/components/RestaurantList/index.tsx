import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import AddRestaurantModal from '../AddRestaurantModal';

const RestaurantList: React.FC = () => {
    const [isAddModalVisible, setIsAddModalVisible] = React.useState(false);
    const [restaurantNames, setRestaurantNames] = React.useState<Array<string>>([]);

    function onPressNewRestaurant() {
        setIsAddModalVisible(true);
    }
    function onSave(restaurantName: string){
        setIsAddModalVisible(false);
        setRestaurantNames((prevState) => [...prevState, restaurantName]);
    }
    return (
        <View>
            <Button title="New Restaurant" testID="newRestaurantButton" onPress={onPressNewRestaurant} />
            <AddRestaurantModal visible={isAddModalVisible}  onSave={onSave} />
            <FlatList
                data={restaurantNames}
                testID="restaurantList"
                scrollEnabled={true}
                keyExtractor={(item) => item} 
                renderItem={({item}) => (
                    <Text style={{fontSize: 22}}>{item}</Text>
                )} 
            />
        </View>
    );
}

export default RestaurantList;