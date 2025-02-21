'use strict';

const $ = (qs) => document.querySelector(qs);

const $$ = (qs) => Array.from(document.querySelectorAll(qs));

const $on = (el, ev, fn) => {
  Array.isArray(el)
    ? el.forEach((ae) => {
        return $on(ae, ev, fn);
      })
    : el.addEventListener(ev, fn);
  return el;
};


const init = () => {
  
  $on($$('button'), 'click', changeBackgroundColorByButton);

  $on($$('input[type=range]'), 'click', changeBackgroundColorBySlider);
}

const changeBackgroundColorByButton = (event) => {
  const COLOR = event.target.innerHTML;
  if (COLOR === 'Red') {
    $('body').style.backgroundColor = 'rgb(255, 0, 0)';
    $('#red-slider').value = 255;
    $('#green-slider').value = 0;
    $('#blue-slider').value = 0;
  }
  if (COLOR === 'Green') {
    $('body').style.backgroundColor = 'rgb(0, 255, 0)';
    $('#red-slider').value = 0;
    $('#green-slider').value = 255;
    $('#blue-slider').value = 0;
  }
  if (COLOR === 'Blue') {
    $('body').style.backgroundColor = 'rgb(0, 0, 255)';
    $('#red-slider').value = 0;
    $('#green-slider').value = 0;
    $('#blue-slider').value = 255;
  }
}

const changeBackgroundColorBySlider = (event) => {
  const RED = $('#red-slider').value;
  const GREEN = $('#green-slider').value;
  const BLUE = $('#blue-slider').value;
  $('body').style.backgroundColor = `rgb(${RED}, ${GREEN}, ${BLUE})`
}

init();