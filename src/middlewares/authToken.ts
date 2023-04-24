import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
  
    jwt.verify(token, "hemligt", (err, decoded) => {
      if (err) {
        console.error(err.message);
        return res.status(401).send('Unauthorized');
      }
      req.userId = decoded.userId;
      next();
    });
  };