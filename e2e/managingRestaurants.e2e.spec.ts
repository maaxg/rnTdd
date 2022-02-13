import detox, {element, expect, by} from 'detox';
import 'jest-circus';
describe('Managing restaurants', () => {
  beforeAll(async () => {
        await detox.device.launchApp({newInstance: true});
  })

  it('should allow creating a restaurant', async () => {
    const restaurantName = `Hamburguer Burguer ${new Date().toDateString()}`;

    await element(by.id('newRestaurantButton')).tap();
    await element(by.id('restaurantNameInput')).typeText(restaurantName);

    await element(by.id('saveRestaurantButton')).tap();
    
    await expect(element(by.id('restaurantList'))).toBeVisible();

    await expect(element(by.id('restaurantNameInput'))).not.toBeVisible();

  });

});
