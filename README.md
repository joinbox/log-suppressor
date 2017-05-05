# Log Suppressor

Log Suppressor is a js library which supresses console.log and console.info output.

## Installation

The package is available via bower `bower install log-suppressor`

## Usage

Include the `app.min.js` file into your project.

```
<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js"></script>
<script type="application/javascript" src="bower_components/log-suppressor/dist/app.min.js"></script>
```

There are two examples in the tests folder. One with the source and the other one with the dist file.
If you are using the dist file in a ES2015 environment make sure to include the [Babel Polyfill](https://babeljs.io/docs/usage/polyfill/) in your project. (The script was not included in the dist file because it shall only be included once per project)

### Commands

`console.restore()`

If you need to restore the logs on your production system you can use `console.restore()` in the developer console of your browser. All further logs in the same session will be logged.
The restore command writes a Key in the SessionStorage to prevent log suppression.

`console.suppress()`

If you want to suppress the logs you can call `console.suppress()`. The suppress command is called by default.
