# WebdriverIO_v5_TypeScript

This is a boilerplate project that uses WebdriverIO v5 and TypeScript v3. This project is useful not only as an example of WebdriverIO v5 and TypeScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Getting Started
```
git clone git@github.com:jpolley/WebdriverIO_v5_TypeScript.git
cd WebdriverIO_v5_TypeScript
npm install
node ./node_modules/@wdio/cli/bin/wdio.js wdio.conf.js
```

## Why TypeScript
TypeScript offers the benefit of types, but you won't find them in this project. I have found TypeScript to be great because of the IDE intellisense and support for the latest JavaScript features: 

![intellisense](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/intellisense.png)

You no longer need to explicitly compile your TypeScript to JavaScript using the command `tsc`. This project uses ts-node/register and tsconfig-paths as detailed on the [WebdriverIO TypeScript setup](https://webdriver.io/docs/typescript.html) page. 

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like `loginPage` that allow you to write more concise tests. 

## Test examples
The tests in this project use [https://www.pokemoncenter.com/](https://www.pokemoncenter.com/) to demonstrate how to interact with some of the most common UI elements you will encounter. Including: handle iframe, drag and drop, verify captcha, new releases page , verify the selected product in cart. The [official documentation](https://webdriver.io/docs/api.html) already covers most of these but it never hurts to see a practical example wired up and working. 

## CI examples

| Service | Cost | Notes  |
| --- | ---| --- |
| CircleCI [![CircleCI](https://circleci.com/gh/jpolley/WebdriverIO_v5_TypeScript/tree/master.svg?style=svg)](https://circleci.com/gh/jpolley/WebdriverIO_v5_TypeScript/tree/master) | Paid | CircleCI was pretty easy to setup. Basic config is here `.circleci/config.yml` |
| Codeship [![Codeship Status for jpolley/WebdriverIO_v5_TypeScript](https://app.codeship.com/projects/025dab80-3170-0137-1949-12f5204c6489/status?branch=master)](https://app.codeship.com/) | Paid | Codeship was also really easy to configure. |
| TravisCI [![Build Status](https://travis-ci.org/jpolley/WebdriverIO_v5_TypeScript.svg?branch=travisci)](https://travis-ci.org/jpolley/WebdriverIO_v5_TypeScript) | Paid | Travis CI took a little more effort and I was only able to get it running in headless mode so I left those changes [in another branch](https://github.com/jpolley/WebdriverIO_v5_TypeScript/tree/travisci) instead of merging them to master. |
| Jenkins | Free | Using [Jenkins Blue Ocean](https://jenkins.io/doc/book/blueocean/getting-started/) is a great option. While it is more work initially to setup, I've found it to be relatively painless. The `Jenkinsfile` uses one of the pre-built circleci browser images with most everything you need already installed. |  

## Reporters
This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html). The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run `npm run report` to generate the allure report. It's nifty. 

Allure Overview: 
![allure](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/allure.png)

Example of failed test with screenshot: 
![screenshot](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/screenshot.png)
