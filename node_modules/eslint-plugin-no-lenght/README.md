# Ensures length is properly typed (no-lenght)

This rule was created to prevent mistyping the length property.


## Rule Details

Examples of **incorrect** code for this rule:

```js

someObj.lenght

```

Examples of **correct** code for this rule:

```js

someObj.length

```

## How add rule

### .eslintrc example
```
{
  "rules": {
    "no-lenght/no-lenght": "error" // error, warn
  },
  "plugins": [
    "no-lenght"
  ]
}
```