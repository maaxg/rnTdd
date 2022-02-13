import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AddRestaurantModal from '../../src/components/AddRestaurantModal';



describe('AddRestaurantModal', () => {
    it('calls the onSave handler with the entered text', async () => {
        const messageText = 'Hello, World!';
        const handleSave = jest.fn((messageText) => messageText);

        const {getByTestId} = render(<AddRestaurantModal  visible={true} onSave={handleSave} />)
        const foundedInput  = getByTestId('restaurantNameInput');
        fireEvent.changeText(foundedInput, messageText)
        const foundedButton = getByTestId('saveRestaurantButton')
        fireEvent.press(foundedButton)


        expect(handleSave).toHaveBeenCalledWith(messageText)
    
    });
});