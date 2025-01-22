//Uebung 19

'use strict';

let username = prompt('Verrate mir deinen Namen.');
let answer = prompt(`Sei gegrüßt ${username}.\nBist du stark genug, um gegen das dunkle JavaScript anzutreten?\nja oder nein?`);

if (answer === 'ja') {
  alert('Ich wusste, dass du das sagen würdest. Deine Mission kann losgehen.');

  let quizzanswer = prompt('Welcher Operator hat die höhere Priorität?\n * oder + ?');
  if(quizzanswer === '*')
    alert(`Kluge Wahl ${username}.\nDie Antwort ${quizzanswer} ist richtig.`);
  else alert(`Schande über dein Haupt! Die richtige Antwort wäre * gewesen.`);

  quizzanswer = prompt('Welcher Operator hat die höhere Priorität?\n typeof oder % ?');
  if(quizzanswer === 'typeof')
    alert(`Kluge Wahl ${username}.\nDie Antwort ${quizzanswer} ist richtig.`);
  else alert(`Schande über dein Haupt! Die richtige Antwort wäre typeof gewesen.`);

  quizzanswer = prompt('Welcher Operator hat die höhere Priorität?\n == oder = ?');
  if(quizzanswer === '==')
    alert(`Kluge Wahl ${username}.\nDie Antwort ${quizzanswer} ist richtig.`);
  else alert(`Schande über dein Haupt! Die richtige Antwort wäre == gewesen.`);

  quizzanswer = prompt(`Was ist der Rückgabewert des Ausdrucks '5' < 'a' ?\n true oder false ?`);
  if(quizzanswer === 'true')
    alert(`Kluge Wahl ${username}.\nDie Antwort ${quizzanswer} ist richtig.`);
  else alert(`Schande über dein Haupt! Die richtige Antwort wäre true gewesen.`);

} else {
  alert('Dann komm zurück, wenn du dich stärker fühlst.');
}
