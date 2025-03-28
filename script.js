const jwt = require('jsonwebtoken');

// Secret key for signing the token. In production, use an environment variable to keep it secure.
const secretKey = 'your-secret-key';

// Function to encrypt (sign) the payload and return the JWT token
const encrypt = (payload) => {
  // Create the token using the sign method from jsonwebtoken
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
  return token;
};

// Function to decrypt (verify) the token and return the decoded payload
const decrypt = (token) => {
  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, secretKey);
    return decoded;  // Return the decoded payload
  } catch (err) {
    // If verification fails, log the error and return null
    console.error('Invalid token:', err.message);
    return null;
  }
};

// Export the functions to use them in other parts of the application
module.exports = {
  encrypt,
  decrypt
};
