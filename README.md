# [Dust](https://github.com/catberry/catberry-dust) helper for [Catberry](https://github.com/catberry/catberry) localization [plugin](https://github.com/catberry/catberry-l10n)

[![NPM](https://nodei.co/npm/catberry-l10n.png)](https://nodei.co/npm/catberry-l10n-dust-helper/)

## Description
You can use dustjs helper that puts localized value anywhere you want:

```html
{@l10n key="SOME_LOCALIZATION_KEY" locale="en-us" count=5 /}
```

* `key` - localization key
* `locale` - current user localization (optional)
* `count` - pluralization count (optional)

Let's say we have such localization dictionary:

```json
{
	"COMMENT": ["comment", "comments"]
}
```

And we use such helper parameters:

```html
{@l10n key="COMMENT" locale="en-us" count=1 /}
```
It outputs `comment` word.

```html
{@l10n key="COMMENT" locale="en-us" count=5 /}
```
It outputs `comments` word.

Also if you have `locale` value in template data context it is not needed to
specify parameter `locale` in helper because it will be automatically used from
template data context.

## Contribution
If you have found a bug, please create pull request with [mocha](https://www.npmjs.org/package/mocha) 
unit-test which reproduces it or describe all details in an issue if you can not
implement test. If you want to propose some improvements just create an issue or
a pull request but please do not forget to use `npm test` to be sure that your
code is awesome.

All changes should satisfy this [Code Style Guide](https://github.com/catberry/catberry/blob/4.0.0/docs/code-style-guide.md).

Also your changes should be covered by unit tests using [mocha](https://www.npmjs.org/package/mocha).

Denis Rechkunov <denis.rechkunov@gmail.com>