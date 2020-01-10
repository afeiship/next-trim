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
