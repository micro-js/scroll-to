/**
 * Imports
 */

var scrollTo = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should scroll down', setup(function (t, end) {
  t.equal(window.scrollY, 0, 'scroll position is 0')
  scrollTo(200, 500)

  setTimeout(function () {
    t.equal(window.scrollY, 200, 'moves to the given endpoint')
    end()
  }, 600)
}))

test('should scroll up', setup(function (t, end) {
  window.scrollTo(0, 200)
  scrollTo(0, 500)

  setTimeout(function () {
    t.equal(window.scrollY, 0, 'moves to the given endpoint')
    end()
  }, 600)
}))

function setup (fn) {
  var prevHeight = document.body.style.height
  document.body.style.height = '4000px'

  return function (t) {
    fn(t, function () {
      window.scrollTo(0, 0)
      document.body.style.height = prevHeight
      t.end()
    })
  }
}
