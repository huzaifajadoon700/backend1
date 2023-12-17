// controllers/signin.js
import { signupmodel } from '../models/signup.js';

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signupmodel.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // You may want to implement token-based authentication here

    res.status(200).json({ message: 'Sign-in successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
