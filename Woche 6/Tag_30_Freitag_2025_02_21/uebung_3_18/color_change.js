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

  $on($$('input[type=range]'), 'input', changeBackgroundColorBySlider);
}

const changeBackgroundColorByButton = (event) => {
  const color = event.target.innerHTML;
  if (color === 'Red') {
    $('body').style.backgroundColor = 'rgb(255, 0, 0)';
    $('#red-slider').value = 255;
    $('#green-slider').value = 0;
    $('#blue-slider').value = 0;
  }
  if (color === 'Green') {
    $('body').style.backgroundColor = 'rgb(0, 255, 0)';
    $('#red-slider').value = 0;
    $('#green-slider').value = 255;
    $('#blue-slider').value = 0;
  }
  if (color === 'Blue') {
    $('body').style.backgroundColor = 'rgb(0, 0, 255)';
    $('#red-slider').value = 0;
    $('#green-slider').value = 0;
    $('#blue-slider').value = 255;
  }
}

const changeBackgroundColorBySlider = () => {
  const red = $('#red-slider').value;
  const green = $('#green-slider').value;
  const blue = $('#blue-slider').value;
  $('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

init();