'use strict';

var PLUGIN_NAME = 'WiFiManager';
var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');

/**
 * Connects to Wi-Fi access point.
 *
 * @param ssid {String} SSID of Wi-Fi access point
 * @param passphrase {String} passphrase of Wi-Fi access point
 * @param successCb {Function} success callback
 * @param failureCb {Function} failure callback
 *
 * @example
 * wifimanager.connect(
 *   'TARGET_SSID',
 *   'TARGET_PASSPHRASE',
 *   function (ssid, passphrase) {
 *     console.log('Successful. ssid: ' + ssid + ', passphrase: ' + passphrase);
 *   },
 *   function (code, message) {
 *     console.log('Failed. code: ' + code + ', message: ' + message);
 *   }
 * );
 */
function connect (ssid, passphrase, successCb, failureCb) {
  argscheck.checkArgs('ssFF', PLUGIN_NAME + '.connect', arguments);
  exec(successCb, failureCb, PLUGIN_NAME, 'connect', [ssid, passphrase]);
}

/**
 * Disconnects from Wi-Fi access point.
 *
 * @param ssid {String} SSID of Wi-Fi access point
 * @param successCb {Function} success callback
 * @param failureCb {Function} failure callback
 *
 * @example
 * wifimanager.disconnect(
 *   'TARGET_SSID',
 *   function (ssid) {
 *     console.log('Successful. ssid: ' + ssid);
 *   },
 *   function (code, message) {
 *     console.log('Failed. code: ' + code + ', message: ' + message);
 *   }
 * );
 */
function disconnect (ssid, successCb, failureCb) {
  argscheck.checkArgs('sFF', PLUGIN_NAME + '.disconnect', arguments);
  exec(successCb, failureCb, PLUGIN_NAME, 'disconnect', [ssid]);
}

module.exports = {
  connect: connect,
  disconnect: disconnect
};
