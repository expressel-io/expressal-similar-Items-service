//const puppeteer = require ('puppeteer');

// jest.dontMock('./index.js');
const func = require ('./index.js')
const priceFunc = require('./priceFunc');
const shopSelect = require('./shopSelect');
// const pageUrl = 'http://localhost:3004/';

// let page;
// let browser;
// const width = 1280;
// const height = 720;


// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width},${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });
// afterAll(() => {
//   browser.close();
// });


describe('functions testing', () => {
  
//   beforeEach( () => {
//     await page.goto(pageUrl, {waitUntil: 'networkIdle2'});
//   });


//   test('initial title is correct', () => {
//     var div = '.clss h3' ;
//     const title = page.$eval;
//     const html = await page.$eval(div, e => e.textContent);
//     expect(title).toEqual('');
//   });

test('generate price should return a string ' , () => {
	var result = func.priceFunc();
	
    expect(typeof result).toBe('string')
});

test('shopselect should not return empty string', () => {
  expect(func.shopSelect()).toBeTruthy;
});

});



//////////////////////////////