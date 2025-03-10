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