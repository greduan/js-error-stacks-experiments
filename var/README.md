# Var-defined functions stack, named vs. unnamed anonymous functions

## Error stacks

### Unnamed

```
$ node unnamed.js
/Users/greduan/Code/js-error-stacks/var/unnamed.js:20
  throw new Error('referenced-var-unnamed-stack')
  ^

Error: referenced-var-unnamed-stack
    at varE (/Users/greduan/Code/js-error-stacks/var/unnamed.js:20:9)
    at varD (/Users/greduan/Code/js-error-stacks/var/unnamed.js:16:3)
    at varC (/Users/greduan/Code/js-error-stacks/var/unnamed.js:12:3)
    at varB (/Users/greduan/Code/js-error-stacks/var/unnamed.js:8:3)
    at varA (/Users/greduan/Code/js-error-stacks/var/unnamed.js:4:3)
    at Object.<anonymous> (/Users/greduan/Code/js-error-stacks/var/unnamed.js:23:1)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
```

### Named

```
$ node named.js
/Users/greduan/Code/js-error-stacks/var/named.js:20
  throw new Error('referenced-var-named-stack')
  ^

Error: referenced-var-named-stack
    at funcE (/Users/greduan/Code/js-error-stacks/var/named.js:20:9)
    at funcD (/Users/greduan/Code/js-error-stacks/var/named.js:16:3)
    at funcC (/Users/greduan/Code/js-error-stacks/var/named.js:12:3)
    at funcB (/Users/greduan/Code/js-error-stacks/var/named.js:8:3)
    at funcA (/Users/greduan/Code/js-error-stacks/var/named.js:4:3)
    at Object.<anonymous> (/Users/greduan/Code/js-error-stacks/var/named.js:23:1)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
```

## Results

Neither provides a real benefit.  If you use a named function you'll see the
name of the func, if you use an unnamed function you'll see the name of the var.
Could really be used in both ways without a real benefit or disadvantage.
