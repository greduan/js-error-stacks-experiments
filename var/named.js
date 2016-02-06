'use strict'

var varA = function funcA () {
  varB()
}

var varB = function funcB () {
  varC()
}

var varC = function funcC () {
  varD()
}

var varD = function funcD () {
  varE()
}

var varE = function funcE () {
  throw new Error('referenced-var-named-stack')
}

varA()
