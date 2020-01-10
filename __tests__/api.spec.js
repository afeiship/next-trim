const nx = require('@feizheng/next-js-core2');
require('../src/next-trim');

describe('api.basic test', () => {
  test('nx.trim when falsy vaule will return self', function() {
    var str1 = null;
    var str2 = '';
    var str3 = undefined;
    var str4 = false;
    expect(nx.trim(str1)).toBe(null);
    expect(nx.trim(str2)).toBe('');
    expect(nx.trim(str3)).toBe(undefined);
    expect(nx.trim(str4)).toBe(false);
  });
  test('nx.trim left trim should work', function() {
    var str1 = '  abcft.com';
    expect(nx.trim(str1)).toBe('abcft.com');
  });

  test('nx.trim right trim should work', function() {
    var str1 = 'abcft.com  ';
    expect(nx.trim(str1)).toBe('abcft.com');
  });

  test('nx.trim both trim should work', function() {
    var str1 = '  abcft.com  ';
    expect(nx.trim(str1)).toBe('abcft.com');
  });

  test('nx.trim trip pat/abc.com/', function() {
    var str1 = '/sso-login.html';
    var str2 = '//sso-login.html';
    expect(nx.trim(str1, '/')).toBe('sso-login.html');
    expect(nx.trim(str2, '/')).toBe('sso-login.html');
  });
});
