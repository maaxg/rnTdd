import React from 'react';
import { Button, TextInput, View } from 'react-native';

interface Props{
    visible: boolean;
    onSave: (restaurantName: string) => void;
}

const AddRestaurantModal: React.FC<Props> = ({visible, onSave}) => {
    const [restaurantName, setRestaurantName] = React.useState('');
    function onSaveRestaurant(){
        onSave(restaurantName)
    }

    if(!visible) return null;
    return  (
        <View>
            <TextInput testID='restaurantNameInput' onChangeText={setRestaurantName} />
            <Button testID='saveRestaurantButton' title="Save restaurant" onPress={onSaveRestaurant} />
        </View>
    );
}

export default AddRestaurantModal;