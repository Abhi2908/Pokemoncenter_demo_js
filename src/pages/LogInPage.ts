import BasePage from './BasePage';

class LoginPage extends BasePage {


	get open() {
		return browser.url('/login');

	}
	
	get frame() {
		return $('body > iframe');
	}

	get captcha() {
		return $('#captcha-container div[id] > div > div > div > div > span');
	}
	
	get captchaUnsuccessfulMsg() {
		return $('body div.geetest_result.geetest_fail.geetest_showTip > div > div.geetest_result_title');
	}

	get submit() {
		return $('body > div.geetest_fullpage_click.geetest_float.geetest_wind.geetest_slide3.geetest_voice > div.geetest_fullpage_click_wrap > div.geetest_fullpage_click_box > div > div.geetest_wrap > div.geetest_slider.geetest_move > div.geetest_slider_button');
	}

	get homePageTitle() {
		const title = browser.getTitle()
		console.log(title)
		return title;

	}
	
	get selectorDrag() {
		return $('body > div.geetest_fullpage_click.geetest_float.geetest_wind.geetest_slide3.geetest_voice > div.geetest_fullpage_click_wrap > div.geetest_fullpage_click_box > div > div.geetest_wrap > div.geetest_slider.geetest_move > div.geetest_slider_button');

	}
	
	get selectorDrop() {
		return $('body > div.geetest_fullpage_click.geetest_float.geetest_wind.geetest_slide3.geetest_voice > div.geetest_fullpage_click_wrap > div.geetest_fullpage_click_box > div > div.geetest_wrap > div.geetest_slider.geetest_move > div.geetest_slider_button');

	}
	accessForApplicaion() {

		this.submit.click();
	}
	

}
export default new LoginPage();
