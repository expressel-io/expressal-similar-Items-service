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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFJQSIsImZpbGUiOiJpbmRleC50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy9jb25zdCBwdXBwZXRlZXIgPSByZXF1aXJlICgncHVwcGV0ZWVyJyk7XG5cbi8vIC8vIGplc3QuZG9udE1vY2soJy4vaW5kZXguanMnKTtcbi8vIGNvbnN0IGZ1bmMgPSByZXF1aXJlICgnLi9pbmRleC5qcycpXG4vLyBjb25zdCBwcmljZUZ1bmMgPSByZXF1aXJlKCcuL3ByaWNlRnVuYycpO1xuLy8gY29uc3Qgc2hvcFNlbGVjdCA9IHJlcXVpcmUoJy4vc2hvcFNlbGVjdCcpO1xuLy8gLy8gY29uc3QgcGFnZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDQvJztcblxuLy8gLy8gbGV0IHBhZ2U7XG4vLyAvLyBsZXQgYnJvd3Nlcjtcbi8vIC8vIGNvbnN0IHdpZHRoID0gMTI4MDtcbi8vIC8vIGNvbnN0IGhlaWdodCA9IDcyMDtcblxuXG4vLyAvLyBiZWZvcmVBbGwoYXN5bmMgKCkgPT4ge1xuLy8gLy8gICBicm93c2VyID0gYXdhaXQgcHVwcGV0ZWVyLmxhdW5jaCh7XG4vLyAvLyAgICAgaGVhZGxlc3M6IGZhbHNlLFxuLy8gLy8gICAgIHNsb3dNbzogODAsXG4vLyAvLyAgICAgYXJnczogW2AtLXdpbmRvdy1zaXplPSR7d2lkdGh9LCR7aGVpZ2h0fWBdXG4vLyAvLyAgIH0pO1xuLy8gLy8gICBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG4vLyAvLyAgIGF3YWl0IHBhZ2Uuc2V0Vmlld3BvcnQoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuLy8gLy8gfSk7XG4vLyAvLyBhZnRlckFsbCgoKSA9PiB7XG4vLyAvLyAgIGJyb3dzZXIuY2xvc2UoKTtcbi8vIC8vIH0pO1xuXG5cbi8vIGRlc2NyaWJlKCdmdW5jdGlvbnMgdGVzdGluZycsICgpID0+IHtcbiAgXG4vLyAvLyAgIGJlZm9yZUVhY2goICgpID0+IHtcbi8vIC8vICAgICBhd2FpdCBwYWdlLmdvdG8ocGFnZVVybCwge3dhaXRVbnRpbDogJ25ldHdvcmtJZGxlMid9KTtcbi8vIC8vICAgfSk7XG5cblxuLy8gLy8gICB0ZXN0KCdpbml0aWFsIHRpdGxlIGlzIGNvcnJlY3QnLCAoKSA9PiB7XG4vLyAvLyAgICAgdmFyIGRpdiA9ICcuY2xzcyBoMycgO1xuLy8gLy8gICAgIGNvbnN0IHRpdGxlID0gcGFnZS4kZXZhbDtcbi8vIC8vICAgICBjb25zdCBodG1sID0gYXdhaXQgcGFnZS4kZXZhbChkaXYsIGUgPT4gZS50ZXh0Q29udGVudCk7XG4vLyAvLyAgICAgZXhwZWN0KHRpdGxlKS50b0VxdWFsKCcnKTtcbi8vIC8vICAgfSk7XG5cbi8vIHRlc3QoJ2dlbmVyYXRlIHByaWNlIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgJyAsICgpID0+IHtcbi8vIFx0dmFyIHJlc3VsdCA9IGZ1bmMuZ2VuZXJhdGVQcmljZUZ1bmMoKTtcblx0XG4vLyAgICAgZXhwZWN0KHR5cGVvZiByZXN1bHQpLnRvQmUoJ3N0cmluZycpXG4vLyB9KTtcblxuLy8gdGVzdCgnc2hvcHNlbGVjdCBzaG91bGQgbm90IHJldHVybiBlbXB0eSBzdHJpbmcnLCAoKSA9PiB7XG4vLyAgIGV4cGVjdChmdW5jLnNob3BTZWxlY3QoKSkudG9CZVRydXRoeTtcbi8vIH0pO1xuXG4vLyB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyJdfQ==