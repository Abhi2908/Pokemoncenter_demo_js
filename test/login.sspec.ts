import { expect } from 'chai';
import LoginPage from '../src/pages/LogInPage';
import NewReleasesPage from '../src/pages/NewReleasesPage';
import CartPage from '../src/pages/CartPage';
import handleCaptcha from 'handleCaptcha';
	/**
    * Testing one module to another by doing regression 
    * @param path
    */
describe('Login page', () => {
	it('Open page successfully', () => {
		
		//login page
		LoginPage.open;
		
		// window maximize
		browser.maximizeWindow();
		
		browser.pause(5000);
		
	});

	it('verify title', () => {
		
		//verify page title
		LoginPage.homePageTitle;
		expect(LoginPage.homePageTitle).to.contains('pokemoncenter.com');
	
	
	});
	
	it('clicking on captcha and verifying successful', () => {
			
		//Entered in frame
		driver.switchToFrame(LoginPage.frame);
		
		//verify the captcha button
		expect(LoginPage.captcha.getText()).to.contains("Click to verify");
		LoginPage.captcha.click();
		
		expect(LoginPage.captcha.getText()).to.contains("Verifying");

	});
	
	it('drag and drop captcha', () => {
		
		browser.pause(3000);
		
		//handleCaptcha.runCaptcha;
		const sourceElement = $('body div.geetest_slider_button');
								//body div.geetest_slider_track
		const targetelement = $('body div.geetest_slider_track');

		sourceElement.dragAndDrop(targetelement, 400);

	});
	
	it('to go to releases page', () => {
		
		// click on new releases link
		NewReleasesPage.newReleasesLink.click();
		
		//verifying the page
		console.log(NewReleasesPage.newReleasePageVerify.getText());
		expect(NewReleasesPage.newReleasePageVerify.getText().toUpperCase()).to.contains("NEW RELEASES");

	});
	
	it('verify product on new releases page', () => {
		
		//landing on new page with URL
		NewReleasesPage.trainerBagURL;
		browser.pause(7000);
		
		//verifying the product
		expect(NewReleasesPage.newReleasePageVerify.getText().toUpperCase()).to.contains("GALAR MALE TRAINER BACKPACK");
		
		//condition applied product is out of stock or not, if yes then product will add in cart
		if (NewReleasesPage.product.isDisplayed!) {
			console.log(NewReleasesPage.product.getText());
			expect(NewReleasesPage.product.getText()).to.contains("ADD TO CART");

		} else {
			console.log("Product is : OUT OF STOCK");
			console.log(NewReleasesPage.product.getText());
			expect(NewReleasesPage.product.getText()).to.contains("OUT OF STOCK");
		}

	});
	
	
	it('add product in cart', () => {
		//click on cookie cross button
		NewReleasesPage.cookieCrossButton.click();
		browser.pause(1000);
		
		//click on prodect
		NewReleasesPage.product.click();
		expect(NewReleasesPage.productAddedMsg.getText()).to.contains("Product added to cart");
		console.log(NewReleasesPage.productAddedMsg.getText());
		
		//scrolling up
		NewReleasesPage.cart.scrollIntoView();
		
		//clicking on cart
		NewReleasesPage.cart.click();
		browser.pause(3000);
		
	});
	
	it('verify cart page', () => {
		
		//verify cart page
		console.log(CartPage.cartHeading.getText());
		expect(CartPage.cartHeading.getText()).to.contains("Shopping Cart");
		
		//verify the product which has been added from new relese pagein cart page
		expect(CartPage.productInCart.getText().toUpperCase()).to.contains("GALAR MALE TRAINER BACKPACK");
		
		// verify the product availibility in-stock on the basis of product name
    	console.log(CartPage.availibilityInStock.getText());
		expect(CartPage.availibilityInStock.getText()).to.contains("In Stock");
				
	});
});

