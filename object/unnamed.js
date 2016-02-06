'use strict'

var foo = {}

foo.a = function () {
  foo.b()
}

foo.b = function () {
  foo.c()
}

foo.c = function () {
  foo.d()
}

foo.d = function () {
  foo.e()
}

foo.e = function () {
  throw new Error('referenced-var-unnamed-stack')
}

foo.a()
