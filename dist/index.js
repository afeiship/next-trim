/*!
 * name: @jswork/next-trim
 * description: Trim space or customize string.
 * homepage: https://github.com/afeiship/next-trim
 * version: 1.0.0
 * date: 2020-11-22 18:08:33
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var cache = { head: {}, tail: {} };

  nx.trim = function (inStr, inChar) {
    if (!inStr) return inStr;
    if (inChar) {
      var reg1 = (cache.head[inChar] = cache.head[inChar] || new RegExp('^' + inChar + '+', 'g'));
      var reg2 = (cache.tail[inChar] = cache.tail[inChar] || new RegExp(inChar + '+$', 'g'));
      return inStr.replace(reg1, '').replace(reg2, '');
    }
    return String(inStr).trim();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trim;
  }
})();
