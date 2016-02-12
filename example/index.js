
var toArray = require('@f/to-array')
var easeOutQuint = require('eases/quint-in-out')
var scrollTo = require('../')

document.getElementById('js-btn-scroll-up').addEventListener('click', function (e) {
  scrollTo(-400, 500, easeOutQuint)
})

document.getElementById('js-btn-scroll-down').addEventListener('click', function (e) {
  scrollTo(+400, 500, easeOutQuint)
})
