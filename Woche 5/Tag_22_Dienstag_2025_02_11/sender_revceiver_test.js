'use strict';

const sendMessage = (
  message,
  {
   from: {firstName: senderFirstName, lastName: senderLastName} = {firstName: "Maxine1", lastName: "Musterfrau1"},
   to: {firstName: receiverFirstName, lastName: receiverLastName} = {firstName: "Max1", lastName: "Mustermann1"}
  } =
  {
    from: {firstName: "Maxine2", lastName: "Musterfrau2"},
    to: {firstName: "Max2", lastName: "Mustermann2"}
   } 
) => {
console.log(`E-Mail was sent form ${senderFirstName} ${senderLastName} to ${receiverFirstName} ${receiverLastName}.`)
};

const person1 = {
  firstName: "Anja",
  lastName: "Dannenberg",
}

const person2 = {
  firstName: "Timur",
  lastName: "Bahadir",
}

const person3 = {
}

sendMessage('Hallo');
sendMessage('Hallo', {});
sendMessage('Hallo', {from: {firstName:'Sara', lastName: 'Müller'}});
sendMessage('Hallo', {from: {firstName:'Sara', lastName: 'Müller'}, to: {firstName: 'Jens', lastName: 'Simon'}});
sendMessage('Hallo', {to: {firstName: 'Jens', lastName: 'Simon'}});