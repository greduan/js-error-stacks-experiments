'use strict'

var objA = {}

objA.a = function () {
  objA.b()
}

objA.b = function () {
  objA.c()
}

objA.c = function () {
  objA.d()
}

objA.d = function () {
  objA.e()
}

objA.e = function () {
  throw new Error('referenced-var-unnamed-stack')
}

objA.a()
