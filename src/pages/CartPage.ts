import BasePage from './BasePage';

class CartPage extends BasePage {


	get productInCart() {
		return $('#main a.order-item-title');

	}

	get cartHeading() {
		return $('#main > div > h1');
	}

	get product() {
		return $('#product > div:nth-child(2) > div:nth-child(2) > button');
	}
	get availibilityInStock() {
		return $("//*[(text()='Galar Male Trainer Backpack')]//..//..//div[3]/span");
	}
	
}
export default new CartPage();
