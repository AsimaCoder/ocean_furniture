const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
    }
};
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            'YOUR_SECRET_KEY', 
            { expiresIn: '1h' }
        );

        res.status(200).send({ message: 'Login successful', token: token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

