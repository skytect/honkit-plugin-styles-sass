# SASS Stylesheets for HonKit

> Forked from [GitbookIO/plugin-styles-sass](https://github.com/GitbookIO/plugin-styles-sass).

This plugin makes it easy to use SASS custom stylesheets instead of CSS for your book.

Install it:

```bash
npm install --dev honkit-plugin-styles-sass # if you use npm
yarn add --dev honkit-plugin-styles-sass # if you use yarn

# If you encounter the error "error: no template named 'remove_cv_t' in namespace 'std'; did you mean 'remove_cv'?", you might need to do this:
CXXFLAGS="--std=c++17" npm install --dev honkit-plugin-styles-sass # if you use npm
CXXFLAGS="--std=c++17" yarn add --dev honkit-plugin-styles-sass # if you use yarn
```

Add it to your `book.json`, with some custom stylesheets:

```js
{
    "plugins": ["styles-sass"],
    "styles": {
        "pdf": "./pdf.scss",
        "website": "./website.scss"
    }
}
```
