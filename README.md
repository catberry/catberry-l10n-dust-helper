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

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/catberry) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-l10n-dust-helper/issues)
* [Submit a PR](https://github.com/catberry/catberry-l10n-dust-helper/blob/develop/CONTRIBUTING.md)

Denis Rechkunov <denis.rechkunov@gmail.com>