'use strict'

var objA = {}

objA.a = function funcA () {
  objA.b()
}

objA.b = function funcB () {
  objA.c()
}

objA.c = function funcC () {
  objA.d()
}

objA.d = function funcD () {
  objA.e()
}

objA.e = function funcE () {
  throw new Error('referenced-var-named-stack')
}

objA.a()
