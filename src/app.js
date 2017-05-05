// If we dont have a console object we can not suppress its logs
if (window && window.console) {
  new LogSuppressor();

  console.log('LogSuppressor test log: this log should be suppressed');
  console.info('LogSuppressor test info: this info should be suppressed');
}
