# How to reproduce ?

```shell
npm install
npm run test:run
```

Test result should be an exception:

```text
Vitest caught 2 unhandled errors during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.
 ❯ Function.getVariable node_modules/happy-dom/lib/css/declaration/utilities/CSSStyleDeclarationValueParser.js:383:40
 ❯ Function.getTop node_modules/happy-dom/lib/css/declaration/utilities/CSSStyleDeclarationPropertySetParser.js:177:67

TypeError: value.match is not a function
 ❯ CSSStyleDeclarationPropertyManager.set node_modules/happy-dom/lib/css/declaration/utilities/CSSStyleDeclarationPropertyManager.js:419:77
 ❯ CSSStyleDeclaration.setProperty node_modules/happy-dom/lib/css/declaration/AbstractCSSStyleDeclaration.js:124:19
 ❯ CSSStyleDeclaration.set top [as top] node_modules/happy-dom/lib/css/declaration/CSSStyleDeclaration.js:3358:14

TypeError: value.match is not a function
 ❯ Function.getTop node_modules/happy-dom/lib/css/declaration/utilities/CSSStyleDeclarationPropertySetParser.js:177:67
 ❯ CSSStyleDeclarationPropertyManager.set node_modules/happy-dom/lib/css/declaration/utilities/CSSStyleDeclarationPropertyManager.js:419:77
 ❯ CSSStyleDeclaration.setProperty node_modules/happy-dom/lib/css/declaration/AbstractCSSStyleDeclaration.js:124:19
 ❯ CSSStyleDeclaration.set top [as top] node_modules/happy-dom/lib/css/declaration/CSSStyleDeclaration.js:3358:14
```
