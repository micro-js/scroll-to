/**
 * Modules
 */

var animate = require('@f/animate')

/**
 * Expose `scrollTo`
 */

module.exports = scrollTo

/**
 * Vars
 */

var margin = 0.001

/**
 * Scroll to position `to` relative from `offset`. `offset` defaults to the
 * current scroll position.
 */

function scrollTo (x, duration, easing, offset) {
  offset = offset || window.scrollY
  var aX = x + offset
  if (almostEqual(aX, offset, margin)) return

  animate(
    { y: offset },
    { y: aX },
    scroll,
    duration,
    easing
  )
}

/**
 * Scroll vertically to position.
 */

function scroll (props) {
  window.scrollTo(0, props.y)
}

/**
 * Check if two numbers are almost equal.
 */

function almostEqual(a, b, margin) {
  return (a > (b - margin)) && (a < (b + margin))
}
