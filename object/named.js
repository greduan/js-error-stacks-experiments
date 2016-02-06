'use strict'

var obj = {}

obj.a = function funcA () {
  obj.b()
}

obj.b = function funcB () {
  obj.c()
}

obj.c = function funcC () {
  obj.d()
}

obj.d = function funcD () {
  obj.e()
}

obj.e = function funcE () {
  throw new Error('referenced-var-named-stack')
}

obj.a()
