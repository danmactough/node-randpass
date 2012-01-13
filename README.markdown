#  node-randpass - Pseudo-random password generator 
      
This module adds a pseudo-random password generator

Generate a random password. By default, alternates vowels and
consonants, for maximum pronounceability.  Uses its own
list of consonants, which excludes f and c and k to prevent
generating obscene-sounding passwords. Number 1 and
lowercase l are excluded on the basis of looking like
each other. Number 0 is also excluded so as not to be mistaken for
uppercase O. An uppercase letter and symbol are used by default.

## Installation

    npm install randpass

## Examples

```javascript
var randpass = require('randpass');
randpass(); // Generates an 8 character password with alternating vowels and consonants, using
            // the default 1 uppercase letter, 1 number, and 1 symbol
randpass(10); // Generates a 10 character password with alternating vowels and consonants, using
              // the default 1 uppercase letter, 1 number, and 1 symbol
randpass({length: 12, symbols: false, capitals: false, alternate: false}); // Generates a 12 character
                                                                           // password without alternating
                                                                           // vowels and consonants and no
                                                                           // symbols or uppercase letters
```

## License 

(The MIT License)

Copyright (c) 2012 Dan MacTough &lt;danmactough@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
