# next-trim
> Trim space or customize string.

## installation
```bash
npm install -S @feizheng/next-trim
```

## usage
```js
import '@feizheng/next-trim';

//1. trim space:
nx.trim('  abc');
nx.trim('  abc  ');
nx.trim('abc  ');

// abc

// 2.trim char
nx.trim('/sso-login.html','/');
nx.trim('//sso-login.html','/');

// sso-login.html
```
