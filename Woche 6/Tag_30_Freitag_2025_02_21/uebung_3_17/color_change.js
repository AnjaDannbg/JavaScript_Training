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
  $on($$('button'), 'click', changeBackgroundColor);
}

const changeBackgroundColor = (event) => {
  const COLOR = event.target.innerHTML;
  if (COLOR === 'Red') $('body').style.backgroundColor = 'red';
  if (COLOR === 'Green') $('body').style.backgroundColor = 'green';
  if (COLOR === 'Blue') $('body').style.backgroundColor = 'blue';
}

init();