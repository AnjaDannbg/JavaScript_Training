'use strict';

// Alle Paragraphen grau färben, nicht nicht by_info_text sind.
document.querySelectorAll('p:not(.buy_info_text)').forEach( p => p.classList.add('gray'));

// Alle Listenpunkte grau färben, die keine andere Klasse haben.
const listenpunkte = Array.from(document.querySelectorAll('li')).filter(li => li.classList.length === 0);

listenpunkte.forEach( li => li.classList.add('gray'));