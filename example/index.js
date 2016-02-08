
var toArray = require('@f/to-array')
var easeOutQuint = require('eases/quint-in-out')
var scrollTo = require('../')

var buttons = document.getElementsByClassName('button')

toArray(buttons).forEach(function (button) {
  button.addEventListener('click', function (e) {
    scrollToNext(e.target.dataset.next)
  })
})

function scrollToNext (n) {
  var el = document.getElementById('js-block-' + n)
  var bounds = el.getBoundingClientRect()
  scrollTo(bounds.top, 500, easeOutQuint)
}

window.scrollToNext = scrollToNext
