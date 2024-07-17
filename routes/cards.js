const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const cardController = require('../controllers/cardController');
const auth = require('../middlewares/auth');
const validateObjectId = require('../middlewares/validateObjectId');

router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('subtitle', 'Subtitle is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('phone', 'Phone is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail()
    ]
  ],
  cardController.createCard
);



module.exports = router;
