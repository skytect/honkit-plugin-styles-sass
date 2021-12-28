# SASS Stylesheets for HonKit

> Forked from [GitbookIO/plugin-styles-sass](https://github.com/GitbookIO/plugin-styles-sass), updated for HonKit.

This plugin makes it easy to use SASS custom stylesheets instead of CSS for your book.

Add it to your `book.json`, with some custom stylesheets:

```js
{
    "plugins": ["styles-sass"],
    "styles": {
        "pdf": "./styles/pdf.sass"
    }
}
```
