// Parameteranzahl und Argumentenanzahl sind unterschiedlich

// Parameter
const printText = (text) => {
  console.log(text);
}

// Argumente

printText();

printText('Hallo', 'ups');

// Funktion mit unendlich vielen Parametern

// EINEN Rest-Parameter (...names) ansetzen und damit unendlich viele Argumente auffangen
const unendlichVieleParameter = (msg, ...names) => {
  names.forEach((name) => console.log(msg + ' ' + name));
}

unendlichVieleParameter('Hallo', 'Herbert', 'Anne', 'Klaus', 'Vivien');