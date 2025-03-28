const { encrypt, decrypt } = require('./script');  // Import encrypt and decrypt functions

// Encrypt the payload (generate the token)
const token = encrypt({ userId: '12345' });
console.log('Generated Token:', token);  // Print the generated token

// Decrypt the token (verify and retrieve the original data)
const decodedPayload = decrypt(token);
console.log('Decoded Payload:', decodedPayload);  // Print the decoded payload
