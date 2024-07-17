const { validationResult } = require('express-validator');
const Card = require('../models/Card');
const User = require('../models/User');

exports.createCard = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, subtitle, description, phone, email, web, image, address } = req.body;

  try {
    let bizNumber = Math.floor(1000000 + Math.random() * 9000000);
    while (await Card.findOne({ bizNumber })) {
      bizNumber = Math.floor(1000000 + Math.random() * 9000000);
    }

    const card = new Card({
      title,
      subtitle,
      description,
      phone,
      email,
      web,
      image,
      address,
      bizNumber,
      user_id: req.user.id
    });

    await card.save();
    res.json(card);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

