// //const puppeteer = require ('puppeteer');

// // jest.dontMock('./index.js');
// const func = require ('./index.js')
// const priceFunc = require('./priceFunc');
// const shopSelect = require('./shopSelect');
// // const pageUrl = 'http://localhost:3004/';

// // let page;
// // let browser;
// // const width = 1280;
// // const height = 720;


// // beforeAll(async () => {
// //   browser = await puppeteer.launch({
// //     headless: false,
// //     slowMo: 80,
// //     args: [`--window-size=${width},${height}`]
// //   });
// //   page = await browser.newPage();
// //   await page.setViewport({ width, height });
// // });
// // afterAll(() => {
// //   browser.close();
// // });


// describe('functions testing', () => {

// //   beforeEach( () => {
// //     await page.goto(pageUrl, {waitUntil: 'networkIdle2'});
// //   });


// //   test('initial title is correct', () => {
// //     var div = '.clss h3' ;
// //     const title = page.$eval;
// //     const html = await page.$eval(div, e => e.textContent);
// //     expect(title).toEqual('');
// //   });

// test('generate price should return a string ' , () => {
// 	var result = func.generatePriceFunc();

//     expect(typeof result).toBe('string')
// });

// test('shopselect should not return empty string', () => {
//   expect(func.shopSelect()).toBeTruthy;
// });

// });


//////////////////////////////
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFJQSIsImZpbGUiOiJpbmRleC50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy9jb25zdCBwdXBwZXRlZXIgPSByZXF1aXJlICgncHVwcGV0ZWVyJyk7XHJcblxyXG4vLyAvLyBqZXN0LmRvbnRNb2NrKCcuL2luZGV4LmpzJyk7XHJcbi8vIGNvbnN0IGZ1bmMgPSByZXF1aXJlICgnLi9pbmRleC5qcycpXHJcbi8vIGNvbnN0IHByaWNlRnVuYyA9IHJlcXVpcmUoJy4vcHJpY2VGdW5jJyk7XHJcbi8vIGNvbnN0IHNob3BTZWxlY3QgPSByZXF1aXJlKCcuL3Nob3BTZWxlY3QnKTtcclxuLy8gLy8gY29uc3QgcGFnZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDQvJztcclxuXHJcbi8vIC8vIGxldCBwYWdlO1xyXG4vLyAvLyBsZXQgYnJvd3NlcjtcclxuLy8gLy8gY29uc3Qgd2lkdGggPSAxMjgwO1xyXG4vLyAvLyBjb25zdCBoZWlnaHQgPSA3MjA7XHJcblxyXG5cclxuLy8gLy8gYmVmb3JlQWxsKGFzeW5jICgpID0+IHtcclxuLy8gLy8gICBicm93c2VyID0gYXdhaXQgcHVwcGV0ZWVyLmxhdW5jaCh7XHJcbi8vIC8vICAgICBoZWFkbGVzczogZmFsc2UsXHJcbi8vIC8vICAgICBzbG93TW86IDgwLFxyXG4vLyAvLyAgICAgYXJnczogW2AtLXdpbmRvdy1zaXplPSR7d2lkdGh9LCR7aGVpZ2h0fWBdXHJcbi8vIC8vICAgfSk7XHJcbi8vIC8vICAgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xyXG4vLyAvLyAgIGF3YWl0IHBhZ2Uuc2V0Vmlld3BvcnQoeyB3aWR0aCwgaGVpZ2h0IH0pO1xyXG4vLyAvLyB9KTtcclxuLy8gLy8gYWZ0ZXJBbGwoKCkgPT4ge1xyXG4vLyAvLyAgIGJyb3dzZXIuY2xvc2UoKTtcclxuLy8gLy8gfSk7XHJcblxyXG5cclxuLy8gZGVzY3JpYmUoJ2Z1bmN0aW9ucyB0ZXN0aW5nJywgKCkgPT4ge1xyXG4gIFxyXG4vLyAvLyAgIGJlZm9yZUVhY2goICgpID0+IHtcclxuLy8gLy8gICAgIGF3YWl0IHBhZ2UuZ290byhwYWdlVXJsLCB7d2FpdFVudGlsOiAnbmV0d29ya0lkbGUyJ30pO1xyXG4vLyAvLyAgIH0pO1xyXG5cclxuXHJcbi8vIC8vICAgdGVzdCgnaW5pdGlhbCB0aXRsZSBpcyBjb3JyZWN0JywgKCkgPT4ge1xyXG4vLyAvLyAgICAgdmFyIGRpdiA9ICcuY2xzcyBoMycgO1xyXG4vLyAvLyAgICAgY29uc3QgdGl0bGUgPSBwYWdlLiRldmFsO1xyXG4vLyAvLyAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHBhZ2UuJGV2YWwoZGl2LCBlID0+IGUudGV4dENvbnRlbnQpO1xyXG4vLyAvLyAgICAgZXhwZWN0KHRpdGxlKS50b0VxdWFsKCcnKTtcclxuLy8gLy8gICB9KTtcclxuXHJcbi8vIHRlc3QoJ2dlbmVyYXRlIHByaWNlIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgJyAsICgpID0+IHtcclxuLy8gXHR2YXIgcmVzdWx0ID0gZnVuYy5nZW5lcmF0ZVByaWNlRnVuYygpO1xyXG5cdFxyXG4vLyAgICAgZXhwZWN0KHR5cGVvZiByZXN1bHQpLnRvQmUoJ3N0cmluZycpXHJcbi8vIH0pO1xyXG5cclxuLy8gdGVzdCgnc2hvcHNlbGVjdCBzaG91bGQgbm90IHJldHVybiBlbXB0eSBzdHJpbmcnLCAoKSA9PiB7XHJcbi8vICAgZXhwZWN0KGZ1bmMuc2hvcFNlbGVjdCgpKS50b0JlVHJ1dGh5O1xyXG4vLyB9KTtcclxuXHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8iXX0=