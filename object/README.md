# Var-defined functions stack, named vs. unnamed anonymous functions

## Error stacks

### Unnamed

```
$ node unnamed.js
/Users/greduan/Code/js-error-stacks/object/unnamed.js:22
  throw new Error('referenced-var-unnamed-stack')
  ^

Error: referenced-var-unnamed-stack
    at Object.objA.e (/Users/greduan/Code/js-error-stacks/object/unnamed.js:22:9)
    at Object.objA.d (/Users/greduan/Code/js-error-stacks/object/unnamed.js:18:7)
    at Object.objA.c (/Users/greduan/Code/js-error-stacks/object/unnamed.js:14:7)
    at Object.objA.b (/Users/greduan/Code/js-error-stacks/object/unnamed.js:10:7)
    at Object.objA.a (/Users/greduan/Code/js-error-stacks/object/unnamed.js:6:7)
    at Object.<anonymous> (/Users/greduan/Code/js-error-stacks/object/unnamed.js:25:5)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
```

### Named

```
$ node named.js
/Users/greduan/Code/js-error-stacks/object/named.js:22
  throw new Error('referenced-var-named-stack')
  ^

Error: referenced-var-named-stack
    at Object.funcE [as e] (/Users/greduan/Code/js-error-stacks/object/named.js:22:9)
    at Object.funcD [as d] (/Users/greduan/Code/js-error-stacks/object/named.js:18:7)
    at Object.funcC [as c] (/Users/greduan/Code/js-error-stacks/object/named.js:14:7)
    at Object.funcB [as b] (/Users/greduan/Code/js-error-stacks/object/named.js:10:7)
    at Object.funcA [as a] (/Users/greduan/Code/js-error-stacks/object/named.js:6:7)
    at Object.<anonymous> (/Users/greduan/Code/js-error-stacks/object/named.js:25:5)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
```

## Results

If the function is referenced, i.e. assigned to a variable, if you name it says
`at Object.funcE [as e]`, completely omiting mention of the object that is
holding the function, in this case named `foo`.  If unnamed, however, it still
retains a reference to the `foo` object in the error stack.

In my opinion it's more valuable to have unnamed functions when being referenced
in an object.
