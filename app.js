'use strict';
console.log('Here\'s a hidden message\nThis is used for testing\ntesting mooore ...')

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('datee')
selectElement.innerHTML = formatDate

let timetoday = new Date()
let t = timetoday.toTimeString()
selectElement = document.getElementById('time')
selectElement.innerHTML = t




