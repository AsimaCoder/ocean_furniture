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
