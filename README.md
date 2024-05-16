# string-interpolate-polyfill

Inject mustache.render method as interpolate function to string primitive type

# How to use

```js
// js files
require('string-interpolate-polyfill');
const template = 'Hello {{world}}';
const view = {world: 'World!!!'};
console.log(template.interpolate(view));
```

```ts
// ts files
import 'string-interpolate-polyfill';
type View = { world: string }
const template = 'Hello {{world}}';
const view: View = {world: 'World!!!'};
console.log(template.interpolate<View>(view));
```

You can integrate this directly in tsconfig files like this:

```json
{
  "compilerOptions": { },
  "ts-node": { "require": ["string-interpolate-polyfill"] }
}
```