/*!
 * node-randpass - Pseudo-random password generator
 * Copyright(c) 2012 Dan MacTough <danmactough@gmail.com>
 * MIT Licensed
 */

// Via https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/random#Example:_Using_Math.random
// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random password. By default, alternates vowels and
 * consonants, for maximum pronounceability.  Uses its own 
 * list of consonants, which excludes f and c and k to prevent 
 * generating obscene-sounding passwords. Number 1 and
 * lowercase l are excluded on the basis of looking like 
 * each other. Number 0 is also excluded so as not to be mistaken for
 * uppercase O. An uppercase letter and symbol are used by default.
 *
 * Examples:
 * 
 * var randpass = require('randpass');
 * randpass(); // Generates an 8 character password with alternating vowels and consonants, using 
 *             // the default 1 uppercase letter, 1 number, and 1 symbol
 * randpass(10); // Generates a 10 character password with alternating vowels and consonants, using 
 *               // the default 1 uppercase letter, 1 number, and 1 symbol
 * randpass({length: 12, symbols: false, capitals: false, alternate: false}); // Generates a 12 character
 *                                                                            // password without alternating
 *                                                                            // vowels and consonants and no
 *                                                                            // symbols or uppercase letters
 *
 */

module.exports = function randpass (options){
  if (typeof options == 'number') options = { length: options };
  else if (typeof options != 'object') options = {};

  var str = ''
    , vowels = "aeiouy"
	  , consonants = "bdghjmnpqrstvwxz"
	  , letters = vowels + consonants
	  , numbers = "23456789"
	  , symbols = "!#$%^-"
    , length = options.length >= 8 ? Math.floor(options.length) : 8
    , alternateLetters = 'alternate' in options ? options.alternate : true
    , allowSymbols = 'symbols' in options ? options.symbols : true
    , allowCapitals = 'capitals' in options ? options.capitals : true
	  , alt = !getRandomInt(0, 1)
	  , numpos = getRandomInt(2, length - 1)
	  , sympos = allowSymbols ? getRandomInt(2, length) : 0
	  , cappos = allowCapitals ? getRandomInt(1, length) : 0
    ;

  // Massage the positions
  // It may require a little mental gymnastics to understand
  if (allowSymbols && sympos == numpos) sympos++;
  if (allowCapitals && cappos == sympos) cappos--;
  if (allowCapitals && cappos == numpos) cappos--;
  if (allowCapitals && cappos == sympos) cappos--;

  // Build up the `str` 1 character at a time
  while (str.length < length) {
    switch (str.length + 1) {
      case numpos:
        str += numbers.substr(getRandomInt(1, numbers.length) - 1, 1);
        break;
      case cappos:
        if (!alternateLetters) {
          str += letters.substr(getRandomInt(1, letters.length) - 1, 1).toUpperCase();
        } else if (alt) {
          str += consonants.substr(getRandomInt(1, consonants.length) - 1, 1).toUpperCase();
          alt = !alt;          
        } else {
          str += vowels.substr(getRandomInt(1, vowels.length) - 1, 1).toUpperCase();
          alt = !alt;          
        }
        break;
      case sympos:
        str += symbols.substr(getRandomInt(1, symbols.length) - 1, 1);
        break;
      default:
        if (!alternateLetters) {
          str += letters.substr(getRandomInt(1, letters.length) - 1, 1);
        } else if (alt) {
          str += consonants.substr(getRandomInt(1, consonants.length) - 1, 1);
          alt = !alt;          
        } else {
          str += vowels.substr(getRandomInt(1, vowels.length) - 1, 1);
          alt = !alt;          
        }
    }
  }
  return str;
};
