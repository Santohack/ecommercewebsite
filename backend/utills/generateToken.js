import jwt from 'jsonwebtoken';

export const generateToken = (res, userId) => {
  if (!userId) {
    throw new Error('User ID must be provided');
  }
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not set in the environment variables');
  }

  // jwt token setup
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token will expire in 30 days
  });

  // cookie setup
  res.cookie('jwt', token, {
    httpOnly: true, // Cookie is not accessible via JavaScript
    sameSite: 'strict', // Cookie will not be sent along with requests initiated by third party websites
    secure: process.env.NODE_ENV !== 'development', // Cookie will be set as secure only if not in development
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie will expire in 30 days
  });
};

