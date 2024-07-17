const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post(
  '/',
  [
    check('first', 'First name is required').not().isEmpty(),
    check('last', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
  ],
  userController.registerUser
);



module.exports = router;
