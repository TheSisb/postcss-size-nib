# PostCSS Short Size [![Build Status][ci-img]][ci]

[PostCSS] plugin that allows the use of "short:" instead of width & height.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/TheSisb/postcss-short-size.svg
[ci]:      https://travis-ci.org/TheSisb/postcss-short-size

```css
.foo {
    size: 10px;
}
.bar {
    size: 5px 10px;
}
```

```css
.foo {
    width: 10px;
    height: 10px;
}
.bar {
    width: 5px;
    height: 10px;
}
```

## Usage

```js
postcss([ require('postcss-short-size') ])
```

See [PostCSS] docs for examples for your environment.
