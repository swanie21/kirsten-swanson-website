'use strict';
require ('./css/main');
import $ from 'jquery';

$('.hamburger-menu').on('click', function() {
  document.getElementById('phoneNav').style.height = '100%';
});

$('.close-menu').on('click', function() {
  document.getElementById('phoneNav').style.height = '0%';
});
