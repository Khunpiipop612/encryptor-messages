const caesarCipher = (str, amount = 0) => {
    if (amount < 0) {
      return caesarCipher(str, amount + 26);
    }
  
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        const code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      output += char;
    }
    return output;
  };
  
  const symbolCipher = (str) => {
    const symbols = {
      'i': '!',
      '!': 'i',
      'l': '1',
      '1': 'l',
      's': '$',
      '$': 's',
      'o': '0',
      '0': 'o',
      'a': '@',
      '@': 'a',
      'e': '3',
      '3': 'e',
      'b': '6',
      '6': 'b'
    };
  
    let output = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      output += symbols[char] || char;
    }
    return output;
  };
  
  const reverseCipher = (sentence) => {
    return sentence.split('').reverse().join('');
  };
  
  module.exports = {
    caesarCipher,
    symbolCipher,
    reverseCipher
  };