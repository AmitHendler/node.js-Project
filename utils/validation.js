const { check } = require('express-validator');

exports.userValidationRules = () => [
  check('first', 'First name is required').not().isEmpty(),
  check('last', 'Last name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
];

exports.cardValidationRules = () => [
  check('title', 'Title is required').not().isEmpty(),
  check('subtitle', 'Subtitle is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('phone', 'Phone is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail()
];
