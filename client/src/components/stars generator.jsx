import React, { Component } from 'react';
import $ from 'jquery';

const generate1 = () => {
  const $msg = $('<span></span>');
  $msg.addClass('fa fa-star checked');
  return $msg;
};

const generate2 = () => {
  const $msg = $('<span></span>');
  $msg.addClass('fa fa-star');
  return $msg;
};

const num = Math.floor(Math.random() * Math.floor(5));
for (const i = 0; i < num; i++) {
  generate1();
}

for (const i = 0; i < 5 - num; i++) {
  generate2();
}


//<i className= "fa fa-star" aria-hidden="true"></i>