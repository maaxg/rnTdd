import React from 'react';
import { View } from 'react-native';
import RestaurantList from './components/RestaurantList';

const App: React.FC = () => {
  
  return (
    <View style={{flex: 1}}>
        <RestaurantList />
    </View>
)};

export default App;
