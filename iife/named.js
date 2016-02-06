'use strict'

;(function function1 () {
  ;(function function2 () {
    ;(function function3 () {
      ;(function function4 () {
        ;(function function5 () {
          throw new Error('unreferenced-named-iife-stack')
        })()
      })()
    })()
  })()
})()
