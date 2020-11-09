import BasePage from './BasePage';

class NewReleasesPage extends BasePage {


	get newReleasesLink() {
		return $('#__next > header div > div:nth-child(1) > a > strong');

	}

	get newReleasePageVerify() {
		return $('#main h1');
	}

	get product() {
		return $('#product > div:nth-child(2) > div:nth-child(2) > button');
	}
	
	get cart() {
		return $('#__next > header ul > li:nth-child(2) > a > span');
	}

	get gettingAudio() {
		return $('body > div.geetest_fullpage_click.geetest_float.geetest_wind.geetest_slide3.geetest_voice > div.geetest_fullpage_click_wrap > div.geetest_fullpage_click_box > div > div > div > div.geetest_box > div.geetest_background > div.geetest_pic_tip > div.geetest_replay');
	}
	
	get trainerBagURL() {
		return browser.url('https://www.pokemoncenter.com/product/710-06499/galar-male-trainer-backpack');

	}
	
	get cookieCrossButton() {
		return $('#__next > footer p > button');

	}
	
	get productAddedMsg() {
		return $('#client-snackbar');

	}

	get pageNotFound() {
		return $('#main > div > div > h1').getText;

	}
	get selectorDrag() {
		return $('body > div.geetest_fullpage_click.geetest_float.geetest_wind.geetest_slide3.geetest_voice > div.geetest_fullpage_click_wrap > div.geetest_fullpage_click_box > div > div.geetest_wrap > div.geetest_slider.geetest_move > div.geetest_slider_button');

	}
	get selectorDrop() {
		return $('body > div.geetest_fullpage_click.geetest_float.geetest_wind.geetest_slide3.geetest_voice > div.geetest_fullpage_click_wrap > div.geetest_fullpage_click_box > div > div.geetest_wrap > div.geetest_slider.geetest_move > div.geetest_slider_button');

	}
	

}
export default new NewReleasesPage();
