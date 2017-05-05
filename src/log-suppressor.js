'use strict';

class LogSuppressor {

  constructor() {
    this.checkSessionStorageSupport();
    this.checkLogSuppression();

    Object.assign(this, window.console)
    window.console = this;

    if (!this.doNotSuppressLog) {
      this.suppress();
    }
  }

  /**
   * Restore console log and info functions
   * @return {void}
   */
  restore() {
    this.log = this._log;
    this.info = this._info;

    if (this.sessionStorageSupport) {
      sessionStorage.setItem('doNotSuppressLog', true);
    }
  }

  /**
   * Suppress console log and info functions
   * stores original functions to be able to restore them
   * @return {void}
   */
  suppress() {
    this._log = this.log;
    this._info = this.info;

    this.log = () => {};
    this.info = () => {};

    if (this.sessionStorageSupport) {
      sessionStorage.setItem('doNotSuppressLog', false);
    }
  }

  /**
   * checks for session storage support an writes it to this.sessionStorageSupport
   * @return {void}
   */
  checkSessionStorageSupport() {
    this.sessionStorageSupport = window.sessionStorage ? true : false;
  }

  /**
   * checks for LogSuppression setting and writes it to this.doNotSuppressLog
   * @return {void}
   */
  checkLogSuppression() {
    this.doNotSuppressLog = false;

    if (this.sessionStorageSupport) {
      this.doNotSuppressLog = sessionStorage.getItem('doNotSuppressLog') === 'true';
    }
  }
}
