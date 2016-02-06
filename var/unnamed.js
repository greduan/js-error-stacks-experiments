'use strict'

var varA = function () {
  varB()
}

var varB = function () {
  varC()
}

var varC = function () {
  varD()
}

var varD = function () {
  varE()
}

var varE = function () {
  throw new Error('referenced-var-unnamed-stack')
}

varA()
