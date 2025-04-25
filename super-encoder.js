const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors');

// Encoding/Decoding Functions
const encodeMessage = (str) => {
  let encoded = caesarCipher(str, 5);
  encoded = symbolCipher(encoded);
  encoded = reverseCipher(encoded);
  encoded = caesarCipher(encoded, 10);
  encoded = symbolCipher(encoded);
  return encoded;
};

const decodeMessage = (str) => {
  let decoded = symbolCipher(str);
  decoded = caesarCipher(decoded, -10);
  decoded = reverseCipher(decoded);
  decoded = symbolCipher(decoded);
  decoded = caesarCipher(decoded, -5);
  return decoded;
};

// User Interface
function runEncoder() {
  process.stdout.write('Enter the message you would like to encrypt...\n> ');

  process.stdin.on('data', (userInput) => {
    const message = userInput.toString().trim();
    const encoded = encodeMessage(message);
    const decoded = decodeMessage(encoded);

    process.stdout.write('\nEncoded Message:\n');
    process.stdout.write(`> ${encoded}\n\n`);
    process.stdout.write('Decoded Message:\n');
    process.stdout.write(`> ${decoded}\n\n`);
    process.exit();
  });
}

// Run the program
if (require.main === module) {
  runEncoder();
}

module.exports = { encodeMessage, decodeMessage };