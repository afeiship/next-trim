/*!
 * name: @feizheng/next-trim
 * description: Trim space or customize string.
 * url: https://github.com/afeiship/next-trim
 * version: 1.0.0
 * date: 2020-01-10 15:00:56
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.trim = function(inStr, inChar) {
    if (!inStr) return inStr;
    if (inChar) {
      // todo: maybe cache
      var reg1 = new RegExp('^' + inChar + '+', 'g');
      var reg2 = new RegExp(inChar + '+$', 'g');
      return inStr.replace(reg1, '').replace(reg2, '');
    }
    return String(inStr).trim();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trim;
  }
})();

//# sourceMappingURL=next-trim.js.map
