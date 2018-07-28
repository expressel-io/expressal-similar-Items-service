import React from 'react';
import '../styles/Items.css';
const $ = require('jquery');


const ratings = {
  prod_a : 2.8,
  prod_b : 3.3,
  prod_c : 1.9,
  prod_d : 4.3,
  prod_e : 4.74
};

const starTotal = 5;
for (const rating in ratings) {  
  // 2
  const starPercentage = (ratings[rating] / starTotal) * 100;
  // 3
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  // 4
  document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
}
export default Items;

//<i className= "fa fa-star" aria-hidden="true"></i>