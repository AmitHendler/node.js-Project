const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.registerUser = async (req, res) => {
    try {
        

        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        
        const newUser = new User({
            name: {
                first: req.body.name.first,
                middle: req.body.name.middle,
                last: req.body.name.last,
            },
            isBusiness: req.body.isBusiness,
            phone: req.body.phone,
            email: req.body.email,
            password: hashedPassword,
            address: {
                state: req.body.address.state,
                country: req.body.address.country,
                city: req.body.address.city,
                street: req.body.address.street,
                houseNumber: req.body.address.houseNumber,
            },
            image: {
                url: req.body.image.url,
                alt: req.body.image.alt,
            },
        });

        // Save the user to MongoDB
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
