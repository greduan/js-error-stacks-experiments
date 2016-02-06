# IIFE stack, named vs. unnamed anonymous functions

## Error stacks

### Unnamed

```
$ node unnamed.js
/Users/greduan/Code/js-error-stacks/iife/unnamed.js:8
          throw new Error('unreferenced-unnamed-iife-stack')
          ^

Error: unreferenced-unnamed-iife-stack
    at /Users/greduan/Code/js-error-stacks/iife/unnamed.js:8:17
    at /Users/greduan/Code/js-error-stacks/iife/unnamed.js:9:11
    at /Users/greduan/Code/js-error-stacks/iife/unnamed.js:10:9
    at /Users/greduan/Code/js-error-stacks/iife/unnamed.js:11:7
    at /Users/greduan/Code/js-error-stacks/iife/unnamed.js:12:5
    at Object.<anonymous> (/Users/greduan/Code/js-error-stacks/iife/unnamed.js:13:3)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
```

### Named

```
$ node named.js
/Users/greduan/Code/js-error-stacks/iife/named.js:8
          throw new Error('unreferenced-named-iife-stack')
          ^

Error: unreferenced-named-iife-stack
    at function5 (/Users/greduan/Code/js-error-stacks/iife/named.js:8:17)
    at function4 (/Users/greduan/Code/js-error-stacks/iife/named.js:9:11)
    at function3 (/Users/greduan/Code/js-error-stacks/iife/named.js:10:9)
    at function2 (/Users/greduan/Code/js-error-stacks/iife/named.js:11:7)
    at function1 (/Users/greduan/Code/js-error-stacks/iife/named.js:12:5)
    at Object.<anonymous> (/Users/greduan/Code/js-error-stacks/iife/named.js:13:3)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
```

## Results

Clearly named functions are better in this case.  Unnamed functions only tell
you the line in the code, while named functions give you the name of the
function in addition to the line in the file.
