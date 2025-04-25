# Message Mixer Project 🔐

A JavaScript project for encrypting/decrypting messages using:
- Caesar cipher
- Symbol substitution
- String reversal

## Files
- `message-mixer.js`: CLI for encryption methods
- `encryptors.js`: Core encryption functions
- `super-encoder.js`: Multi-layer encoder/decoder

## How to Run
```bash
node message-mixer.js caesar 4
> Enter your message...
```

## Encryption Methods
| Method       | Description                     |
|--------------|---------------------------------|
| Caesar       | Shifts letters by N positions   |
| Symbol       | Replaces letters with symbols   |
| Reverse      | Flips the message backward     |
